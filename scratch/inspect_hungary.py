from PIL import Image
import numpy as np

im = Image.open('public/hungary-hero.png')
arr = np.array(im)
print('hungary-hero:', arr.shape, im.mode)
# Find where alpha > 0
opaque_pixels = arr[arr[:,:,3] > 0]
print('Opaque pixels count:', len(opaque_pixels))
# Check if opaque pixels have any near-white pixels near the top-left
top_left_opaque = arr[:50, :50, :]
print('Top left 50x50 alpha count > 0:', np.sum(top_left_opaque[:,:,3] > 0))
