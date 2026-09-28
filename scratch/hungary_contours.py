import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
src_path = os.path.join(artifact_dir, "hungary_hero_1790509330403.jpg")
img = cv2.imread(src_path)
h, w = img.shape[:2]

hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
sat = hsv[:, :, 1]
val = hsv[:, :, 2]

is_bg = (val > 218) & (sat < 25)
fg_mask = (~is_bg).astype(np.uint8) * 255

contours, _ = cv2.findContours(fg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for i, c in enumerate(contours):
    area = cv2.contourArea(c)
    if area > 1000:
        x, y, cw, ch = cv2.boundingRect(c)
        print(f"Contour {i}: area={area}, bbox=({x}, {y}, {cw}, {ch})")
