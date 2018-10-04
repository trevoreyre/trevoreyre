FROM trevoreyre/node
ENV HOST 0.0.0.0
USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY ./package*.json /home/node/app/
RUN npm install
