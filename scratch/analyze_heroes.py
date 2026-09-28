from PIL import Image
import numpy as np

imgs = [
    'canada-hero.png', 'czech-hero.png', 'france-hero.png',
    'latvia-hero.png', 'lithuania-hero.png', 'malta-hero.png',
    'poland-hero.png', 'uk-hero.png', 'hungary-hero.png',
    'australia-hero.png', 'denmark-hero.png', 'germany-hero.png',
    'ireland-hero.png', 'italy-hero.png', 'malaysia-hero.png',
    'new-zealand-hero.png', 'singapore-hero.png', 'switzerland-hero.png',
    'uae-hero.png', 'usa-hero.png',
    'study-abroad-hero.png'
]

for name in imgs:
    path = 'public/' + name
    im = Image.open(path)
    arr = np.array(im)
    mode = im.mode
    has_alpha = ('A' in mode)
    min_alpha = arr[:,:,3].min() if has_alpha else 255
    
    # Check corners RGB
    corners_rgb = [arr[0,0,:3], arr[0,-1,:3], arr[-1,0,:3], arr[-1,-1,:3]]
    # Check edges average brightness
    edge_pixels = np.concatenate([arr[0,:,:3], arr[-1,:,:3], arr[:,0,:3], arr[:,-1,:3]], axis=0)
    avg_edge_brightness = np.mean(edge_pixels)
    pct_edge_white = np.mean(np.all(edge_pixels > 235, axis=-1)) * 100
    
    print(f'{name:25} | Size: {str(im.size):12} | Mode: {mode:4} | MinA: {min_alpha:3} | EdgeWhite%: {pct_edge_white:5.1f}% | AvgEdgeRGB: {avg_edge_brightness:5.1f}')
