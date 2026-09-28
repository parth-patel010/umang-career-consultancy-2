import re, os

files = [
    'CanadaStudyAbroadContent.tsx',
    'DenmarkStudyAbroadContent.tsx',
    'FranceStudyAbroadContent.tsx',
    'HungaryStudyAbroadContent.tsx',
    'ItalyStudyAbroadContent.tsx',
    'LatviaStudyAbroadContent.tsx',
    'LithuaniaStudyAbroadContent.tsx',
    'MalaysiaStudyAbroadContent.tsx',
    'MaltaStudyAbroadContent.tsx',
    'NewZealandStudyAbroadContent.tsx',
    'SingaporeStudyAbroadContent.tsx',
    'StudyAbroadContent.tsx',
    'SwitzerlandStudyAbroadContent.tsx',
    'UAEStudyAbroadContent.tsx',
    'UKStudyAbroadContent.tsx'
]

style_block = '''      {/* Global Embedded Animations matching Services Theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .anim-gentle-float {
              animation: gentleFloat 4s ease-in-out infinite;
            }
            @keyframes phoneRing {
              0%, 100% { transform: rotate(0deg); }
              20% { transform: rotate(15deg); }
              40% { transform: rotate(-15deg); }
              60% { transform: rotate(10deg); }
              80% { transform: rotate(-10deg); }
            }
            .anim-phone-ring:hover svg {
              animation: phoneRing 0.8s ease-in-out;
            }
          `,
        }}
      />
'''

for name in files:
    path = os.path.join('src/components', name)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Insert style block if not present
    if "anim-gentle-float" not in content:
        content = re.sub(r'(<main[^>]*>)', '\\1\n' + style_block, content)

    # 2. Add anim-gentle-float to hero visual wrappers
    # Canada, France, Hungary, Latvia, Malta, UK
    content = re.sub(
        r'(<div className="relative w-full max-w-\[480px\] aspect-square[^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )
    # Denmark, Italy, Malaysia, NewZealand, Singapore, UAE
    content = re.sub(
        r'(<div className="relative w-\[320px\] sm:w-\[420px\] md:w-\[460px\] aspect-square[^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )
    # StudyAbroadContent
    content = re.sub(
        r'(<div className="relative w-\[340px\] sm:w-\[440px\] md:w-\[500px\] aspect-square[^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )
    # Lithuania & Switzerland visual frame
    content = re.sub(
        r'(<div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl[^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )

    # 3. Add anim-phone-ring to phone button links
    content = re.sub(
        r'<a\s+href="tel:\+919173186109"\s+className="([^"]*)"',
        lambda m: f'<a href="tel:+919173186109" className="anim-phone-ring {m.group(1)}"' if 'anim-phone-ring' not in m.group(1) else m.group(0),
        content
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated animations for: {name}")
