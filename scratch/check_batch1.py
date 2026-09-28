import re

emoji_regex = re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]|[\u2300-\u23ff]|[\u2b50-\u2b55]')

for f in ["CanadaStudyAbroadContent.tsx", "UKStudyAbroadContent.tsx", "FranceStudyAbroadContent.tsx", "HungaryStudyAbroadContent.tsx", "LatviaStudyAbroadContent.tsx", "MaltaStudyAbroadContent.tsx"]:
    path = "src/components/" + f
    with open(path, "r", encoding="utf-8") as fl:
        lines = fl.readlines()
    print("===", f, "===")
    for idx, l in enumerate(lines):
        m = emoji_regex.findall(l)
        if m:
            print(f"  L{idx+1}: {repr(m)} -> {l.strip()[:80]}")
