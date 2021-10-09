#Version of node
FROM node:12.22.6-alpine

#Set working directory to app
WORKDIR /usr/src/app

#copy package.json into the container
COPY package*.json ./

#install dependencies
RUN npm install --silent

#Copy current directory contents into the container
COPY . .

#Make port 3000 available to the world outside this container
EXPOSE 3000

#Run the app when comtainer launches
CMD ["npm", "start"]