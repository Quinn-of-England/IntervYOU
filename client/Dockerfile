# Install Node with Specified Version
FROM node:12.22.6-alpine

# Create and Set Working Directory to App 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json into Container
COPY package*.json .

# Install Dependencies
RUN npm install --production

# Copy Project into Working Directory in Container
COPY . .
#/usr/src/app/

# Expose/Make Port 3000 Accessible
EXPOSE 3000

# Run Client Side with Start Script
CMD ["npm", "start"]