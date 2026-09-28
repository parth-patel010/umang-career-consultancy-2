import glob, re, os

service_pages = glob.glob('src/components/*Content.tsx')
for p in sorted(service_pages):
    if 'StudyAbroad' in p: continue
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    imgs = re.findall(r'src=["\'](/[^"\']+\.(?:png|jpg|jpeg|webp))["\']', content)
    base = os.path.basename(p)
    print(f'{base:35}: {imgs}')
