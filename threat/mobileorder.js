var threatdata = {
    "name": "MobileOrder",
    "alias": "MobileOrder",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration, Downloader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "MobileOrder",
        "names": [
            {
                "name": "MobileOrder"
            }
        ],
        "description": "(Palo Alto) The malware uses the AMAP SDK to get accurate location of infected devices by GPS, mobile network (such as base stations), WiFi and other information. MobileOrder acts on instructions provided by its C2 server, which it communicates with over TCP port 3728. All C2 communications are encrypted with the AES algorithm using a key generated by computing five MD5 hashes starting with the key \u201c1qazxcvbnm\u201d, and adding a salt value of \u201c.)1/\u201d in each iteration.\n\nThe C2 server will respond to requests from MobileOrder with commands that the Trojan refers to as \u201corders\u201d. MobileOrder contains a command handler with functionality that provides a fairly robust set of commands, as seen in Table 6. The first byte of data provided by the C2 server is order number, which is followed by the encrypted data that needed to carry out the specific order.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/scarlet-mimic-years-long-espionage-targets-minority-activists/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0079/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.mobile_order"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MobileOrder"
        ],
        "uuid": "e1aa1dd5-eaa8-4bb6-91be-ba0d350827bc",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mobileorder",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2022/never-truly-left-7-years-of-scarlet-mimics-mobile-surveillance-campaign-targeting-uyghurs/",
            "date": "2022-09-22",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "7 Years of Scarlet Mimic\u2019s Mobile Surveillance Campaign Targeting Uyghurs",
            "categories": [
                "MobileOrder"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "mobileorder",
            "procedure_code": "s0079",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0079",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1217",
                    "technique_link": "https://attack.mitre.org/techniques/T1217",
                    "technique_name": "browser information discovery",
                    "technique_description": "adversaries may enumerate information about browsers to learn more about compromised environments. data saved by browsers (such as bookmarks, accounts, and browsing history) may reveal a variety of personal information about users (e.g., banking sites, relationships/interests, social media, etc.) as well as details about internal network resources such as servers, tools/dashboards, or other related infrastructure.",
                    "procedure_description": "mobileorder has a command to upload to its c2 server victim browser bookmarks.[15]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "mobileorder has a command to upload to its c2 server information about files on the victim mobile device, including sd card size, installed app list, sms content, contacts, and calling history.[200]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "mobileorder has a command to upload information about all running processes to its c2 server.[173]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "mobileorder has a command to upload to its c2 server victim mobile device information, including imei, imsi, sim card serial number, phone number, android version, and other information.[233]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "mobileorder exfiltrates data collected from the victim mobile device.[122]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "mobileorder has a command to download a file from the c2 server to the victim mobile device's sd card.[91]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "mobileorder exfiltrates data to its c2 server over the same protocol as c2 communications.[21]"
                }
            ]
        }
    ]
};