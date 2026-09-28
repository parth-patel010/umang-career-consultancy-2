import glob, re, os

study_pages = glob.glob('src/components/*StudyAbroadContent.tsx')
for p in sorted(study_pages):
    base = os.path.basename(p)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the block around <Image
    m = re.search(r'<div[^>]*aspect-square[^>]*>[\s\S]*?<Image[\s\S]*?/>[\s\S]*?</div>', content)
    if not m:
        m = re.search(r'<Image[^>]*hero[^>]*/>', content)
    
    snippet = m.group(0) if m else "NOT FOUND"
    print(f"=== {base} ===")
    print(snippet[:200])
