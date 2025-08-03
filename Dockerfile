## download lgihtweibght nginx image

FROM node:18-alpine as build


## select work directory as /app
WORKDIR /app

## copy package.json and package-lock.json to /app
COPY package.json package-lock.json ./


## install dependencies where is the production only in package.json
RUN npm ci --only=production

## copy all file from current directory to app
COPY . .


## build the react app
RUN npm run build


## use nginx to serve the react app
FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]