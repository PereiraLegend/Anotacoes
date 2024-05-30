import re
from ldap_config import connect_to_ldap, create_groups_container
from xml_processor import parse_xml, get_group_data

def create_group(conn, dn, attributes):
    print(f"Tentando criar o grupo com DN: {dn} e atributos: {attributes}")  # Mensagem de depuração
    conn.add(dn, attributes=attributes)
    if conn.result['description'] == 'success':
        print(f"Grupo {dn} criado com sucesso!")
    else:
        print(f"Erro ao criar o grupo {dn}: {conn.result}")

def main():
    conn = None  # Inicializa a variável conn fora do bloco try-except
    try:
        conn = connect_to_ldap()
        
        # Criar contêiner de grupos se ainda não existir
        create_groups_container(conn)
        
        # Processar dados dos grupos
        group_tree = parse_xml('AddGrupo3.xml')
        group_data = get_group_data(group_tree)

        print(f"Dados do grupo extraídos do XML: {group_data}")  # Mensagem de depuração

        group_id = group_data.get("Identificador")
        group_description = group_data.get("Descricao")

        group_dn = f"cn={group_id},ou=groups,dc=example,dc=com"
        group_attributes = {
            'objectClass': ['groupOfUniqueNames'],
            'cn': group_id,
            'description': group_description,
            'uniqueMember': ['cn=dummy,ou=users,dc=example,dc=com']  # Valor dummy para cumprir a exigência
        }

        create_group(conn, group_dn, group_attributes)

    except Exception as e:
        print("Ocorreu um erro durante a execução do script:", e)

    finally:
        if conn:
            conn.unbind()

if __name__ == "__main__":
    main()
