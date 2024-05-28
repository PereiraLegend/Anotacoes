import re
from ldap3 import Connection, ALL_ATTRIBUTES

class LDAPOperations:
    def __init__(self, connection: Connection):
        self.connection = connection

    def add_user(self, cn, sn, uid, telephone):
        if not re.match(r'^\d+$', telephone):
            raise ValueError("Telephone must contain only numbers")

        dn = f"uid={uid},ou=users,dc=example,dc=com"
        attributes = {
            'objectClass': ['inetOrgPerson'],
            'cn': cn,
            'sn': sn,
            'uid': uid,
            'telephoneNumber': telephone
        }

        self.connection.add(dn, attributes=attributes)
        if not self.connection.result['description'] == 'success':
            raise Exception(f"Failed to add user {uid}: {self.connection.result['message']}")

    def add_group(self, cn):
        dn = f"cn={cn},ou=groups,dc=example,dc=com"
        attributes = {
            'objectClass': ['groupOfUniqueNames'],
            'cn': cn,
            'uniqueMember': []
        }

        self.connection.add(dn, attributes=attributes)
        if not self.connection.result['description'] == 'success':
            raise Exception(f"Failed to add group {cn}: {self.connection.result['message']}")
