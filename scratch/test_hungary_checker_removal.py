import cv2
import numpy as np

img = cv2.imread('public/hungary-hero.png')
h, w = img.shape[:2]

hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
sat = hsv[:, :, 1]
val = hsv[:, :, 2]

# The checkerboard in Hungary consists of white (val > 240, sat < 20) and gray (val between 195 and 230, sat < 20)
is_checker = (val > 190) & (sat < 20)
print("Checkerboard pixel fraction in Hungary:", np.mean(is_checker))

# Floodfill from perimeter
white_u8 = (is_checker.astype(np.uint8)) * 255
flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)

# Seeds around all 4 borders
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

# Close small holes
kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
fg_closed = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel_close)

contours, _ = cv2.findContours(fg_closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
clean_fg = np.zeros((h, w), dtype=np.uint8)
for c in contours:
    if cv2.contourArea(c) > 5000:
        cv2.drawContours(clean_fg, [c], -1, 255, -1)

print("Clean FG fraction:", np.mean(clean_fg > 0))
print("Corner alphas in clean FG:", [clean_fg[0,0], clean_fg[0,-1], clean_fg[-1,0], clean_fg[-1,-1]])
