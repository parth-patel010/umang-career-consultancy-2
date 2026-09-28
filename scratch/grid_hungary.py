import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
src_path = os.path.join(artifact_dir, "hungary_hero_1790509330403.jpg")
img = cv2.imread(src_path)

# Sample 5x5 grid of 100x100 patches
for y in range(0, 1024, 250):
    row_str = ""
    for x in range(0, 1024, 250):
        patch = img[y:min(y+50, 1024), x:min(x+50, 1024)]
        mean_bgr = patch.mean(axis=(0,1)).astype(int)
        row_str += f"({x},{y}):{mean_bgr.tolist()} "
    print(row_str)
