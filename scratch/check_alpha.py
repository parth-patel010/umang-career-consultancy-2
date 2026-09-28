from PIL import Image
import numpy as np

for name in ['hungary-hero.png', 'study-abroad-hero.png']:
    im = Image.open('public/' + name)
    arr = np.array(im)
    alpha = arr[:,:,3]
    print(f'{name}: shape={arr.shape}')
    print(f'Alpha == 0: {np.mean(alpha == 0)*100:.1f}%')
    print(f'Alpha == 255: {np.mean(alpha == 255)*100:.1f}%')
    print(f'Alpha between 1 and 254: {np.mean((alpha > 0) & (alpha < 255))*100:.1f}%')
