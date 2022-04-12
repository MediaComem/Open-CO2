# Node base image with the latest LTS version
FROM node:16.14.2
# Container listens on the network ports
EXPOSE 4000
# Copy project sources to a new directory
COPY . app/
# Changes working directory to the new created directory
WORKDIR /app
# Installs node dependencies
RUN npm ci
# Start server with main node script
CMD ["npm", "start"]