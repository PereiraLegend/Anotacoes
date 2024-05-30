# from ldap3 import Server, Connection, ALL

# def connect_to_ldap():
#     server = Server('ldap://localhost:389', get_info=ALL)
#     conn = Connection(server, 'cn=admin,dc=example,dc=com', '2002', auto_bind=True)
#     return conn

# def create_users_container(conn):
#     container_dn = 'ou=users,dc=example,dc=com'
#     conn.add(container_dn, 'organizationalUnit')
from ldap3 import Server, Connection, ALL

def connect_to_ldap():
    server = Server('ldap://localhost:389', get_info=ALL)
    conn = Connection(server, 'cn=admin,dc=example,dc=com', '2002', auto_bind=True)
    return conn

# def create_users_container(conn):
#     container_dn = 'ou=users,dc=example,dc=com'
#     conn.add(container_dn, 'organizationalUnit')

# # def create_groups_container(conn):
# #     container_dn = 'ou=groups,dc=example,dc=com'
# #     conn.add(container_dn, 'organizationalUnit')
# def create_groups_container(conn):
#     container_dn = 'ou=groups,dc=example,dc=com'
#     if not conn.search(container_dn, '(objectClass=*)'):
#         conn.add(container_dn, 'organizationalUnit')

def create_users_container(conn):
    dn = "ou=users,dc=example,dc=com"
    attributes = {
        'objectClass': ['organizationalUnit'],
        'ou': 'users'
    }
    conn.add(dn, attributes=attributes)
    if conn.result['description'] == 'success':
        print("Container de usuários criado com sucesso!")
    else:
        print(f"Erro ao criar o container de usuários: {conn.result}")

def create_groups_container(conn):
    dn = "ou=groups,dc=example,dc=com"
    attributes = {
        'objectClass': ['organizationalUnit'],
        'ou': 'groups'
    }
    conn.add(dn, attributes=attributes)
    if conn.result['description'] == 'success':
        print("Container de grupos criado com sucesso!")
    else:
        print(f"Erro ao criar o container de grupos: {conn.result}")