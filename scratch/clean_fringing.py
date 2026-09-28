import cv2
import numpy as np

imgs = [
    'canada-hero.png', 'czech-hero.png', 'france-hero.png',
    'hungary-hero.png', 'latvia-hero.png', 'lithuania-hero.png',
    'malta-hero.png', 'poland-hero.png', 'uk-hero.png'
]

for name in imgs:
    path = 'public/' + name
    img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    alpha = img[:, :, 3]
    # Where alpha == 0, zero out BGR to avoid any decoder edge fringing
    img[alpha == 0, :3] = 0
    cv2.imwrite(path, img)
    print(f"Cleaned fringing in {name}")
