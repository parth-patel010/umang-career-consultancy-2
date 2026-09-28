import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"

items = [
    ("canada_hero_1790508918097.jpg", "canada-hero.png"),
    ("czech_hero_1790509937216.jpg", "czech-hero.png"),
    ("france_hero_1790508526269.jpg", "france-hero.png"),
    ("hungary_hero_1790509330403.jpg", "hungary-hero.png"),
    ("latvia_hero_1790508731814.jpg", "latvia-hero.png"),
    ("latvia_hero_1790508731814.jpg", "lithuania-hero.png"),
    ("malta_hero_1790509099664.jpg", "malta-hero.png"),
    ("poland_hero_1790509769252.jpg", "poland-hero.png"),
    ("uk_hero_1790509552698.jpg", "uk-hero.png")
]

for src_name, target_name in items:
    src_path = os.path.join(artifact_dir, src_name)
    img = cv2.imread(src_path)
    h, w = img.shape[:2]
    
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    
    # Near white mask
    is_white = (val > 238) & (sat < 30)
    
    white_u8 = (is_white.astype(np.uint8)) * 255
    flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
    
    # Seed corners and perimeter
    seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
    for x in range(0, w, 20):
        seeds.extend([(x, 0), (x, h - 1)])
    for y in range(0, h, 20):
        seeds.extend([(0, y), (w - 1, y)])
        
    for pt in seeds:
        if white_u8[pt[1], pt[0]] == 255:
            cv2.floodFill(white_u8, flood_mask, pt, 128)
            
    true_bg = (white_u8 == 128)
    fg_mask = (~true_bg).astype(np.uint8) * 255
    
    kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
    fg_closed = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel_close)
    
    contours, _ = cv2.findContours(fg_closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    clean_fg = np.zeros((h, w), dtype=np.uint8)
    total_area = 0
    num_kept = 0
    for c in contours:
        area = cv2.contourArea(c)
        if area > 1000:
            cv2.drawContours(clean_fg, [c], -1, 255, -1)
            total_area += area
            num_kept += 1
            
    print(f"{target_name:20}: FG Area%={total_area/(w*h)*100:.1f}%, Components Kept={num_kept}, Corners={clean_fg[0,0], clean_fg[0,-1], clean_fg[-1,0], clean_fg[-1,-1]}")
