# pull official base image
FROM node:latest

# We make & move to a new directory to avoid having troubles with node_module
RUN mkdir -p /usr/src/app

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . .

# expose the port
EXPOSE 8080

# start app
CMD [ "npm", "start" ]