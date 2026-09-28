with open('src/components/AustraliaStudyAbroadContent.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find all blocks with max-w-3xl mx-auto space-y-4 mb-14
blocks = re.findall(r'<div className="text-center max-w-3xl mx-auto space-y-4 mb-14">[\s\S]*?</div>\s*</div>', text)
print(f"Found {len(blocks)} header blocks")
for b in blocks:
    title = re.search(r'<h2[^>]*>(.*?)</h2>', b)
    t = title.group(1).strip() if title else ""
    print("Block title:", t)
