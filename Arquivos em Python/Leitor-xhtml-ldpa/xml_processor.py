import xml.etree.ElementTree as ET

def parse_xml(file_path):
    tree = ET.parse(file_path)
    return tree

def get_user_data(tree):
    root = tree.getroot()
    user_data = {}

    for add_attr in root.findall('add-attr'):
        attr_name = add_attr.get('attr-name')
        values = [value.text for value in add_attr.findall('value')]

        if len(values) == 1:
            user_data[attr_name] = values[0]
        else:
            user_data[attr_name] = values

    return user_data

def get_group_data(tree):
    root = tree.getroot()
    group_data = {}

    for add_attr in root.findall('add-attr'):
        attr_name = add_attr.get('attr-name')
        values = [value.text for value in add_attr.findall('value')]

        if len(values) == 1:
            group_data[attr_name] = values[0]
        else:
            group_data[attr_name] = values
    print(f"Dados extraídos do XML: {group_data}")
    return group_data

def get_modification_data(tree):
    root = tree.getroot()
    modification_data = {
        "Login": root.find('association').text,
        "AddGroups": [],
        "RemoveGroups": []
    }

    for modify_attr in root.findall('modify-attr'):
        attr_name = modify_attr.get('attr-name')
        if attr_name == "Grupo":
            for add_value in modify_attr.findall('add-value'):
                modification_data["AddGroups"].append(add_value.find('value').text)
            for remove_value in modify_attr.findall('remove-value'):
                modification_data["RemoveGroups"].append(remove_value.find('value').text)

    print(f"Dados de modificação extraídos do XML: {modification_data}")
    return modification_data