import glob, re, os
from PIL import Image
import numpy as np

used_images = set()
for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js')):
            filepath = os.path.join(root, f)
            content = open(filepath, 'r', encoding='utf-8', errors='ignore').read()
            matches = re.findall(r'[\'"](/[a-zA-Z0-9_\-\./]+\.(?:png|jpg|jpeg|webp))[\'"]', content)
            for m in matches:
                used_images.add(m)

print(f"Total used images found: {len(used_images)}")
for img_path in sorted(used_images):
    rel_path = 'public' + img_path.replace('/', os.sep)
    if not os.path.exists(rel_path):
        print(f"MISSING: {rel_path}")
        continue
    try:
        im = Image.open(rel_path)
        arr = np.array(im)
        mode = im.mode
        has_alpha = ('A' in mode)
        min_a = arr[:,:,3].min() if has_alpha else 255
        
        # Check corners
        corners = [arr[0,0], arr[0,-1], arr[-1,0], arr[-1,-1]]
        corners_white = all(np.mean(c[:3]) > 235 for c in corners)
        
        # Check edge white
        edges = np.concatenate([arr[0,:,:3], arr[-1,:,:3], arr[:,0,:3], arr[:,-1,:3]], axis=0)
        pct_white = np.mean(np.all(edges > 235, axis=-1)) * 100
        
        print(f"{img_path:35} | {mode:4} | MinA: {min_a:3} | CornerW: {str(corners_white):5} | EdgeWhite%: {pct_white:5.1f}%")
    except Exception as e:
        print(f"{img_path:35} | ERROR: {e}")
