# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN yarn build

# Use an Nginx image to serve the built application
FROM nginx:alpine

# Copy the build files to Nginx's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
