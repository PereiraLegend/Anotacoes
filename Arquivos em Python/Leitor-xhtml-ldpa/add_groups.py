import re
from ldap_config import connect_to_ldap, create_groups_container
from xml_processor import parse_xml, get_group_data

def create_group(conn, dn, attributes):
    print(f"Tentando criar o grupo com DN: {dn} e atributos: {attributes}")
    conn.add(dn, attributes=attributes)
    if conn.result['description'] == 'success':
        print(f"Grupo {dn} criado com sucesso!")
    else:
        print(f"Erro ao criar o grupo {dn}: {conn.result}")

def main():
    conn = None
    try:
        conn = connect_to_ldap()
        
        create_groups_container(conn)
        
        group_tree = parse_xml('./models/AddGrupo3.xml')
        group_data = get_group_data(group_tree)

        print(f"Dados do grupo extraídos do XML: {group_data}")

        group_id = group_data.get("Identificador")
        group_descricao = group_data.get("Descricao")

        group_dn = f"cn={group_id},ou=groups,dc=example,dc=com"
        group_attributes = {
            'objectClass': ['groupOfUniqueNames'],
            'cn': group_id,
            'description': group_descricao,
            'uniqueMember': ['cn=dummy,ou=users,dc=example,dc=com']
        }

        create_group(conn, group_dn, group_attributes)

    except Exception as e:
        print("Ocorreu um erro durante a execução do script:", e)

    finally:
        if conn:
            conn.unbind()

if __name__ == "__main__":
    main()
