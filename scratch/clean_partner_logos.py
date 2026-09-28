import cv2
import numpy as np

partners = [
    'partner-constructor.png',
    'partner-johns-hopkins.png',
    'partner-centennial.png',
    'partner-middlesex.png'
]

for name in partners:
    path = 'public/' + name
    img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    if img is None:
        continue
    h, w = img.shape[:2]
    # Check if image has white background
    hsv = cv2.cvtColor(img[:, :, :3], cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    is_white = (val > 235) & (sat < 25)
    
    # Floodfill from perimeter
    white_u8 = (is_white.astype(np.uint8)) * 255
    flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
    
    for x in range(0, w, 10):
        for y in [0, h - 1]:
            if white_u8[y, x] == 255:
                cv2.floodFill(white_u8, flood_mask, (x, y), 128)
    for y in range(0, h, 10):
        for x in [0, w - 1]:
            if white_u8[y, x] == 255:
                cv2.floodFill(white_u8, flood_mask, (x, y), 128)
                
    bg_mask = (white_u8 == 128)
    fg_mask = (~bg_mask).astype(np.uint8) * 255
    
    # Soft alpha blur
    alpha = cv2.GaussianBlur(fg_mask, (3, 3), 0)
    bgra = cv2.cvtColor(img[:, :, :3], cv2.COLOR_BGR2BGRA)
    bgra[:, :, 3] = alpha
    bgra[alpha == 0, :3] = 0
    cv2.imwrite(path, bgra)
    print(f"Cleaned transparency in {name}: Transparent area = {np.mean(alpha == 0)*100:.1f}%")
