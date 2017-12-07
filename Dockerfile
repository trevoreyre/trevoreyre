FROM node:8
ENV HOST 0.0.0.0
ENV HOME /root

# Copy config files to container from Git (.bashrc, .gitconfig, etc)
RUN curl -Lks https://gist.githubusercontent.com/TrevorEyre/c4170c6023e94f86cac1d8025aa3176d/raw | /bin/bash

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package*.json /app/
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
