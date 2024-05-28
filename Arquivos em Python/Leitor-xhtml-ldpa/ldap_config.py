from ldap3 import Server, Connection, ALL

def connect_to_ldap():
    server = Server('ldap://localhost:389', get_info=ALL)
    conn = Connection(server, 'cn=admin,dc=example,dc=com', '2002', auto_bind=True)
    return conn

def create_users_container(conn):
    container_dn = 'ou=users,dc=example,dc=com'
    conn.add(container_dn, 'organizationalUnit')
