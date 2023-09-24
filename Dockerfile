# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose a port (e.g., 3000) that your app will listen on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]
