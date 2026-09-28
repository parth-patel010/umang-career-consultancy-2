import re

for filename in ['AustraliaStudyAbroadContent.tsx', 'CzechRepublicStudyAbroadContent.tsx', 'GermanyStudyAbroadContent.tsx', 'IrelandStudyAbroadContent.tsx', 'PolandStudyAbroadContent.tsx', 'USAStudyAbroadContent.tsx']:
    path = 'src/components/' + filename
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Find all occurrences of text-center.*mb-
    headers = re.findall(r'(<div className="text-center[^"]*">\s*<div[^>]*>.*?</div>\s*<h2[^>]*>.*?</h2>\s*<p[^>]*>.*?</p>\s*</div>)', text, re.DOTALL)
    print(f"{filename}: found {len(headers)} full header blocks")
