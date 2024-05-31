import re
from ldap_config import connect_to_ldap
from xml_processor import parse_xml, get_modification_data
from ldap3 import MODIFY_ADD, MODIFY_DELETE

def modify_user_group_associations(conn, user_dn, add_groups, remove_groups):
    for group in remove_groups:
        group_dn = f"cn={group},ou=groups,dc=example,dc=com"
        conn.modify(group_dn, {'uniqueMember': [(MODIFY_DELETE, [user_dn])]})
        if conn.result['description'] == 'success':
            print(f"Usuário {user_dn} removido do grupo {group_dn} com sucesso!")
        else:
            print(f"Erro ao remover usuário {user_dn} do grupo {group_dn}: {conn.result}")

    for group in add_groups:
        group_dn = f"cn={group},ou=groups,dc=example,dc=com"
        conn.modify(group_dn, {'uniqueMember': [(MODIFY_ADD, [user_dn])]})
        if conn.result['description'] == 'success':
            print(f"Usuário {user_dn} adicionado ao grupo {group_dn} com sucesso!")
        elif conn.result['description'] == 'attributeOrValueExists':
            print(f"Usuário {user_dn} já é membro do grupo {group_dn}.")
        else:
            print(f"Erro ao adicionar usuário {user_dn} ao grupo {group_dn}: {conn.result}")

def main():
    conn = None
    try:
        conn = connect_to_ldap()
        modification_tree = parse_xml('./models/ModifyUsuario.xml')
        modification_data = get_modification_data(modification_tree)
        
        login = modification_data.get("Login")
        add_groups = modification_data.get("AddGroups", [])
        remove_groups = modification_data.get("RemoveGroups", [])

        user_dn = f"cn={login},ou=users,dc=example,dc=com"

        modify_user_group_associations(conn, user_dn, add_groups, remove_groups)

        print("Modificações processadas com sucesso!")
    except Exception as e:
        print("Ocorreu um erro durante a execução do script:", e)
    finally:
        if conn:
            conn.unbind()

if __name__ == "__main__":
    main()
