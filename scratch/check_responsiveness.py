import glob, re, os

issues = []

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.jsx')):
            filepath = os.path.join(root, f)
            content = open(filepath, 'r', encoding='utf-8', errors='ignore').read()
            
            # Check for tables without overflow-x-auto
            # find all <table occurrences
            for m in re.finditer(r'<table', content):
                start = max(0, m.start() - 300)
                context = content[start:m.start()]
                if 'overflow-x-auto' not in context and 'overflow-auto' not in context:
                    issues.append((filepath, "table without overflow-x-auto"))
                    break
                    
            # Check for wide fixed pixel classes on full containers
            wide_fixed = re.findall(r'className="[^"]*\b(w-\[\d{3,4}px\])\b', content)
            for wf in wide_fixed:
                px = int(re.search(r'\d+', wf).group(0))
                if px > 550 and 'max-w' not in wf:
                    # check if inside overflow container
                    issues.append((filepath, f"wide fixed width {wf}"))

print(f"Total potential responsive issues found: {len(issues)}")
for path, issue in sorted(set(issues)):
    print(f"{path}: {issue}")
