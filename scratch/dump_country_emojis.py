import glob
import os
import json
import re

emoji_regex = re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]|[\u2300-\u23ff]|[\u2b50-\u2b55]')

country_files = sorted(glob.glob('src/components/*StudyAbroadContent.tsx'))

data = {}
for p in country_files:
    fname = os.path.basename(p)
    if fname == 'StudyAbroadContent.tsx':
        continue
    with open(p, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    data[fname] = []
    for idx, line in enumerate(lines):
        matches = emoji_regex.findall(line)
        if matches:
            data[fname].append({
                'line': idx + 1,
                'emojis': [repr(e) for e in matches],
                'text': line.strip()
            })

with open('scratch/country_emojis_data.json', 'w', encoding='utf-8') as out:
    json.dump(data, out, indent=2)

print("Dumped JSON data for", len(data), "files")
