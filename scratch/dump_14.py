import re

emoji_regex = re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]|[\u2300-\u23ff]|[\u2b50-\u2b55]')

files = [
    "AustraliaStudyAbroadContent.tsx",
    "GermanyStudyAbroadContent.tsx",
    "USAStudyAbroadContent.tsx",
    "CzechRepublicStudyAbroadContent.tsx",
    "PolandStudyAbroadContent.tsx",
    "IrelandStudyAbroadContent.tsx",
    "ItalyStudyAbroadContent.tsx",
    "DenmarkStudyAbroadContent.tsx",
    "MalaysiaStudyAbroadContent.tsx",
    "NewZealandStudyAbroadContent.tsx",
    "SingaporeStudyAbroadContent.tsx",
    "SwitzerlandStudyAbroadContent.tsx",
    "LithuaniaStudyAbroadContent.tsx",
    "UAEStudyAbroadContent.tsx"
]

with open("scratch/remaining_14_countries.txt", "w", encoding="utf-8") as out:
    for f in files:
        path = "src/components/" + f
        with open(path, "r", encoding="utf-8") as fl:
            lines = fl.readlines()
        out.write(f"\n=== {f} ===\n")
        for idx, l in enumerate(lines):
            m = emoji_regex.findall(l)
            if m:
                out.write(f"  L{idx+1}: {repr(m)} -> {l.strip()}\n")

print("Dumped 14 remaining countries")
