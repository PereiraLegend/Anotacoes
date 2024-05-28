import xml.etree.ElementTree as ET

class XMLParser:
    def parse_users(self, xml_file):
        tree = ET.parse(xml_file)
        root = tree.getroot()

        users = []
        for user in root.findall('./users/user'):
            cn = user.find('cn').text
            sn = user.find('sn').text
            uid = user.find('uid').text
            telephone = user.find('telephoneNumber').text

            users.append({
                'cn': cn,
                'sn': sn,
                'uid': uid,
                'telephone': telephone
            })

        return users

    def parse_groups(self, xml_file):
        tree = ET.parse(xml_file)
        root = tree.getroot()

        groups = []
        for group in root.findall('./groups/group'):
            cn = group.find('cn').text
            groups.append(cn)

        return groups
