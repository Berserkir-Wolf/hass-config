# hass-config
My Home Assistant configuration

Not quite everything will be uploaded here, because some things should be kept private.<br>
If you are going to put your config into a git repo, _please_ bear this in mind.

Any time you are working with git, you should make use of a .gitignore file. Mine can be found [here](https://github.com/Berserkir-Wolf/hass-config/blob/master/.gitignore).<br>
In essence, this file tells the git client what files not to push up to the repository.<br>
Things that identify devices, things that keep a history (like the hass database) should be held back. Logging when you are and aren't home and posting it publicly is not good practice at all.<br>

In the base directory locally, I have a file - "secrets.yaml".<br>
In there I define all the things that are referenced by these config files that I don't want public.

For example, my internal IP ranges or API keys.<br>
Where it says `!secret trusted_proxy1` in a configuration file, I then have an entry in secrets.yaml with the IP of one of my reverse proxy hosts (`trusted_proxy1: 1.2.3.4`)<br>
Where it says `!secret service_api_key` in a configuration file, I then have an entry in secrets.yaml with the API key of the relevant service (`service_api_key: thisisnotanactualkey`)

