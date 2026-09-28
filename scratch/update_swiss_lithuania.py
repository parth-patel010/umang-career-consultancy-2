import re

svg_check_pill = '<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'

# 1. Finish Switzerland
p_ch = 'src/components/SwitzerlandStudyAbroadContent.tsx'
with open(p_ch, 'r', encoding='utf-8') as f: c = f.read()

c = re.sub(
    r'<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0\.5">\s*✓\s*</div>',
    '<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>',
    c
)
c = re.sub(
    r'<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">\s*✓\s*</div>',
    '<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>',
    c
)
with open(p_ch, 'w', encoding='utf-8') as f: f.write(c)
print("Finished Switzerland")

# 2. Lithuania
p_lt = 'src/components/LithuaniaStudyAbroadContent.tsx'
with open(p_lt, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('\r\n', '\n')

# WHY_LITHUANIA icons
c = c.replace('icon: "🎓",', 'icon: "degree",')
c = c.replace('icon: "🔬",', 'icon: "science",')
c = c.replace('icon: "💶",', 'icon: "tuition",')
c = c.replace('icon: "🌍",', 'icon: "globe",')
c = c.replace('icon: "💼",', 'icon: "work",')
c = c.replace('icon: "🚀",', 'icon: "career",')
c = c.replace('icon: "🏆",', 'icon: "scholarship",')
c = c.replace('icon: "🤝",', 'icon: "society",')
c = c.replace('icon: "🛡️",', 'icon: "safety",')
c = c.replace('icon: "🌲",', 'icon: "nature",')
c = c.replace('icon: "⚡",', 'icon: "tech",')

# ABOUT_CARDS icons
c = c.replace('icon: "📍",', 'icon: "location",')
c = c.replace('icon: "🇪🇺",', 'icon: "eu",')
c = c.replace('icon: "⚡",', 'icon: "laser",')
c = c.replace('icon: "📈",', 'icon: "fintech",')
c = c.replace('icon: "🌱",', 'icon: "sustainability",')
c = c.replace('icon: "💻",', 'icon: "digital",')
c = c.replace('icon: "✨",', 'icon: "living",')
c = c.replace('icon: "💰",', 'icon: "affordable",')
c = c.replace('icon: "🗣️",', 'icon: "english",')
c = c.replace('icon: "❄️",', 'icon: "climate",')

# Card rendering
c = c.replace(
    '<span className="text-3xl p-2.5 rounded-xl bg-slate-100 group-hover:bg-red-50 transition-colors">\n                      {card.icon}\n                    </span>',
    '<span className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-red-50 transition-colors flex items-center justify-center shrink-0 w-11 h-11"><LithuaniaCardIcon type={card.icon} /></span>'
)
c = c.replace(
    '<div className="text-3xl mb-4 p-3 rounded-xl bg-white/10 w-fit">{item.icon}</div>',
    '<div className="mb-4 p-3 rounded-xl bg-white/10 w-fit flex items-center justify-center"><LithuaniaCardIcon type={item.icon} /></div>'
)

# Insert LithuaniaCardIcon
icon_comp = '''
function LithuaniaCardIcon({ type }: { type: string }) {
  switch (type) {
    case "location":
      return <svg className="w-6 h-6 text-[#006a44]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>;
    case "eu":
      return <span className="font-black text-xs text-[#006a44] tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">EU</span>;
    case "laser":
    case "tech":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case "fintech":
    case "career":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
    case "sustainability":
    case "nature":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
    case "digital":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case "living":
    case "scholarship":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
    case "affordable":
    case "tuition":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "english":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
    case "climate":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2m17.07-7.07L4.93 19.07m0-14.14l14.14 14.14" /></svg>;
    case "degree":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
    case "science":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    case "globe":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /><path strokeWidth={1.6} d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>;
    case "work":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case "society":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    case "safety":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    default:
      return <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /></svg>;
  }
}
'''
c = c.replace('function SectionHeader({', icon_comp + '\nfunction SectionHeader({')

# Replace remaining emojis in Lithuania
c = re.sub(r'<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl">\s*🇱🇹\s*</div>',
           '<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center font-black text-xs text-[#006a44] border border-emerald-200">LT</div>', c)
c = c.replace('<span>✓ European Advantage</span>', '<span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg><span>European Advantage</span></span>')
c = c.replace('📍 {uni.location}', '<svg className="w-3.5 h-3.5 inline mr-1 text-[#006a44] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.location}')
c = c.replace('💡 <span className="font-bold">Student Advantage:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-bold">Student Advantage:</span>')
c = c.replace('<span>🇱🇹 HASSLE-FREE STUDY IN LITHUANIA</span>', '<span>HASSLE-FREE STUDY IN LITHUANIA</span>')

# Replace checkmarks
c = re.sub(r'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0\.5 shadow-xs">\s*✓\s*</div>',
           '<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>', c)
c = re.sub(r'<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0\.5">\s*✓\s*</div>',
           '<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>', c)
c = re.sub(r'<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">\s*✓\s*</div>',
           '<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>', c)

# Confidential lock
c = c.replace('🔒 100% Confidential. Official European university counseling.', '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official European university counseling.')

with open(p_lt, 'w', encoding='utf-8') as f: f.write(c)
print("Finished Lithuania")
