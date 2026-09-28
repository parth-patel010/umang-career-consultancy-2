import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
src_path = os.path.join(artifact_dir, "hungary_hero_1790509330403.jpg")
img = cv2.imread(src_path)

# Look at bottom-left corner 200x200
crop = img[-200:, :200]
print("Bottom left crop unique colors along a line:")
print("Row -10:", crop[-10, 0:100:10, :])
print("Row -20:", crop[-20, 0:100:10, :])
print("Row -30:", crop[-30, 0:100:10, :])
print("Row -40:", crop[-40, 0:100:10, :])
