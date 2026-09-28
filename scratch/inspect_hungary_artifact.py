import cv2
import numpy as np
import os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
src_path = os.path.join(artifact_dir, "hungary_hero_1790509330403.jpg")
img = cv2.imread(src_path)
print("Hungary shape:", img.shape)
corners = [img[0,0], img[0,-1], img[-1,0], img[-1,-1]]
print("Hungary corners BGR:", corners)
print("Mean BGR top row:", img[0, :, :].mean(axis=0))
print("Mean BGR bottom row:", img[-1, :, :].mean(axis=0))
print("Mean BGR left col:", img[:, 0, :].mean(axis=0))
print("Mean BGR right col:", img[:, -1, :].mean(axis=0))
