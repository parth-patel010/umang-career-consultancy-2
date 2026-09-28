import glob, os, re

files = [
    'CanadaStudyAbroadContent.tsx',
    'DenmarkStudyAbroadContent.tsx',
    'FranceStudyAbroadContent.tsx',
    'HungaryStudyAbroadContent.tsx',
    'ItalyStudyAbroadContent.tsx',
    'LatviaStudyAbroadContent.tsx',
    'LithuaniaStudyAbroadContent.tsx',
    'MalaysiaStudyAbroadContent.tsx',
    'MaltaStudyAbroadContent.tsx',
    'NewZealandStudyAbroadContent.tsx',
    'SingaporeStudyAbroadContent.tsx',
    'StudyAbroadContent.tsx',
    'SwitzerlandStudyAbroadContent.tsx',
    'UAEStudyAbroadContent.tsx',
    'UKStudyAbroadContent.tsx'
]

for name in files:
    path = os.path.join('src/components', name)
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # check hero visual wrapper
    m = re.search(r'<div[^>]*aspect-square[^>]*>', text)
    wrapper = m.group(0) if m else "NO ASPECT SQUARE"
    
    # check tel link
    m_tel = re.search(r'<a[^>]*href="tel:[^"]*"[^>]*>', text)
    tel = m_tel.group(0) if m_tel else "NO TEL LINK"
    
    print(f"{name:32} | Wrapper: {wrapper[:60]} | Tel: {tel[:50]}")
