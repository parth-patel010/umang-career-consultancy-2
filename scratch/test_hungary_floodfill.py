import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
src_path = os.path.join(artifact_dir, "hungary_hero_1790509330403.jpg")
img = cv2.imread(src_path)
h, w = img.shape[:2]

# Test floodfill with tolerance
# Create floodfill mask
flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)

# Convert to Lab or HSV or keep BGR
img_copy = img.copy()
# loDiff and upDiff
loDiff = (25, 25, 25)
upDiff = (25, 25, 25)

# Seed from 4 corners
seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
for s in seeds:
    cv2.floodFill(img_copy, flood_mask, s, (0, 0, 255), loDiff, upDiff, cv2.FLOODFILL_FIXED_RANGE)

bg_mask = (flood_mask[1:-1, 1:-1] == 1)
fg_mask = (~bg_mask).astype(np.uint8) * 255

print("Hungary FG area% with floodFill:", np.mean(fg_mask > 0) * 100)
