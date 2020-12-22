#!/bin/sh
## This script will install any additional packages required on launch of hass.
## It's a shell-command based method, so that automations can call it.

apk add libhdhomerun

