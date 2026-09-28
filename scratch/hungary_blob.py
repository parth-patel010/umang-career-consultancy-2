import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
src_path = os.path.join(artifact_dir, "hungary_hero_1790509330403.jpg")
img = cv2.imread(src_path)

# Look at top-left 100x100
tl = img[:120, :120]
print("Top-left max saturation:", cv2.cvtColor(tl, cv2.COLOR_BGR2HSV)[:,:,1].max())
# Find bounding box where saturation is > 30 in top 150 rows and left 150 cols
tl_crop = img[:200, :200]
hsv_tl = cv2.cvtColor(tl_crop, cv2.COLOR_BGR2HSV)
mask_blob = (hsv_tl[:,:,1] > 30) | (hsv_tl[:,:,2] < 210)
y_idx, x_idx = np.where(mask_blob)
if len(y_idx) > 0:
    print(f"Top-left blob bounds: Y={y_idx.min()}..{y_idx.max()}, X={x_idx.min()}..{x_idx.max()}")
