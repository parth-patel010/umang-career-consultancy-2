import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"

def remove_white_background(img_path, threshold=242):
    img = cv2.imread(img_path)
    if img is None:
        raise ValueError(f"Cannot read {img_path}")
    h, w = img.shape[:2]
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Also look at color variance (near white is low saturation and high value)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    
    # White background mask candidate: high value and low saturation
    is_white = (val > threshold) & (sat < 25)
    
    # We want connected background from the image borders
    # Create floodfill mask (h+2, w+2)
    flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
    # Put seed points along the perimeter where is_white is True
    bg_mask = np.zeros((h, w), dtype=np.uint8)
    
    # Seeds along borders
    seed_points = []
    # Corners
    for pt in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if is_white[pt[1], pt[0]]:
            seed_points.append(pt)
    # Top border
    for x in range(0, w, 10):
        if is_white[0, x]:
            seed_points.append((x, 0))
    # Bottom border
    for x in range(0, w, 10):
        if is_white[h - 1, x]:
            seed_points.append((x, h - 1))
    # Left border
    for y in range(0, h, 10):
        if is_white[y, 0]:
            seed_points.append((0, y))
    # Right border
    for y in range(0, h, 10):
        if is_white[y, w - 1]:
            seed_points.append((w - 1, y))
            
    # FloodFill from background seeds
    # To floodfill accurately, create an image where white is 255 and non-white is 0
    white_u8 = (is_white.astype(np.uint8)) * 255
    cv2.floodFill(white_u8, flood_mask, (0, 0), 128)
    
    # The floodfilled region with value 128 is the true connected background!
    true_bg = (white_u8 == 128)
    
    # Foreground is inverse of true background
    fg_mask = (~true_bg).astype(np.uint8) * 255
    
    # Close any small holes inside the foreground (e.g. white clothes, teeth, papers)
    kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
    fg_closed = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel_close)
    
    # Find contours and keep all significant foreground components (area > 1000)
    contours, _ = cv2.findContours(fg_closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    clean_fg = np.zeros((h, w), dtype=np.uint8)
    for c in contours:
        if cv2.contourArea(c) > 1000:
            cv2.drawContours(clean_fg, [c], -1, 255, -1)
            
    # Smooth edges with slight blur for antialiasing
    alpha = cv2.GaussianBlur(clean_fg, (5, 5), 0)
    
    # Assemble BGRA
    bgra = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    bgra[:, :, 3] = alpha
    
    return bgra

# Test on Canada
canada_src = os.path.join(artifact_dir, "canada_hero_1790508918097.jpg")
res = remove_white_background(canada_src)
print("Canada result shape:", res.shape)
print("Alpha min:", res[:,:,3].min(), "max:", res[:,:,3].max())
print("Corner alphas:", [res[0,0,3], res[0,-1,3], res[-1,0,3], res[-1,-1,3]])
print("Center alpha:", res[512, 512, 3])
