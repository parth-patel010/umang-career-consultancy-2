import re

with open('src/components/AustraliaStudyAbroadContent.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Check if SectionHeader is defined
has_sh = "function SectionHeader" in content
print("Has SectionHeader:", has_sh)

# 2. Check header replacements
pattern = re.compile(
    r'<div className="text-center[^"]*">\s*<div[^>]*>.*?</div>\s*<h2[^>]*>(.*?)</h2>\s*<p[^>]*>(.*?)</p>\s*</div>',
    re.DOTALL
)

matches = pattern.findall(content)
for i, (title, subtitle) in enumerate(matches):
    t = re.sub(r'\s+', ' ', title).strip()
    s = re.sub(r'\s+', ' ', subtitle).strip()
    print(f"Match {i+1}: Title: {t[:40]} | Subtitle: {s[:50]}")
