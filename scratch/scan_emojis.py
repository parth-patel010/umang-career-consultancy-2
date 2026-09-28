import os
import re

# Comprehensive emoji regex covering all emoji blocks including flags, symbols, pictographs
emoji_regex = re.compile(
    r'('
    r'[\U0001F1E6-\U0001F1FF]{2}|'  # Flags (regional indicator pairs)
    r'[\U0001F300-\U0001F5FF]|'      # Miscellaneous Symbols and Pictographs
    r'[\U0001F600-\U0001F64F]|'      # Emoticons
    r'[\U0001F680-\U0001F6FF]|'      # Transport and Map Symbols
    r'[\U0001F700-\U0001F77F]|'      # Alchemical Symbols
    r'[\U0001F780-\U0001F7FF]|'      # Geometric Shapes Extended
    r'[\U0001F800-\U0001F8FF]|'      # Supplemental Arrows-C
    r'[\U0001F900-\U0001F9FF]|'      # Supplemental Symbols and Pictographs
    r'[\U0001FA00-\U0001FA6F]|'      # Chess Symbols
    r'[\U0001FA70-\U0001FAFF]|'      # Symbols and Pictographs Extended-A
    r'[\u2600-\u26FF]|'              # Miscellaneous Symbols
    r'[\u2700-\u27BF]'               # Dingbats
    r')'
)

files_with_emojis = {}

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js', '.css', '.html')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fl:
                lines = fl.readlines()
            for idx, line in enumerate(lines):
                matches = emoji_regex.findall(line)
                if matches:
                    if path not in files_with_emojis:
                        files_with_emojis[path] = []
                    files_with_emojis[path].append((idx + 1, matches, line))

with open('scratch/emoji_report.txt', 'w', encoding='utf-8') as out:
    out.write(f"Total files with emojis: {len(files_with_emojis)}\n\n")
    for p, items in files_with_emojis.items():
        out.write(f"File: {p} ({len(items)} occurrences)\n")
        for line_num, matches, line in items:
            out.write(f"  Line {line_num}: {matches} -> {line.strip()[:100]}\n")
        out.write("\n")

print(f"Report written. Found {len(files_with_emojis)} files with emojis.")
