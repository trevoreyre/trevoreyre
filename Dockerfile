FROM node:8
ENV HOST 0.0.0.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package*.json /app/
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
