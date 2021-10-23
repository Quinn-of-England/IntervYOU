#Version of node
FROM node:12.22.6-alpine

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#copy package.json into the container
COPY package*.json ./

#install dependencies
RUN npm install --silent

#Copy current directory contents into the container
COPY . .

#Make port 5000 available to the world outside this container
EXPOSE 5000

#Run the app when comtainer launches
CMD ["npm", "start"]