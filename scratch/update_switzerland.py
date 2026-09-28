import re

# 1. Update SwitzerlandStudyAbroadContent.tsx
p_ch = 'src/components/SwitzerlandStudyAbroadContent.tsx'
with open(p_ch, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('\r\n', '\n')

# WHY_SWITZERLAND icons
c = c.replace('icon: "🎓",', 'icon: "degree",')
c = c.replace('icon: "🌍",', 'icon: "globe",')
c = c.replace('icon: "🗣️",', 'icon: "english",')
c = c.replace('icon: "⭐",', 'icon: "quality",')
c = c.replace('icon: "💳",', 'icon: "finance",')
c = c.replace('icon: "💼",', 'icon: "industry",')
c = c.replace('icon: "🚀",', 'icon: "career",')
c = c.replace('icon: "🏆",', 'icon: "scholarship",')

# ABOUT_CARDS icons
c = c.replace('icon: "📍",', 'icon: "location",')
c = c.replace('icon: "🏔️",', 'icon: "mountain",')
c = c.replace('icon: "🛂",', 'icon: "passport",')
c = c.replace('icon: "📈",', 'icon: "economy",')
c = c.replace('icon: "🏞️",', 'icon: "scenery",')
c = c.replace('icon: "💬",', 'icon: "languages",')
c = c.replace('icon: "🏢",', 'icon: "corporate",')
c = c.replace('icon: "🛡️",', 'icon: "safety",')
c = c.replace('icon: "✨",', 'icon: "lifestyle",')
c = c.replace('icon: "☀️",', 'icon: "climate",')

# Card rendering
c = c.replace(
    '<span className="text-3xl p-2.5 rounded-xl bg-slate-100 group-hover:bg-red-50 transition-colors">\n                      {card.icon}\n                    </span>',
    '<span className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-red-50 transition-colors flex items-center justify-center shrink-0 w-11 h-11"><SwissCardIcon type={card.icon} /></span>'
)
c = c.replace(
    '<div className="text-3xl mb-4 p-3 rounded-xl bg-white/10 w-fit">{item.icon}</div>',
    '<div className="mb-4 p-3 rounded-xl bg-white/10 w-fit flex items-center justify-center"><SwissCardIcon type={item.icon} /></div>'
)

# Replace SwissCardIcon component definition insertion
icon_component = '''
function SwissCardIcon({ type }: { type: string }) {
  switch (type) {
    case "location":
      return <svg className="w-6 h-6 text-[#da291c]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>;
    case "mountain":
    case "scenery":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
    case "passport":
    case "safety":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case "economy":
    case "career":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
    case "languages":
    case "english":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
    case "corporate":
    case "industry":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    case "lifestyle":
    case "scholarship":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
    case "climate":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={1.8} /><path strokeWidth={1.8} strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>;
    case "degree":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
    case "globe":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /><path strokeWidth={1.6} d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>;
    case "quality":
      return <svg className="w-6 h-6 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
    case "finance":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    default:
      return <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /></svg>;
  }
}
'''
c = c.replace('function SectionHeader({', icon_component + '\nfunction SectionHeader({')

# Replace remaining emojis in Switzerland
c = re.sub(r'<div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-xl">\s*🇨🇭\s*</div>',
           '<div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center font-black text-xs text-[#da291c] border border-red-200">CH</div>', c)
c = c.replace('<span>✓ Swiss Standard Advantage</span>', '<span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg><span>Swiss Standard Advantage</span></span>')
c = c.replace('📍 {uni.campuses}', '<svg className="w-3.5 h-3.5 inline mr-1 text-[#da291c] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.campuses}')
c = c.replace('💡 <span className="font-bold">Student Cost Saving Tip:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-bold">Student Cost Saving Tip:</span>')
c = c.replace('<span>🇨🇭 HASSLE-FREE STUDY IN SWITZERLAND</span>', '<span>HASSLE-FREE STUDY IN SWITZERLAND</span>')

# Replace checkmarks
c = re.sub(r'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0\.5 shadow-xs">\s*✓\s*</div>',
           '<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>', c)
c = re.sub(r'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\s*✓\s*</div>',
           '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>', c)

# Confidential lock
c = c.replace('🔒 100% Confidential. Official Swiss university and visa guidance.', '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official Swiss university and visa guidance.')

with open(p_ch, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated Switzerland")
