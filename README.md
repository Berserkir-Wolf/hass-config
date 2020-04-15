# hass-config
 My Home Assistant configuration

Not everything will be uploaded here, because of course passwords etc should be privatised.
In the base directory locally, I have a file - "secrets.yaml".
In there are all the things that are referenced by these config files.

For example, where it says `!secret trusted_proxy1` in the configuration file, in the secrets file I have an entry with the IP of one of my reverse proxy hosts (`trusted_proxy1: 1.2.3.4`)
