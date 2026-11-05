import os
import subprocess
import html

OUTPUT_DIR = "public/universities"

def make_svg(primary_color, secondary_color, acronym, text, subtext="", shape="shield"):
    acronym_esc = html.escape(acronym)
    text_esc = html.escape(text)
    subtext_esc = html.escape(subtext)
    
    font_size_acronym = "26" if len(acronym) <= 4 else ("20" if len(acronym) <= 7 else "15")
    font_size_sub = "8.5" if len(text) <= 12 else "7"

    if shape == "circle":
        inner_badge = f'''
        <circle cx="80" cy="80" r="58" fill="{primary_color}" />
        <circle cx="80" cy="80" r="50" fill="none" stroke="{secondary_color}" stroke-width="2.5" />
        <circle cx="80" cy="80" r="46" fill="{primary_color}" />
        <text x="80" y="78" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="900" font-size="{font_size_acronym}" fill="#ffffff" text-anchor="middle" letter-spacing="1">{acronym_esc}</text>
        <line x1="50" y1="87" x2="110" y2="87" stroke="{secondary_color}" stroke-width="2" stroke-linecap="round" />
        <text x="80" y="101" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="{font_size_sub}" fill="{secondary_color}" text-anchor="middle" letter-spacing="1.2">{text_esc}</text>
        <text x="80" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="700" font-size="6.5" fill="#ffffff" opacity="0.9" text-anchor="middle" letter-spacing="1">{subtext_esc}</text>
        '''
    else:  # shield
        inner_badge = f'''
        <path d="M80 18 C118 18 132 32 132 66 C132 108 80 140 80 140 C80 140 28 108 28 66 C28 32 42 18 80 18 Z" fill="{primary_color}" />
        <path d="M80 25 C111 25 123 37 123 66 C123 101 80 130 80 130 C80 130 37 101 37 66 C37 37 49 25 80 25 Z" fill="none" stroke="{secondary_color}" stroke-width="2.2" />
        <text x="80" y="70" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="900" font-size="{font_size_acronym}" fill="#ffffff" text-anchor="middle" letter-spacing="1">{acronym_esc}</text>
        <line x1="54" y1="80" x2="106" y2="80" stroke="{secondary_color}" stroke-width="2" stroke-linecap="round" />
        <text x="80" y="95" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="{font_size_sub}" fill="{secondary_color}" text-anchor="middle" letter-spacing="1.2">{text_esc}</text>
        <text x="80" y="112" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#ffffff" opacity="0.95" text-anchor="middle" letter-spacing="1">{subtext_esc}</text>
        '''

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.06"/>
    </filter>
  </defs>
  <rect width="160" height="160" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)"/>
  {inner_badge}
</svg>'''
    return svg

def generate_logo(country, slug, primary, secondary, acronym, text, subtext="", shape="shield"):
    dir_path = os.path.join(OUTPUT_DIR, country)
    os.makedirs(dir_path, exist_ok=True)
    
    svg_content = make_svg(primary, secondary, acronym, text, subtext, shape)
    temp_svg = f"/tmp/{country}_{slug}.svg"
    output_avif = os.path.join(dir_path, f"{slug}.avif")
    
    with open(temp_svg, "w", encoding="utf-8") as f:
        f.write(svg_content)
        
    subprocess.run(["magick", temp_svg, "-quality", "85", output_avif], check=True)
    if os.path.exists(temp_svg):
        os.remove(temp_svg)
    return output_avif

# All university specifications across all countries
UNIVERSITIES_BY_COUNTRY = {
    "australia": [
        ("melbourne", "#09418a", "#ffd100", "MELB", "MELBOURNE", "EST 1853", "shield"),
        ("sydney", "#e64626", "#1f2937", "SYDNEY", "USYD", "EST 1850", "shield"),
        ("unsw", "#000000", "#ffcc00", "UNSW", "SYDNEY", "EST 1949", "shield"),
        ("anu", "#1b2a4a", "#be830e", "ANU", "CANBERRA", "EST 1946", "shield"),
        ("monash", "#006dae", "#ffffff", "MONASH", "MELBOURNE", "EST 1958", "shield"),
        ("uq", "#49075e", "#d7a900", "UQ", "QUEENSLAND", "EST 1909", "shield"),
        ("uwa", "#112444", "#d4af37", "UWA", "PERTH", "EST 1911", "shield"),
        ("adelaide", "#002b49", "#a72b2a", "ADELAIDE", "UofA", "EST 1874", "shield"),
        ("deakin", "#008080", "#ffffff", "DEAKIN", "VICTORIA", "EST 1974", "shield"),
        ("uow", "#c41230", "#14234b", "UOW", "WOLLONGONG", "EST 1975", "shield"),
        # Top country list extras
        ("rmit", "#e60000", "#ffd100", "RMIT", "MELBOURNE", "EST 1887", "circle"),
        ("macquarie", "#c8102e", "#002855", "MQ", "MACQUARIE", "SYDNEY", "shield"),
    ],
    "canada": [
        ("toronto", "#002a5c", "#2b78c5", "U of T", "TORONTO", "EST 1827", "shield"),
        ("mcgill", "#ed1b2f", "#ffffff", "MCGILL", "MONTREAL", "EST 1821", "shield"),
        ("ubc", "#0c2340", "#caa254", "UBC", "VANCOUVER", "EST 1908", "shield"),
        ("alberta", "#007c41", "#ffdb05", "UAlberta", "EDMONTON", "EST 1908", "shield"),
        ("waterloo", "#1a1a1a", "#ffd54f", "WATERLOO", "UW", "EST 1957", "shield"),
        ("york", "#e31837", "#ffffff", "YORK", "TORONTO", "EST 1959", "shield"),
        ("ottawa", "#8f001a", "#94a3b8", "uOTTAWA", "OTTAWA", "EST 1848", "shield"),
        ("western", "#4f2683", "#ffffff", "WESTERN", "ONTARIO", "EST 1878", "shield"),
        ("calgary", "#cf0722", "#ffcd00", "CALGARY", "UCalgary", "EST 1966", "shield"),
        ("sfu", "#a6192e", "#333333", "SFU", "BURNABY", "EST 1965", "shield"),
        # Extra colleges
        ("centennial", "#005696", "#7cb82f", "CENTENNIAL", "TORONTO", "COLLEGE", "circle"),
        ("seneca", "#e31837", "#111111", "SENECA", "POLYTECHNIC", "TORONTO", "circle"),
        ("windsor", "#003b71", "#ffcc00", "WINDSOR", "UWINDSOR", "EST 1857", "shield"),
        ("conestoga", "#004838", "#ca9a2c", "CONESTOGA", "ONTARIO", "COLLEGE", "circle"),
    ],
    "czech": [
        ("charles", "#8b0000", "#d4af37", "CHARLES", "PRAGUE", "EST 1348", "shield"),
        ("muni", "#0000dc", "#ffffff", "MUNI", "BRNO", "EST 1919", "shield"),
        ("ctu", "#0065bd", "#009fe3", "ČVUT", "CTU PRAGUE", "EST 1707", "shield"),
        ("vse", "#003b6d", "#ffffff", "VŠE", "PRAGUE", "ECONOMICS", "shield"),
        ("vut", "#e4002b", "#333333", "VUT", "BRNO TECH", "EST 1899", "shield"),
        ("uct", "#00843d", "#0c2340", "UCT", "CHEMISTRY", "PRAGUE", "shield"),
        ("palacky", "#002855", "#0098db", "UPOL", "OLOMOUC", "EST 1573", "shield"),
        ("czu", "#1b5e20", "#f9a825", "ČZU", "LIFE SCIENCES", "PRAGUE", "shield"),
    ],
    "denmark": [
        ("copenhagen", "#901a1e", "#ffffff", "KU", "COPENHAGEN", "EST 1479", "shield"),
        ("dtu", "#990000", "#ffffff", "DTU", "DENMARK TECH", "EST 1829", "shield"),
        ("aarhus", "#002546", "#00a0e9", "AU", "AARHUS", "EST 1928", "shield"),
        ("aalborg", "#211a52", "#9e9e9e", "AAU", "AALBORG", "EST 1974", "shield"),
        ("sdu", "#173f5f", "#ffffff", "SDU", "ODENSE", "EST 1966", "shield"),
        ("roskilde", "#800000", "#ffffff", "RUC", "ROSKILDE", "EST 1972", "shield"),
    ],
    "france": [
        ("skema", "#e4002b", "#1a1a1a", "SKEMA", "BUSINESS", "FRANCE", "circle"),
        ("rennes", "#0055a5", "#e5a93c", "RENNES", "SCHOOL OF BIZ", "EST 1990", "circle"),
        ("neoma", "#002856", "#009edb", "NEOMA", "BUSINESS", "EST 1871", "circle"),
        ("em-normandie", "#12284c", "#e35205", "EM", "NORMANDIE", "EST 1871", "circle"),
        ("college-de-paris", "#b58500", "#1c2530", "CDP", "COLLÈGE DE PARIS", "FRANCE", "circle"),
        ("devinci", "#1e293b", "#2563eb", "DEVINCI", "HIGHER ED", "PARIS", "circle"),
        ("kedge", "#0b1a30", "#d69e2e", "KEDGE", "BUSINESS", "FRANCE", "circle"),
        ("bsb", "#6b1d2f", "#94a3b8", "BSB", "BURGUNDY", "EST 1899", "circle"),
        ("mbs", "#1e3a8a", "#0d9488", "MBS", "MONTPELLIER", "EST 1897", "circle"),
        ("sorbonne", "#3b0764", "#d4af37", "PARIS", "SORBONNE", "EST 1257", "shield"),
        # Top list extras
        ("hec", "#961a1a", "#ffffff", "HEC", "PARIS", "BUSINESS", "shield"),
        ("insead", "#00623d", "#ffffff", "INSEAD", "FONTAINEBLEAU", "BUSINESS", "shield"),
        ("essec", "#1a2c47", "#00a3e0", "ESSEC", "BUSINESS", "PARIS", "shield"),
        ("epita", "#004d9c", "#f39200", "EPITA", "COMPUTER SCI", "PARIS", "circle"),
        ("centralesupelec", "#8a1538", "#ffffff", "CENTRALE", "SUPÉLEC", "PARIS", "shield"),
    ],
    "germany": [
        ("tum", "#0065bd", "#ffffff", "TUM", "MUNICH", "EST 1868", "shield"),
        ("lmu", "#00885a", "#ffffff", "LMU", "MUNICH", "EST 1472", "shield"),
        ("heidelberg", "#8a1538", "#c5a059", "HEIDELBERG", "RUPRECHT", "EST 1386", "shield"),
        ("rwth", "#00549f", "#8ebd0a", "RWTH", "AACHEN", "EST 1870", "shield"),
        ("hu-berlin", "#00376c", "#e6b800", "HU", "BERLIN", "EST 1810", "shield"),
        ("fu-berlin", "#008000", "#003366", "FU", "BERLIN", "EST 1948", "shield"),
        ("kit", "#009682", "#ffffff", "KIT", "KARLSRUHE", "EST 1825", "shield"),
        ("tu-berlin", "#c50e1f", "#ffffff", "TU", "BERLIN", "EST 1879", "shield"),
        ("freiburg", "#004a99", "#a0a0a0", "FREIBURG", "UNI FREIBURG", "EST 1457", "shield"),
        ("bonn", "#003366", "#cca300", "BONN", "UNI BONN", "EST 1818", "shield"),
        # Top country list extras
        ("constructor", "#1b365d", "#00a3e0", "CONSTRUCTOR", "BREMEN", "GERMANY", "circle"),
        ("stuttgart", "#004191", "#ffd100", "STUTTGART", "UNI", "EST 1829", "shield"),
        ("frankfurt-school", "#0a1e38", "#e52928", "FRANKFURT", "SCHOOL", "FINANCE", "circle"),
    ],
    "hungary": [
        ("corvinus", "#002d62", "#c49a45", "CORVINUS", "BUDAPEST", "EST 1920", "shield"),
        ("semmelweis", "#0d324d", "#d4af37", "SEMMELWEIS", "MEDICINE", "EST 1769", "shield"),
        ("pecs", "#9e1b32", "#cfb53b", "PÉCS", "HUNGARY", "EST 1367", "shield"),
        ("debrecen", "#005a36", "#d4a373", "DEBRECEN", "UNIDEB", "EST 1538", "shield"),
        ("szeged", "#003865", "#f7b500", "SZTE", "SZEGED", "EST 1581", "shield"),
        ("bme", "#7e122b", "#ffffff", "BME", "BUDAPEST TECH", "EST 1782", "shield"),
        ("elte", "#8b1e3f", "#d4af37", "ELTE", "BUDAPEST", "EST 1635", "shield"),
        ("miskolc", "#1b365d", "#a6192e", "MISKOLC", "UNI MISKOLC", "EST 1735", "shield"),
        ("sze", "#005ba6", "#ffd100", "SZE", "GYŐR", "EST 1968", "circle"),
        ("ibs", "#1f2937", "#059669", "IBS", "BUDAPEST", "BUSINESS", "circle"),
    ],
    "ireland": [
        ("tcd", "#0c2340", "#d4af37", "TCD", "DUBLIN", "EST 1592", "shield"),
        ("ucd", "#003865", "#eaaa00", "UCD", "DUBLIN", "EST 1854", "shield"),
        ("galway", "#861f41", "#5b6770", "GALWAY", "UNIVERSITY", "EST 1845", "shield"),
        ("ucc", "#101820", "#da291c", "UCC", "CORK", "EST 1845", "shield"),
        ("ul", "#00573d", "#eaaa00", "UL", "LIMERICK", "EST 1972", "shield"),
        ("dcu", "#003b5c", "#f2a900", "DCU", "DUBLIN CITY", "EST 1980", "shield"),
        ("maynooth", "#002b49", "#a6192e", "MAYNOOTH", "IRELAND", "EST 1795", "shield"),
        ("tu-dublin", "#0a2240", "#00a3e0", "TU DUBLIN", "TECHNOLOGY", "EST 2019", "shield"),
        ("nci", "#0d233a", "#009fe3", "NCI", "DUBLIN", "COLLEGE", "circle"),
    ],
    "italy": [
        ("bologna", "#8a0026", "#cda851", "UNIBO", "BOLOGNA", "EST 1088", "shield"),
        ("sapienza", "#7f0029", "#c5a059", "SAPIENZA", "ROMA", "EST 1303", "shield"),
        ("padua", "#9b0014", "#ffffff", "UNIPD", "PADUA", "EST 1222", "shield"),
        ("unimi", "#003366", "#cca300", "UNIMI", "MILANO", "EST 1924", "shield"),
        ("pisa", "#002147", "#c5a059", "UNIPI", "PISA", "EST 1343", "shield"),
        ("polimi", "#002b49", "#ffffff", "POLIMI", "MILANO TECH", "EST 1863", "shield"),
    ],
    "latvia": [
        ("rtu", "#00583c", "#e3b137", "RTU", "RIGA TECH", "EST 1862", "shield"),
        ("lu", "#002d62", "#d4af37", "LU", "LATVIJA", "EST 1919", "shield"),
        ("rsu", "#8a1b29", "#ffffff", "RSU", "STRADINS", "MEDICINE", "shield"),
        ("du", "#0047bb", "#ffd100", "DU", "DAUGAVPILS", "EST 1921", "shield"),
        ("liepaja", "#1b365d", "#00a3e0", "LIEPU", "LIEPĀJA", "EST 1954", "shield"),
        ("va", "#008080", "#ffffff", "ViA", "VALMIERA", "APPLIED SCI", "circle"),
        ("venta", "#0d324d", "#f7b500", "VENTA", "VENTSPILS", "EST 1997", "circle"),
        ("rta", "#6b1d2f", "#cca300", "RTA", "RĒZEKNE", "TECHNOLOGY", "shield"),
        ("lma", "#111111", "#e52928", "LMA", "ART ACADEMY", "RIGA", "circle"),
        ("tsi", "#003865", "#ff6b00", "TSI", "TELECOMM", "RIGA", "circle"),
    ],
    "lithuania": [
        ("vu", "#721832", "#d4af37", "VU", "VILNIUS", "EST 1579", "shield"),
        ("vilnius-tech", "#003865", "#e4002b", "VILNIUS TECH", "GEDIMINAS", "EST 1956", "shield"),
        ("ktu", "#0c2340", "#00a3e0", "KTU", "KAUNAS TECH", "EST 1922", "shield"),
        ("lsmu", "#007a3d", "#d4af37", "LSMU", "HEALTH SCI", "KAUNAS", "shield"),
        ("vmu", "#002f6c", "#a6192e", "VMU", "MAGNUS", "EST 1922", "shield"),
        ("mru", "#004b87", "#ffffff", "MRU", "ROMERIS", "VILNIUS", "shield"),
        ("ku", "#006599", "#ffcc00", "KU", "KLAIPĖDA", "EST 1991", "shield"),
        ("lcc", "#1a365d", "#d69e2e", "LCC", "INTERNATIONAL", "KLAIPĖDA", "circle"),
    ],
    "malaysia": [
        ("um", "#002b49", "#c5a059", "UM", "MALAYA", "EST 1905", "shield"),
        ("monash-my", "#006dae", "#ffffff", "MONASH", "MALAYSIA", "SUNWAY", "shield"),
        ("ukm", "#9d2235", "#eaaa00", "UKM", "KEBANGSAAN", "EST 1970", "shield"),
        ("upm", "#8b0000", "#ffffff", "UPM", "PUTRA", "EST 1931", "shield"),
        ("ucsi", "#003366", "#cca300", "UCSI", "KUALA LUMPUR", "EST 1986", "circle"),
        ("sunway", "#e04f26", "#002d62", "SUNWAY", "UNIVERSITY", "MALAYSIA", "circle"),
    ],
    "malta": [
        ("um", "#8b0000", "#d4af37", "UM", "MALTA", "EST 1592", "shield"),
        ("mcast", "#003b6d", "#f7b500", "MCAST", "POLYTECHNIC", "MALTA", "circle"),
        ("qmul-malta", "#0a1e38", "#00a3e0", "QMUL", "MALTA CAMPUS", "GOZO", "shield"),
        ("aum", "#c41230", "#002855", "AUM", "AMERICAN UNIV", "BORMLA", "circle"),
        ("mdx-malta", "#e4002b", "#ffffff", "MDX", "MIDDLESEX", "MALTA", "circle"),
        ("lsc-malta", "#002147", "#c5a059", "LSC", "COMMERCE", "VALLETTA", "circle"),
        ("gcm", "#008080", "#f2a900", "GCM", "GLOBAL COLLEGE", "SMARTCITY", "circle"),
        ("its", "#12284c", "#ff7f32", "ITS", "TOURISM STUDIES", "MALTA", "circle"),
        ("eihe", "#0c2340", "#e5a93c", "EIHE", "HIGHER ED", "MALTA", "circle"),
        ("ascencia", "#4a154b", "#eaaa00", "ASCENCIA", "BUSINESS", "MALTA", "circle"),
    ],
    "nz": [
        ("auckland", "#002f6c", "#00a3e0", "UOA", "AUCKLAND", "EST 1883", "shield"),
        ("otago", "#002b49", "#eaaa00", "OTAGO", "DUNEDIN", "EST 1869", "shield"),
        ("aut", "#111111", "#e4002b", "AUT", "AUCKLAND TECH", "EST 2000", "circle"),
        ("canterbury", "#9d2235", "#cca300", "UC", "CANTERBURY", "EST 1873", "shield"),
        ("victoria", "#004731", "#c5a059", "VIC", "WELLINGTON", "EST 1897", "shield"),
        ("waikato", "#c41230", "#f7b500", "WAIKATO", "HAMILTON", "EST 1964", "shield"),
        ("massey", "#003865", "#eaaa00", "MASSEY", "PALMERSTON", "EST 1927", "shield"),
        ("lincoln", "#006a52", "#cca300", "LINCOLN", "CANTERBURY", "EST 1878", "shield"),
    ],
    "poland": [
        ("uw", "#003366", "#cca300", "UW", "WARSZAWSKI", "EST 1816", "shield"),
        ("wut", "#990000", "#ffffff", "PW", "POLITECHNIKA", "EST 1826", "shield"),
        ("uj", "#0c2340", "#d4af37", "UJ", "JAGIELLONIAN", "EST 1364", "shield"),
        ("agh", "#800000", "#006400", "AGH", "KRAKÓW TECH", "EST 1919", "shield"),
        ("uam", "#003865", "#94a3b8", "UAM", "POZNAŃ", "EST 1919", "shield"),
        ("pwr", "#8b0000", "#d4a373", "PWr", "WROCŁAW TECH", "EST 1945", "shield"),
        ("pg", "#002244", "#d4af37", "PG", "GDAŃSK TECH", "EST 1904", "shield"),
        ("put", "#0044aa", "#ffffff", "PP", "POZNAŃ TECH", "EST 1919", "shield"),
        ("uwr", "#002855", "#c5a059", "UWr", "WROCŁAW", "EST 1702", "shield"),
        ("tul", "#7e122b", "#ffffff", "PŁ", "ŁÓDŹ TECH", "EST 1945", "shield"),
    ],
    "singapore": [
        ("nus", "#ef7c00", "#003d79", "NUS", "SINGAPORE", "EST 1905", "shield"),
        ("ntu", "#c41230", "#12284c", "NTU", "NANYANG", "EST 1981", "shield"),
        ("smu", "#15264c", "#8a704c", "SMU", "MANAGEMENT", "EST 2000", "shield"),
        ("sutd", "#d0021b", "#ffffff", "SUTD", "TECH & DESIGN", "EST 2009", "circle"),
        ("sit", "#e31837", "#002f6c", "SIT", "INST OF TECH", "EST 2009", "circle"),
        ("jcu", "#002147", "#eaaa00", "JCU", "JAMES COOK", "SINGAPORE", "shield"),
    ],
    "switzerland": [
        ("eu-business", "#0a1e38", "#f2a900", "EU", "BUSINESS SCHOOL", "GENEVA", "circle"),
        ("glion", "#1f2937", "#c5a059", "GLION", "HOSPITALITY", "EST 1962", "shield"),
        ("gbs", "#8b1538", "#d4af37", "GBS", "GENEVA BIZ", "SWISS", "circle"),
        ("shms", "#da291c", "#ffffff", "SHMS", "HOTEL MGMT", "CAUX", "shield"),
        ("bhms", "#002b49", "#d0021b", "BHMS", "LUCERNE", "HOSPITALITY", "circle"),
        ("cesar-ritz", "#0c2340", "#d4af37", "RITZ", "CÉSAR RITZ", "SWISS", "shield"),
        ("aus", "#003865", "#e4002b", "AUS", "APPLIED SCI", "LA TOUR", "circle"),
        ("ssbm", "#222222", "#cca300", "SSBM", "GENEVA", "BUSINESS", "circle"),
        ("htmi", "#1b365d", "#c41230", "HTMi", "HOTEL & TOURISM", "SORENBERG", "shield"),
        ("caa", "#1c1917", "#b45309", "CAA", "CULINARY ARTS", "LE BOUVERET", "circle"),
    ],
    "uae": [
        ("birmingham-dubai", "#c41230", "#002855", "UOB", "BIRMINGHAM", "DUBAI", "shield"),
        ("heriot-watt-dubai", "#002b49", "#c5a059", "HWU", "HERIOT-WATT", "DUBAI", "shield"),
        ("uowd", "#c41230", "#14234b", "UOWD", "WOLLONGONG", "DUBAI", "shield"),
        ("mdx-dubai", "#e4002b", "#1f2937", "MDX", "MIDDLESEX", "DUBAI", "circle"),
        ("curtin-dubai", "#d97706", "#ffffff", "CURTIN", "DUBAI", "AUSTRALIA", "circle"),
    ],
    "uk": [
        ("oxford", "#002147", "#c5a059", "OXFORD", "COLLEGES", "EST 1096", "shield"),
        ("cambridge", "#002c38", "#a3c1ad", "CAM", "CAMBRIDGE", "EST 1209", "shield"),
        ("imperial", "#0000cd", "#ffffff", "IMPERIAL", "COLLEGE LONDON", "EST 1907", "shield"),
        ("ucl", "#500778", "#00a3e0", "UCL", "BLOOMSBURY", "EST 1826", "shield"),
        ("qmul", "#0a1e38", "#00a3e0", "QMUL", "QUEEN MARY", "LONDON", "shield"),
        ("greenwich", "#002040", "#008060", "GREENWICH", "OLD NAVAL", "EST 1890", "shield"),
        ("kcl", "#e31837", "#c5a059", "KCL", "KINGS LONDON", "EST 1829", "shield"),
        ("edinburgh", "#002855", "#d0021b", "EDINBURGH", "SCOTLAND", "EST 1583", "shield"),
        ("manchester", "#660099", "#ffcc00", "MANCHESTER", "UOM", "EST 1824", "shield"),
        ("middlesex", "#e4002b", "#1f2937", "MDX", "HENDON", "LONDON", "circle"),
        # Top list extras
        ("leeds", "#002855", "#009fe3", "LEEDS", "UNIVERSITY", "EST 1904", "shield"),
        ("coventry", "#003b6d", "#f39200", "COVENTRY", "UNIVERSITY", "EST 1992", "circle"),
        ("birmingham", "#c41230", "#002855", "UOB", "BIRMINGHAM", "EST 1900", "shield"),
        ("hertfordshire", "#2c2a29", "#5b2671", "HERTS", "UNIVERSITY", "EST 1952", "circle"),
        ("cardiff", "#d0021b", "#ffffff", "CARDIFF", "WALES", "EST 1883", "shield"),
    ],
    "usa": [
        ("stanford", "#8c1515", "#00505c", "STANFORD", "CARDINAL", "EST 1885", "shield"),
        ("purdue", "#000000", "#cfb991", "PURDUE", "BOILERMAKERS", "EST 1869", "shield"),
        ("usc", "#990000", "#ffcc00", "USC", "TROJANS", "EST 1880", "shield"),
        ("bu", "#cc0000", "#ffffff", "BU", "BOSTON UNIV", "EST 1839", "shield"),
        ("ut-austin", "#bf5700", "#333f48", "TEXAS", "LONGHORNS", "EST 1883", "shield"),
        ("nyu", "#57068c", "#ffffff", "NYU", "NEW YORK", "EST 1831", "shield"),
        # Top list extras
        ("jhu", "#002d72", "#68ace5", "JHU", "JOHNS HOPKINS", "EST 1876", "shield"),
        ("mit", "#a31f34", "#8a8b8c", "MIT", "CAMBRIDGE", "EST 1861", "circle"),
        ("northeastern", "#cc0000", "#000000", "NEU", "NORTHEASTERN", "BOSTON", "shield"),
        ("asu", "#8c1d40", "#ffc627", "ASU", "ARIZONA STATE", "EST 1885", "shield"),
        ("usf", "#006747", "#cfc493", "USF", "SOUTH FLORIDA", "EST 1956", "shield"),
        ("unt", "#00853e", "#ffffff", "UNT", "NORTH TEXAS", "EST 1890", "shield"),
    ]
}

def main():
    total = 0
    for country, unis in UNIVERSITIES_BY_COUNTRY.items():
        print(f"Generating logos for {country} ({len(unis)})...")
        for u in unis:
            slug, primary, secondary, acronym, text, subtext, shape = u
            generate_logo(country, slug, primary, secondary, acronym, text, subtext, shape)
            total += 1
    print(f"\nSUCCESS! Generated {total} .avif logos across {len(UNIVERSITIES_BY_COUNTRY)} countries.")

if __name__ == "__main__":
    main()
