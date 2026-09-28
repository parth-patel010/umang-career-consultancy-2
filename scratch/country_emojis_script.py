import glob
import os
import re

emoji_regex = re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]|[\u2300-\u23ff]|[\u2b50-\u2b55]')

with open('scratch/country_emojis.txt', 'w', encoding='utf-8') as out:
    for p in sorted(glob.glob('src/components/*StudyAbroadContent.tsx')):
        with open(p, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        emojis_in_file = []
        for i, line in enumerate(lines):
            m = emoji_regex.findall(line)
            if m:
                emojis_in_file.append((i+1, m, line.strip()))
        if emojis_in_file:
            out.write(f"\n=== {os.path.basename(p)}: {len(emojis_in_file)} occurrences ===\n")
            for lnum, m, ltext in emojis_in_file:
                # represent emojis as code point or names
                out.write(f"   L{lnum}: {repr(m)} | {ltext[:90]}\n")

print("Wrote scratch/country_emojis.txt")
