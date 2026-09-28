import cv2
import numpy as np
from PIL import Image

for name in ['education-loan-hero.png', 'accommodation-hero.png', 'forex-services-hero.png']:
    im = Image.open('public/' + name)
    arr = np.array(im)
    alpha = arr[:,:,3]
    # Check alpha gradient / edge feathering
    unique_alphas = np.unique(alpha)
    print(f"{name}: unique alphas={len(unique_alphas)}, min={alpha.min()}, max={alpha.max()}")
    print("Sample alphas:", unique_alphas[:10], "...", unique_alphas[-10:])
