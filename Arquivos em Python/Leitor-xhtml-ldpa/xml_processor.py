# # xml_processor.py
# from lxml import etree

# def parse_xml(file_path):
#     tree = etree.parse(file_path)
#     return tree

# def get_elements_by_xpath(tree, xpath):
#     return tree.xpath(xpath)


# import xml.etree.ElementTree as ET

# def parse_xml(file_path):
#     tree = ET.parse(file_path)
#     return tree

# def get_elements_by_xpath(tree, xpath):
#     elements = tree.findall('.//add[@class-name="Grupo"]')
#     return elements

# import xml.etree.ElementTree as ET

# def parse_xml(file_path):
#     tree = ET.parse(file_path)
#     return tree

# def get_elements_by_xpath(tree, xpath):
#     return tree.findall(xpath)
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