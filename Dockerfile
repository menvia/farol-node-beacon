# Parent Dockerfile https://github.com/nodejs/docker-node/blob/master/7.1/Dockerfile
FROM node:7.1-onbuild
MAINTAINER Felipe Plets <felipe.plets@menvia.com>

# Upgrade system
RUN apt-get update && apt-get upgrade -y

# Install bluetooth
RUN apt-get -y install bluetooth bluez libbluetooth-dev libudev-dev

# Install utils
RUN apt-get -y install usbutils nano

# Define workdir
WORKDIR /data/

# Install eddystone and beacon
RUN npm install --silent

# Clean
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD [ "npm", "start" ]
