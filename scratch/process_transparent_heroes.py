import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
public_dir = r"e:\Clients\UmangCareerConsultancy\public"

def process_white_backdrop(img_bgr, threshold=238, sat_thresh=28):
    h, w = img_bgr.shape[:2]
    hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    
    # Near white detection
    is_white = (val > threshold) & (sat < sat_thresh)
    
    white_u8 = (is_white.astype(np.uint8)) * 255
    flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
    
    # Seed corners and perimeter
    seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
    for x in range(0, w, 15):
        seeds.extend([(x, 0), (x, h - 1)])
    for y in range(0, h, 15):
        seeds.extend([(0, y), (w - 1, y)])
        
    for pt in seeds:
        if white_u8[pt[1], pt[0]] == 255:
            cv2.floodFill(white_u8, flood_mask, pt, 128)
            
    true_bg = (white_u8 == 128)
    fg_mask = (~true_bg).astype(np.uint8) * 255
    
    # Close internal holes (e.g. white clothes, paper, eyes)
    kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
    fg_closed = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel_close)
    
    # Keep significant foreground contours
    contours, _ = cv2.findContours(fg_closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    clean_fg = np.zeros((h, w), dtype=np.uint8)
    for c in contours:
        if cv2.contourArea(c) > 2000:
            cv2.drawContours(clean_fg, [c], -1, 255, -1)
            
    # Soft edge feathering for smooth antialiased alpha
    alpha = cv2.GaussianBlur(clean_fg, (5, 5), 0)
    
    bgra = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2BGRA)
    bgra[:, :, 3] = alpha
    return bgra

def process_hungary_checkerboard(img_bgr):
    h, w = img_bgr.shape[:2]
    hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    
    # Checkerboard has alternating white and light gray squares
    is_checker = (val > 185) & (sat < 25)
    
    white_u8 = (is_checker.astype(np.uint8)) * 255
    # Remove the top-left non-student artifact
    white_u8[:80, :80] = 255
    
    flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
    seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
    for x in range(0, w, 15):
        seeds.extend([(x, 0), (x, h - 1)])
    for y in range(0, h, 15):
        seeds.extend([(0, y), (w - 1, y)])
        
    for pt in seeds:
        if white_u8[pt[1], pt[0]] == 255:
            cv2.floodFill(white_u8, flood_mask, pt, 128)
            
    true_bg = (white_u8 == 128)
    fg_mask = (~true_bg).astype(np.uint8) * 255
    # Ensure top left corner is background
    fg_mask[:90, :90] = 0
    
    kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (19, 19))
    fg_closed = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel_close)
    
    contours, _ = cv2.findContours(fg_closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    clean_fg = np.zeros((h, w), dtype=np.uint8)
    for c in contours:
        if cv2.contourArea(c) > 10000:
            cv2.drawContours(clean_fg, [c], -1, 255, -1)
            
    alpha = cv2.GaussianBlur(clean_fg, (5, 5), 0)
    bgra = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2BGRA)
    bgra[:, :, 3] = alpha
    return bgra

# Map target files to source artifact files
targets = [
    ("canada-hero.png", "canada_hero_1790508918097.jpg", "white"),
    ("czech-hero.png", "czech_hero_1790509937216.jpg", "white"),
    ("france-hero.png", "france_hero_1790508526269.jpg", "white"),
    ("hungary-hero.png", "hungary_hero_1790509330403.jpg", "checkerboard"),
    ("latvia-hero.png", "latvia_hero_1790508731814.jpg", "white"),
    ("lithuania-hero.png", "latvia_hero_1790508731814.jpg", "white"),
    ("malta-hero.png", "malta_hero_1790509099664.jpg", "white"),
    ("poland-hero.png", "poland_hero_1790509769252.jpg", "white"),
    ("uk-hero.png", "uk_hero_1790509552698.jpg", "white"),
]

for out_name, src_name, kind in targets:
    src_path = os.path.join(artifact_dir, src_name)
    if not os.path.exists(src_path):
        src_path = os.path.join(public_dir, out_name)
        
    img = cv2.imread(src_path)
    if img is None:
        print(f"FAILED TO READ: {src_path}")
        continue
        
    if kind == "checkerboard":
        res = process_hungary_checkerboard(img)
    else:
        res = process_white_backdrop(img)
        
    out_path = os.path.join(public_dir, out_name)
    cv2.imwrite(out_path, res)
    
    alpha = res[:, :, 3]
    h, w = res.shape[:2]
    print(f"SUCCESS: {out_name} written to {out_path}")
    print(f"  Shape: {res.shape}, Alpha min={alpha.min()}, max={alpha.max()}")
    print(f"  Corner alphas: {[alpha[0,0], alpha[0,-1], alpha[-1,0], alpha[-1,-1]]}")
    print(f"  Center alpha: {alpha[h//2, w//2]}")
    print(f"  FG area: {np.mean(alpha > 0)*100:.1f}%, Transparent area: {np.mean(alpha == 0)*100:.1f}%")
