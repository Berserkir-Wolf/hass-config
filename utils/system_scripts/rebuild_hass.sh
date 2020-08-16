#!/bin/sh
## A quick and nasty script to remove and rebuild the HASS system
## when the services just won't play the damn game.

echo 'Disabling Supervisor and AppArmor services'
systemctl disable hassio-apparmor.service hassio-supervisor.service
echo 'Stopping existing Supervisor and AppArmor services'
systemctl stop hassio-apparmor.service hassio-supervisor.service 

#Remove the docker containers?
#echo 'Building list of containers to remove for rebuild.'
#Stop and remove all the hassio*, addon*, and home-assistant containers
containersinhassio=$(docker network inspect hassio | grep Name | tail -n +2 | cut -d':' -f2 | tr -d ',"')
# Remove the important ones
containerstoremove='hassio_multicast','homeassistant','hassio_supervisor','hassio_audio'
echo "Containers to remove:"
echo $containerstoremove

echo "Removing existing containers"
docker stop homeassistant hassio_audio hassio_cli hassio_multicast hassio_supervisor
docker rm homeassistant hassio_supervisor hassio_audio hassio_cli hassio_multicast

docker stop $containersinhassio
docker rm $containersinhassio

echo "Updating HACS while we're at it"
echo "Downloading new version of HACS from $downloadurl"
hassversion=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/hacs/integration/releases/latest) # Gets latest version
downloadurl=$(echo $hassversion | sed "s/tag/download/")"/hacs.zip" # Converts release page to download link
wget $downloadurl -O ~/hacs.zip --quiet # Downloads to home directory

echo "Extracting new version of HACS"
unzip -o ~/hacs.zip -d /usr/share/hassio/homeassistant/custom_components/hacs/ # Extract it to the right location.

echo "Cleaning up downloads"
rm ~/hacs.zip

echo 'Pulling latest hassio installer script and installing'
curl -sL https://raw.githubusercontent.com/home-assistant/installer/master/installer.sh | bash -s # Pulls latest install script and pipes to bash

echo "Supervisor will launch the HAss containers shortly, including your configured addons."
echo "Done."
