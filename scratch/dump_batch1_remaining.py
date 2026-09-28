import re

emoji_regex = re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]|[\u2300-\u23ff]|[\u2b50-\u2b55]')

for f in ["CanadaStudyAbroadContent.tsx", "UKStudyAbroadContent.tsx", "FranceStudyAbroadContent.tsx", "HungaryStudyAbroadContent.tsx", "LatviaStudyAbroadContent.tsx", "MaltaStudyAbroadContent.tsx"]:
    path = "src/components/" + f
    with open(path, "r", encoding="utf-8") as fl:
        lines = fl.readlines()
    with open(f"scratch/{f}.txt", "w", encoding="utf-8") as out:
        out.write(f"=== {f} ===\n")
        for idx, l in enumerate(lines):
            m = emoji_regex.findall(l)
            if m:
                out.write(f"  L{idx+1}: {repr(m)} -> {l.strip()}\n")

print("Wrote individual files")
