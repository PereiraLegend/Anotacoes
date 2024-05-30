import os
from ldap_config import connect_to_ldap
from xml_processor import parse_xml, get_elements_by_xpath

def modify_user(conn, dn, add_values=[], remove_values=[]):
    conn.modify(dn, {'member': [(ldap3.MODIFY_ADD, value) for value in add_values],
                     'member': [(ldap3.MODIFY_DELETE, value) for value in remove_values]})

def main():
    try:
        print("Conectando ao servidor LDAP...")
        conn = connect_to_ldap()
        print("Conexão LDAP estabelecida com sucesso.")
        
        tree = parse_xml('ModifyUsuario.xml')
        modifications = get_elements_by_xpath(tree, './/modify[@class-name="Usuario"]')

        for mod in modifications:
            user_cn = mod.find('association').text
            add_values = [value.text for value in mod.findall('modify-attr[@attr-name="Grupo"]/add-value/value')]
            remove_values = [value.text for value in mod.findall('modify-attr[@attr-name="Grupo"]/remove-value/value')]

            dn = f"cn={user_cn},ou=users,dc=example,dc=com"

            modify_user(conn, dn, add_values=add_values, remove_values=remove_values)

        print("Operações concluídas com sucesso!")
    except Exception as e:
        print("Ocorreu um erro durante a execução do script:", e)

    finally:
        if conn:
            conn.unbind()

if __name__ == "__main__":
    main()
