# xml_processor.py
from lxml import etree

def parse_xml(file_path):
    tree = etree.parse(file_path)
    return tree

def get_elements_by_xpath(tree, xpath):
    return tree.xpath(xpath)
