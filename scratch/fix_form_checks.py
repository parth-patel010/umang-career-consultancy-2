import re

for f in ['ItalyStudyAbroadContent.tsx', 'DenmarkStudyAbroadContent.tsx', 'MalaysiaStudyAbroadContent.tsx', 'NewZealandStudyAbroadContent.tsx', 'SingaporeStudyAbroadContent.tsx', 'UAEStudyAbroadContent.tsx']:
    path = 'src/components/' + f
    with open(path, 'r', encoding='utf-8') as fl:
        c = fl.read()
    c = re.sub(
        r'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-2xl mx-auto mb-4">\s*✓\s*</div>',
        '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>',
        c
    )
    with open(path, 'w', encoding='utf-8') as fl:
        fl.write(c)

print('Updated 6 files form submitted checkmark.')
