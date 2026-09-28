from PIL import Image
import numpy as np

imgs = [
    'australia-hero.png', 'denmark-hero.png', 'germany-hero.png',
    'ireland-hero.png', 'italy-hero.png', 'malaysia-hero.png',
    'new-zealand-hero.png', 'singapore-hero.png', 'switzerland-hero.png',
    'uae-hero.png', 'usa-hero.png'
]

for name in imgs:
    im = Image.open('public/' + name)
    arr = np.array(im)
    # Check if edges have uniform color or if it's a photo
    std_edges = np.std(arr[0,:,:3]) + np.std(arr[-1,:,:3]) + np.std(arr[:,0,:3]) + np.std(arr[:,-1,:3])
    print(f'{name:20}: size={im.size}, edge_std={std_edges:.1f}, corners={arr[0,0,:3].tolist()}')
