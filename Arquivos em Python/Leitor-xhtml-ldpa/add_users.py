import re

import ldap3
from ldap3 import MODIFY_ADD
from ldap_config import connect_to_ldap, create_users_container
from xml_processor import parse_xml, get_user_data

# def validate_user_data(name, login, phone):
#     name_pattern = re.compile(r"^[a-zA-Z\s]+$")
#     phone_pattern = re.compile(r"^\d+$")

#     if not name_pattern.match(name):
#         raise ValueError("Nome inválido")
#     phone_digits = re.sub(r'\D', '', phone)
#     if not phone_pattern.match(phone_digits):
#         raise ValueError("Telefone inválido")

def create_user(conn, dn, attributes):
    conn.add(dn, attributes=attributes)

def main():
    conn = None  # Inicializa a variável conn fora do bloco try-except
    try:
        conn = connect_to_ldap()
        
        # Criar contêiner de usuários se ainda não existir
        create_users_container(conn)
        
        tree = parse_xml('AddUsuario2.xml')
        user_data = get_user_data(tree)

        name = user_data.get("Nome Completo")
        login = user_data.get("Login")
        phone = user_data.get("Telefone")
        groups = user_data.get("Grupo")
        
        if isinstance(groups, str):
            groups = [groups]

        # try:
        #     validate_user_data(name, login, phone)
        # except ValueError as e:
        #     print(e)
        #     return

        dn = f"cn={login},ou=users,dc=example,dc=com"
        attributes = {
            'objectClass': ['inetOrgPerson'],
            'cn': login,
            'sn': name,
            'telephoneNumber': re.sub(r'\D', '', phone),  # Remove non-numeric characters from phone
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
