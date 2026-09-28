import re, os

def transform_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add SectionHeader component if not present
    if "function SectionHeader" not in content:
        sh_code = '''
/* -------------------------------------------------------------
   REUSABLE SECTION HEADER WITH STACKED DOUBLE DASHES & ANIMATION
------------------------------------------------------------- */
function SectionHeader({
  title,
  subtitle,
  variant = "light",
  inView = true,
}: {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
  inView?: boolean;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="inline-flex items-center justify-center gap-3.5">
        <div className="flex flex-col gap-1 w-6 sm:w-8">
          <span className="h-[2.5px] w-full bg-[#e52928] rounded-full" />
          <span
            className={`h-[2.5px] w-full ${
              isDark ? "bg-white/80" : "bg-[#0a1e38]"
            } rounded-full`}
          />
        </div>

        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-[#22c55e]" : "text-[#0a1e38]"
          }`}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-1 w-6 sm:w-8">
          <span className="h-[2.5px] w-full bg-[#e52928] rounded-full" />
          <span
            className={`h-[2.5px] w-full ${
              isDark ? "bg-white/80" : "bg-[#0a1e38]"
            } rounded-full`}
          />
        </div>
      </div>
      {subtitle && (
        <p
          className={`mt-2.5 text-base sm:text-lg font-semibold max-w-3xl mx-auto ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
'''
        content = re.sub(r'(export default function\s+\w+StudyAbroadContent)', sh_code + '\n\\1', content)

    # 2. Add style block with gentleFloat and phoneRing if not present
    if "anim-gentle-float" not in content:
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
        content = re.sub(r'(<main[^>]*>)', '\\1\n' + style_block, content)

    # 3. Add anim-gentle-float to hero image wrapper
    content = re.sub(
        r'(<div className="relative w-full max-w-md aspect-square[^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )
    content = re.sub(
        r'(<div className="relative w-full max-w-\[480px\] aspect-square[^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )
    content = re.sub(
        r'(<div className="relative w-full max-w-\[420px\][^"]*)"',
        lambda m: m.group(1) + ' anim-gentle-float"' if 'anim-gentle-float' not in m.group(1) else m.group(0),
        content
    )

    # 4. Add anim-phone-ring to phone links
    content = re.sub(
        r'<a\s+href="tel:\+919173186109"\s+className="([^"]*)"',
        lambda m: f'<a href="tel:+919173186109" className="anim-phone-ring {m.group(1)}"' if 'anim-phone-ring' not in m.group(1) else m.group(0),
        content
    )

    # 5. Replace header blocks with SectionHeader
    def replace_header_block(m):
        block = m.group(0)
        title_m = re.search(r'<h2[^>]*>(.*?)</h2>', block, re.DOTALL)
        desc_m = re.search(r'<p[^>]*>(.*?)</p>', block, re.DOTALL)
        if not title_m:
            return block
        
        t = re.sub(r'<[^>]+>', '', title_m.group(1)).strip()
        t = re.sub(r'\s+', ' ', t)
        
        s = ""
        if desc_m:
            s = re.sub(r'<[^>]+>', '', desc_m.group(1)).strip()
            s = re.sub(r'\s+', ' ', s)
            
        is_dark = 'text-white' in block or 'bg-white/10' in block or 'Roadmap' in t
        variant_attr = ' variant="dark"' if is_dark else ''
        subtitle_attr = f' subtitle="{s}"' if s else ''
        return f'<SectionHeader title="{t}"{subtitle_attr}{variant_attr} />'

    header_pattern = re.compile(
        r'<div className="text-center[^"]*">\s*<div[^>]*>.*?</div>\s*<h2[^>]*>.*?</h2>\s*<p[^>]*>.*?</p>\s*</div>',
        re.DOTALL
    )
    content = header_pattern.sub(replace_header_block, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Successfully transformed: {filepath}")

for f in [
    'src/components/CzechRepublicStudyAbroadContent.tsx',
    'src/components/GermanyStudyAbroadContent.tsx',
    'src/components/IrelandStudyAbroadContent.tsx',
    'src/components/PolandStudyAbroadContent.tsx',
    'src/components/USAStudyAbroadContent.tsx'
]:
    transform_file(f)
