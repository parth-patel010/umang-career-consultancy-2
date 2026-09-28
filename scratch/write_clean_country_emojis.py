import json

with open('scratch/country_emojis_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('scratch/country_emojis_clean.txt', 'w', encoding='utf-8') as out:
    for fname, items in sorted(data.items()):
        out.write(f"\n=== {fname} ({len(items)}) ===\n")
        for it in items:
            out.write(f"  L{it['line']}: {it['emojis']} -> {it['text']}\n")

print("Wrote scratch/country_emojis_clean.txt")
