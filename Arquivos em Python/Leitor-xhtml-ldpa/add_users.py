import re
import ldap3
from ldap3 import MODIFY_ADD
from ldap_config import connect_to_ldap, create_users_container
from xml_processor import parse_xml, get_user_data

def create_user(conn, dn, attributes):
    conn.add(dn, attributes=attributes)

def main():
    conn = None
    try:
        conn = connect_to_ldap()
        
        create_users_container(conn)
        
        user_tree = parse_xml('./models/AddUsuario1.xml')
        user_data = get_user_data(user_tree)

        user_nome = user_data.get("Nome Completo")
        user_login = user_data.get("Login")
        user_telefone = user_data.get("Telefone")
        groups = user_data.get("Grupo")
        
        if isinstance(groups, str):
            groups = [groups]

        dn = f"cn={user_login},ou=users,dc=example,dc=com"
        attributes = {
            'objectClass': ['inetOrgPerson'],
            'cn': user_login,
            'sn': user_nome,
            'telephoneNumber': re.sub(r'\D', '', user_telefone),
            #'groups': groups
        }

        create_user(conn, dn, attributes)
        
        for group in groups:
            group_dn = f"cn={group},ou=groups,dc=example,dc=com"
            conn.modify(group_dn, {'uniqueMember': [(MODIFY_ADD, [dn])]})
            if conn.result['description'] == 'success':
                print(f"Usuário {dn} adicionado ao grupo {group_dn} com sucesso!")
            else:
                print(f"Erro ao adicionar usuário {dn} ao grupo {group_dn}: {conn.result}")

        print("Usuário criado com sucesso!")
    except Exception as e:
        print("Ocorreu um erro durante a execução do script:", e)

    finally:
        if conn:
            conn.unbind()

if __name__ == "__main__":
    main()
