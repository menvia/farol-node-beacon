# Parent Dockerfile https://github.com/hypriot/rpi-node/blob/master/7.0/Dockerfile
FROM hypriot/rpi-node:7.0-onbuild
MAINTAINER Felipe Plets <felipe.plets@menvia.com>

# Upgrade system
RUN apt-get update && apt-get upgrade -y

# Install bluetooth
RUN apt-get -y install bluetooth bluez libbluetooth-dev libudev-dev

# Install utils
RUN apt-get -y install usbutils nano

# Clean
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*