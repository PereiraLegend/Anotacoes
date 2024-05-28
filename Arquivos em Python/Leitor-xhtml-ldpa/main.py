import re
from ldap_config import connect_to_ldap, create_users_container
from xml_processor import parse_xml, get_elements_by_xpath

def validate_user_data(name, login, phone):
    name_pattern = re.compile(r"^[a-zA-Z\s]+$")
    phone_pattern = re.compile(r"^\d+$")

    if not name_pattern.match(name):
        raise ValueError("Nome inválido")
    if not phone_pattern.match(phone):
        raise ValueError("Telefone inválido")

def create_user(conn, dn, attributes):
    conn.add(dn, attributes=attributes)

def main():
    conn = None  # Inicializa a variável conn fora do bloco try-except
    try:
        conn = connect_to_ldap()
        
        # Criar contêiner de usuários se ainda não existir
        create_users_container(conn)
        
        tree = parse_xml('users.xml')
        users = get_elements_by_xpath(tree, '//user')

        for user in users:
            name = user.find('name').text
            login = user.find('login').text
            phone = user.find('phone').text

            try:
                validate_user_data(name, login, phone)
            except ValueError as e:
                print(e)
                continue

            dn = f"cn={login},ou=users,dc=example,dc=com"
            attributes = {
                'objectClass': ['inetOrgPerson'],
                'cn': login,
                'sn': name,
                'telephoneNumber': phone
            }

            create_user(conn, dn, attributes)

        print("Usuários criados com sucesso!")
    except Exception as e:
        print("Erro durante a execução do script:", e)

    finally:
        if conn:
            conn.unbind()

if __name__ == "__main__":
    main()
