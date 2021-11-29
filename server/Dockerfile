# Install Node with Specified Version
FROM node:12.22.6-alpine

# Create and Set Working Directory to App
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json into Container
COPY package*.json .

# Install Dependencies
RUN npm install --silent

# Copy Project into Working Directory in Container
COPY . .

# Expose/Make Port 5000 Accessible
EXPOSE 5000

# Run Server Side with Start Script
CMD ["npm", "start"]