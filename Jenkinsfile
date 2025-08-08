pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-portfolio-website'
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_REPO = 'clouduser1231/react-cicd'
        DOCKER_SERVER = '10.0.5.134'
        DOCKER_SERVER_USER = 'ec2-user'
        GIT_REPO = 'http://10.0.5.50:8929/root/react.git'
        GIT_BRANCH = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Use explicit git checkout
                    git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
                    
                    // Verify files are present
                    sh 'ls -la'
                    sh 'echo "Checking for required files:"'
                    sh 'ls -la package.json Dockerfile || echo "Some files missing"'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    
                    // Build Docker images using shell commands
                    // here we call docker build with the current directory ..
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                    
                    // Tag for registry
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_REPO}:${DOCKER_TAG}"
                    sh "docker tag ${DOCKER_IMAGE}:latest ${DOCKER_REPO}:latest"
                    
                    // Verify images were created
                    sh "docker images | grep ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Push to Docker Registry') {

            steps {
                script {
                    echo "Pushing images to Docker registry"
                    
                    // Login to Docker registry using credentials
                    withCredentials([usernamePassword(credentialsId: 'docker-registry-credentials', 
                                                    usernameVariable: 'DOCKER_USERNAME', 
                                                    passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login $DOCKER_REGISTRY -u $DOCKER_USERNAME --password-stdin'
                    }
                    
                    // Push images
                    sh "docker push ${DOCKER_REPO}:${DOCKER_TAG}"
                    sh "docker push ${DOCKER_REPO}:latest"
                    
                    echo "Images pushed successfully"
                }
            }
        }
        
        stage('Deploy to Docker Server') {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo "Deploying to Docker server: ${DOCKER_SERVER}"
                    
                    // SSH to Docker server and deploy
                    // I need to copy id_rsa from my local machine to jenkins credentials
                    sshagent(['docker-server-ssh-key']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${DOCKER_SERVER_USER}@${DOCKER_SERVER} '
                                echo "Pulling latest image from registry..."
                                docker pull ${DOCKER_REPO}:${DOCKER_TAG}
                                
                                echo "Stopping existing container..."
                                docker stop react-portfolio || true
                                docker rm react-portfolio || true
                                
                                echo "Starting new container..."
                                docker run -d \\
                                    --name react-portfolio \\
                                    -p 80:80 \\
                                    --restart unless-stopped \\
                                    ${DOCKER_REPO}:${DOCKER_TAG}
                                
                                echo "Verifying deployment..."
                                docker ps | grep react-portfolio
                                
                                echo "Cleaning up old images..."
                                docker image prune -f
                                
                                echo "Deployment completed successfully!"
                            '
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                // Clean up local images
                sh 'docker image prune -f'
                
                // Logout from Docker registry
                sh 'docker logout $DOCKER_REGISTRY || true'
            }
        }
        success {
            echo 'Deployment successful!'
            echo "React app should be available at: http://${DOCKER_SERVER}"
        }
        failure {
            echo 'Deployment failed!'
            script {
                // Show Docker logs for debugging
                sh 'docker ps -a | grep react-portfolio || echo "No containers found"'
                sh 'docker logs react-portfolio || echo "No logs available"'
            }
        }
    }
}