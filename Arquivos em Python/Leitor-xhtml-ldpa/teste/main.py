import sys
from ldap_connector import LDAPConnector
from ldap_operations import LDAPOperations
from xml_parser import XMLParser

def main():
    ldap_url = "ldap://localhost:389"
    admin_dn = "cn=admin,dc=example,dc=com"
    admin_password = "admin"
    xml_file = "data.xml"

    try:
        ldap_connector = LDAPConnector(ldap_url, admin_dn, admin_password)
        ldap_operations = LDAPOperations(ldap_connector.get_connection())
        xml_parser = XMLParser()

        users = xml_parser.parse_users(xml_file)
        for user in users:
            ldap_operations.add_user(user['cn'], user['sn'], user['uid'], user['telephone'])

        groups = xml_parser.parse_groups(xml_file)
        for group in groups:
            ldap_operations.add_group(group)

        ldap_connector.close()
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
