import os, re

files = [
    'CanadaStudyAbroadContent.tsx',
    'UKStudyAbroadContent.tsx',
    'FranceStudyAbroadContent.tsx',
    'HungaryStudyAbroadContent.tsx',
    'LithuaniaStudyAbroadContent.tsx',
    'SwitzerlandStudyAbroadContent.tsx'
]

for f in files:
    path = os.path.join('src/components', f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Find all SectionHeader usages
    shs = re.findall(r'<SectionHeader\s+title=[\'"]([^\'"]+)[\'"]', content)
    print(f"=== {f} ({len(shs)} SectionHeaders) ===")
    for s in shs:
        print("  -", s)
