pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-portfolio-website'
        DOCKER_TAG= "${BUILD_NUMBER}"
        DOCKER_REGISTRY = 'docker.io/clouduser1231/react-cicd' 
        DOCKER_SERVER = '10.0.5.88'
        DOCKER_SERVER_USER = 'ec2-user'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }
        stage('Install Dependencies & Test') {
    steps {
        script {
            echo "Installing dependencies and running tests"
            
            // Install Node.js if not available on Jenkins
            sh '''
                # Check if node is available
                node --version || echo "Node.js not found"
                npm --version || echo "npm not found"
                
                # Install dependencies
                npm ci
                
                # Run tests
                npm test -- --coverage --watchAll=false
            '''
        }
    }
}   
        stage('Build docker image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }


        stage('Push to Docker Registry') {
            when {
                branch 'main'
            }
            steps {
                script {
                        docker.withRegistry('docker.io/clouduser1231/react-cicd', 'docker-registry-credentials') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:latest").push()
                }
            }
        }
    }
    
            stage('Deploy to Docker Server') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // SSH to Docker server and deploy
                    sshagent(['docker-server-ssh-key']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${DOCKER_SERVER_USER}@${DOCKER_SERVER} '
                                # Pull latest image
                                docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}
                                
                                # Stop and remove existing container
                                docker stop react-portfolio || true
                                docker rm react-portfolio || true
                                
                                # Run new container
                                docker run -d \\
                                    --name react-portfolio \\
                                    -p 80:80 \\
                                    --restart unless-stopped \\
                                    ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}
                                    
                                # Clean up old images
                                docker image prune -f
                            '
                        """
                    }
                }
            }
        }
    }

     post {
        always {
            // Clean up local images
            sh 'docker image prune -f'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}