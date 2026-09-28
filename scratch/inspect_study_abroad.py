import glob
import os

files = glob.glob('src/components/*StudyAbroadContent.tsx')
for p in files:
    with open(p, 'r', encoding='utf-8') as f:
        c = f.read()
    print(f"=== {os.path.basename(p)} ===")
    for l in c.splitlines():
        if '<Image' in l or 'src="/' in l:
            print("  ", l.strip()[:110])
