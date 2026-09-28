import glob, re, os
import cv2

used_pngs = set()
for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.jsx')):
            filepath = os.path.join(root, f)
            content = open(filepath, 'r', encoding='utf-8', errors='ignore').read()
            matches = re.findall(r'[\'"](/[a-zA-Z0-9_\-\./]+\.png)[\'"]', content)
            for m in matches:
                used_pngs.add(m)

print(f"Total used PNG images: {len(used_pngs)}")
for p in sorted(used_pngs):
    rel_path = 'public' + p.replace('/', os.sep)
    if not os.path.exists(rel_path):
        print(f"MISSING: {rel_path}")
        continue
    img = cv2.imread(rel_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"UNREADABLE: {rel_path}")
        continue
    channels = img.shape[2] if len(img.shape) > 2 else 1
    has_alpha = (channels == 4)
    min_a = img[:, :, 3].min() if has_alpha else 255
    corner_alphas = [img[0,0,3], img[0,-1,3], img[-1,0,3], img[-1,-1,3]] if has_alpha else [255, 255, 255, 255]
    print(f"{p:35} | Channels: {channels} | MinAlpha: {min_a:3} | CornerAlphas: {corner_alphas}")
