import os, re

files = [
    'AustraliaStudyAbroadContent.tsx',
    'CzechRepublicStudyAbroadContent.tsx',
    'GermanyStudyAbroadContent.tsx',
    'IrelandStudyAbroadContent.tsx',
    'PolandStudyAbroadContent.tsx',
    'USAStudyAbroadContent.tsx'
]

for f in files:
    path = os.path.join('src/components', f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Find all h2 headings
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', content, re.DOTALL)
    clean_h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in h2s]
    print(f"=== {f} ({len(clean_h2s)} sections) ===")
    for h in clean_h2s:
        print("  -", h)
