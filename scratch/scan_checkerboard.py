import cv2
import numpy as np
import glob, os

def detect_checkerboard_or_white(path):
    img = cv2.imread(path)
    if img is None:
        return "Cannot read"
    h, w = img.shape[:2]
    # Sample 4 corners 80x80
    corners = [img[:80, :80], img[:80, -80:], img[-80:, :80], img[-80:, -80:]]
    has_checker = False
    has_solid_white = False
    
    for c in corners:
        # Check if corner has alternating white (245-255) and gray (200-220)
        is_w = np.all(c > 240, axis=-1)
        is_g = np.all((c > 190) & (c < 225), axis=-1)
        if np.mean(is_w) > 0.2 and np.mean(is_g) > 0.2 and (np.mean(is_w) + np.mean(is_g) > 0.8):
            has_checker = True
        if np.mean(is_w) > 0.95:
            has_solid_white = True
            
    return f"Checkerboard: {has_checker}, SolidWhite: {has_solid_white}"

for f in sorted(glob.glob("public/*.*")):
    if f.lower().endswith(('.png', '.jpg', '.jpeg')):
        res = detect_checkerboard_or_white(f)
        if "True" in res:
            print(f"{os.path.basename(f):35}: {res}")
