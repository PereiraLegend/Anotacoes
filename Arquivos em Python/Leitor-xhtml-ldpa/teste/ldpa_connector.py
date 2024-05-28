from ldap3 import Server, Connection, ALL

class LDAPConnector:
    def __init__(self, url, admin_dn, admin_password):
        self.server = Server(url, get_info=ALL)
        self.conn = Connection(self.server, admin_dn, admin_password, auto_bind=True)

    def get_connection(self):
        return self.conn

    def close(self):
        self.conn.unbind()
