# hass-config
My Home Assistant configuration

### Warning
Not quite everything will be uploaded here, because some things should be kept private.<br>
If you are going to put your config into a git repo, _please_ bear this in mind.<br>
As an example of what can happen, I've included an API key in one of my files - [Openweathermap](https://github.com/Berserkir-Wolf/hass-config/blob/master/sensors/openweathermap.yaml).<br>
It took a couple days to be seen, and then my API key was being used in multiple places.<br>
_I have since invalidated this key._

Any time you are working with git, you should make use of a .gitignore file. Mine can be found [here](https://github.com/Berserkir-Wolf/hass-config/blob/master/.gitignore).<br>
In essence, this file tells the git client what files not to push up to the repository.<br>
Things that identify devices, things that keep a history (like the hass database) should be held back. Logging when you are and aren't home and posting it publicly is not good practice at all.<br>

### Mitigating risks
In order to still use git for things, HAss has the option for using a "secrets.yaml" file (in the /config directory).<br>
Use this to define all the things that are needed for use but shouldn't be public - like API keys, passwords, UIDs etc.<br>
I'm slowly changing things and working on ways to define people and locations through this sheet, just for security.

To use the secrets file, enter a corresponding key in the file for use elsewhere.<br>
For example:<br>
In configuration.yaml, where it says `!secret trusted_proxy1`, I then have an entry in secrets.yaml with the IP of one of my reverse proxy hosts (`trusted_proxy1: 1.2.3.4`)<br>
Where it says `!secret service_api_key` in a sensor configuration file, I then have an entry in secrets.yaml with the API key of the relevant service (`service_api_key: thisisnotanactualkey`)

This allows me to use the configuration files without exposing passwords or access keys. 
