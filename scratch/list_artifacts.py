import glob, os

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\afaffc00-a574-43a3-b587-27c759ff7000"
jpgs = glob.glob(os.path.join(artifact_dir, "*_hero_*.jpg"))
for j in jpgs:
    print(f"{os.path.basename(j)} ({os.path.getsize(j)} bytes)")
