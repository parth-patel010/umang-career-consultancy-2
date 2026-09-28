import re, os

files = [
    'DenmarkStudyAbroadContent.tsx',
    'ItalyStudyAbroadContent.tsx',
    'LithuaniaStudyAbroadContent.tsx',
    'MalaysiaStudyAbroadContent.tsx',
    'NewZealandStudyAbroadContent.tsx',
    'SingaporeStudyAbroadContent.tsx',
    'SwitzerlandStudyAbroadContent.tsx',
    'UAEStudyAbroadContent.tsx'
]

standard_sh = '''function SectionHeader({
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
      className={`text-center mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
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
}'''

sh_pattern = re.compile(
    r'function SectionHeader\(\{[\s\S]*?return \([\s\S]*?</div>\s*\);\s*\}',
    re.DOTALL
)

for name in files:
    path = os.path.join('src/components', name)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = sh_pattern.sub(standard_sh, content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated SectionHeader in {name}")
    else:
        print(f"Pattern did not match in {name}")
