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

# In Hungary, background is val > 218 and sat < 25
is_bg = (val > 218) & (sat < 25)
print("Hungary BG pixel fraction:", np.mean(is_bg) * 100)
print("Hungary FG pixel fraction:", (1 - np.mean(is_bg)) * 100)
