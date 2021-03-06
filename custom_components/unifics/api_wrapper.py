import logging
from enum import Enum

from unificontrol import UnifiClient
from unificontrol.exceptions import UnifiLoginError, UnifiTransportError
from unificontrol import UnifiServerType

_LOGGER = logging.getLogger(__name__)

def create_client( host, port, username, password, site, cert, udm):
    '''create a unificlient and return a error code if any'''

    verifyssl = "FETCH_CERT"
    if cert == True:
       verifyssl = None
    
    if udm == True:
        server_type = UnifiServerType.UDM
    else:
      server_type = UnifiServerType.CLASSIC

    try:
        _LOGGER.debug('host={}, port={}, username={}, site={}, cert={}, udm={}'.format(host, port, username, site, verifyssl, udm))
        client = UnifiClient( host = host,
                              port = port,
                              username = username,
                              password = password,
                              site = site,
                              cert = verifyssl,
                              server_type = server_type 
                             )
        #try to fetch something
        client.list_devices()

    except UnifiLoginError as e:
        _LOGGER.error("unificontrol error: %s", e)
        return { 'client': None, 'error': 'auth' }
            
    except UnifiTransportError as e:
        _LOGGER.error("unificontrol error: %s", e)
        return { 'client': None, 'error': 'ssl' }

    except Exception as e:
        _LOGGER.error("unificontrol error: %s", e)
        if e.args[0] == 113:
            return { 'client': None, 'error': 'unreachable'}
        elif e.args[0] == 111:
            return { 'client': None, 'error': 'connection'}
        else:
            return { 'client': None, 'error': 'unknow'}
            _LOGGER.error("unificontrol error: %s", e)

    _LOGGER.debug("unificontrol: OK") 
    return { 'client': client, 'error': 'ok'}