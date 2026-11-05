import os
import subprocess
import requests

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

REMAINING = [
    ("france", "mbs", "https://upload.wikimedia.org/wikipedia/commons/c/c1/Montpellier_Business_School_Logo.jpg"),
    ("france", "epita", "https://thumb.wikimedia.org/wikipedia/fr/thumb/d/d8/Epita.png/330px-Epita.png"),
    ("germany", "tu-berlin", "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/LogoDerTechnischenUniversit%C3%A4tBerlin2020.svg/330px-LogoDerTechnischenUniversit%C3%A4tBerlin2020.svg.png"),
    ("italy", "sapienza", "https://upload.wikimedia.org/wikipedia/commons/2/24/Logo_Sapienza_Universit%C3%A0_di_Roma.jpg"),
    ("italy", "pisa", "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Emblem_of_University_of_Pisa.svg/330px-Emblem_of_University_of_Pisa.svg.png"),
    ("malta", "lsc-malta", "https://upload.wikimedia.org/wikipedia/commons/2/29/Logo_LSC.jpg"),
    ("malta", "gcm", "https://www.google.com/s2/favicons?domain=gcmalta.com&sz=128"),
    ("malta", "eihe", "https://www.google.com/s2/favicons?domain=eieinstitute.com&sz=128"),
    ("malta", "ascencia", "https://www.google.com/s2/favicons?domain=ascencia-business-school.com&sz=128"),
    ("switzerland", "caa", "https://cms.swisseducation.com/sites/default/files/styles/logo/public/2025-10/caa-dark.png"),
]

for country, slug, url in REMAINING:
    out_dir = os.path.join("public/universities", country)
    os.makedirs(out_dir, exist_ok=True)
    out_avif = os.path.join(out_dir, f"{slug}.avif")
    tmp_file = f"/tmp/{country}_{slug}_fix"
    
    print(f"Downloading {country}/{slug} from {url[:60]}...")
    resp = requests.get(url, headers=HEADERS, timeout=15)
    if resp.status_code == 200 and len(resp.content) > 100:
        with open(tmp_file, "wb") as f:
            f.write(resp.content)
            
        subprocess.run([
            "magick", tmp_file,
            "-resize", "160x160",
            "-background", "white",
            "-gravity", "center",
            "-extent", "160x160",
            "-flatten",
            "-quality", "85",
            out_avif
        ], check=True)
        if os.path.exists(tmp_file):
            os.remove(tmp_file)
        print(f"  ✅ Saved {out_avif} ({os.path.getsize(out_avif)} bytes)")
    else:
        print(f"  ❌ Failed status={resp.status_code}")

print("\nAll 10 remaining logos processed!")
