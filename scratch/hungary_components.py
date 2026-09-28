import cv2
import numpy as np

img = cv2.imread('public/hungary-hero.png', cv2.IMREAD_UNCHANGED)
alpha = img[:, :, 3]

# Find connected components of alpha > 0
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats((alpha > 0).astype(np.uint8))
print(f"Num components: {num_labels}")
for i in range(1, num_labels):
    area = stats[i, cv2.CC_STAT_AREA]
    x = stats[i, cv2.CC_STAT_LEFT]
    y = stats[i, cv2.CC_STAT_TOP]
    w = stats[i, cv2.CC_STAT_WIDTH]
    h = stats[i, cv2.CC_STAT_HEIGHT]
    print(f"Comp {i}: area={area}, bbox=({x}, {y}, {w}, {h})")
