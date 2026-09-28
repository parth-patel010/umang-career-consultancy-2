import cv2
import numpy as np

imgs = [
    'canada-hero.png', 'czech-hero.png', 'france-hero.png',
    'latvia-hero.png', 'lithuania-hero.png', 'malta-hero.png',
    'poland-hero.png', 'uk-hero.png', 'hungary-hero.png'
]

for name in imgs:
    img = cv2.imread('public/' + name)
    h, w = img.shape[:2]
    top = np.mean(img[0, :, :] > 230)
    bottom = np.mean(img[-1, :, :] > 230)
    left = np.mean(img[:, 0, :] > 230)
    right = np.mean(img[:, -1, :] > 230)
    print(f'{name:20}: Top={top:.2f}, Bottom={bottom:.2f}, Left={left:.2f}, Right={right:.2f}')
