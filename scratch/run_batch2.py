import os
import re

svg_lock = '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>'

svg_pin = '<svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>'

svg_check_white = '<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>'

svg_check_emerald = '<svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'

svg_cost_icon = '<div className="w-7 h-7 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>'

# 1. Australia
p = 'src/components/AustraliaStudyAbroadContent.tsx'
with open(p, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('icon: "🏠",', 'icon: "home",')
c = c.replace('icon: "🛒",', 'icon: "groceries",')
c = c.replace('icon: "🚆",', 'icon: "transport",')
c = c.replace('icon: "📱",', 'icon: "phone",')
c = c.replace('icon: "💡",', 'icon: "utilities",')
c = c.replace('icon: "🏄",', 'icon: "leisure",')
c = c.replace('<span className="text-base">{cost.icon}</span>', svg_cost_icon)
c = c.replace('📍 {uni.state}', f'{svg_pin}{{uni.state}}')
c = c.replace('<span>⚠️</span>', '<svg className="w-4 h-4 inline mr-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>')
c = c.replace('<span className="text-[#22c55e] font-bold text-base">✓</span>', svg_check_emerald)
c = c.replace('<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">\n                      ✓\n                    </div>', f'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">{svg_check_white}</div>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', f'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
with open(p, 'w', encoding='utf-8') as f: f.write(c)
print("Updated Australia")

# 2. Germany
p = 'src/components/GermanyStudyAbroadContent.tsx'
with open(p, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('icon: "🏠",', 'icon: "home",')
c = c.replace('icon: "🥗",', 'icon: "food",')
c = c.replace('icon: "🚆",', 'icon: "transport",')
c = c.replace('icon: "📱",', 'icon: "phone",')
c = c.replace('icon: "💡",', 'icon: "utilities",')
c = c.replace('icon: "☕",', 'icon: "leisure",')
c = c.replace('<span className="text-base">{cost.icon}</span>', svg_cost_icon)
c = c.replace('📍 {uni.city}', f'{svg_pin}{{uni.city}}')
c = c.replace('<span>🏦</span>', '<svg className="w-4 h-4 inline mr-1 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>')
c = c.replace('<span className="text-[#22c55e] font-bold text-base">✓</span>', svg_check_emerald)
c = c.replace('<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">\n                      ✓\n                    </div>', f'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">{svg_check_white}</div>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', f'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
with open(p, 'w', encoding='utf-8') as f: f.write(c)
print("Updated Germany")

# 3. USA
p = 'src/components/USAStudyAbroadContent.tsx'
with open(p, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('icon: "🏠"', 'icon: "home"')
c = c.replace('icon: "🛒"', 'icon: "groceries"')
c = c.replace('icon: "📚"', 'icon: "books"')
c = c.replace('icon: "🚆"', 'icon: "transport"')
c = c.replace('icon: "👕"', 'icon: "clothing"')
c = c.replace('icon: "💡"', 'icon: "utilities"')
c = c.replace('icon: "🏥"', 'icon: "health"')
c = c.replace('<span className="text-base">{cost.icon}</span>', svg_cost_icon)
c = c.replace('📍 {uni.state}', f'{svg_pin}{{uni.state}}')
c = c.replace('<span className="text-[#22c55e] font-bold text-base">✓</span>', svg_check_emerald)
c = c.replace('<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">\n                      ✓\n                    </div>', f'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">{svg_check_white}</div>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', f'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
with open(p, 'w', encoding='utf-8') as f: f.write(c)
print("Updated USA")

# 4. CzechRepublic
p = 'src/components/CzechRepublicStudyAbroadContent.tsx'
with open(p, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('icon: "🏠",', 'icon: "home",')
c = c.replace('icon: "🍲",', 'icon: "food",')
c = c.replace('icon: "🚋",', 'icon: "transport",')
c = c.replace('icon: "📱",', 'icon: "phone",')
c = c.replace('icon: "💡",', 'icon: "utilities",')
c = c.replace('icon: "☕",', 'icon: "leisure",')
c = c.replace('<span className="text-base">{cost.icon}</span>', svg_cost_icon)
c = c.replace('📍 {uni.city}', f'{svg_pin}{{uni.city}}')
c = c.replace('<span className="text-[#22c55e] font-bold text-base">✓</span>', svg_check_emerald)
c = c.replace('<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">\n                      ✓\n                    </div>', f'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">{svg_check_white}</div>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', f'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
with open(p, 'w', encoding='utf-8') as f: f.write(c)
print("Updated Czech")

# 5. Poland
p = 'src/components/PolandStudyAbroadContent.tsx'
with open(p, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('icon: "🏠",', 'icon: "home",')
c = c.replace('icon: "🥗",', 'icon: "food",')
c = c.replace('icon: "🚋",', 'icon: "transport",')
c = c.replace('icon: "📱",', 'icon: "phone",')
c = c.replace('icon: "💡",', 'icon: "utilities",')
c = c.replace('icon: "☕",', 'icon: "leisure",')
c = c.replace('<span className="text-base">{cost.icon}</span>', svg_cost_icon)
c = c.replace('📍 {uni.city}', f'{svg_pin}{{uni.city}}')
c = c.replace('<span className="text-[#22c55e] font-bold text-base">✓</span>', svg_check_emerald)
c = c.replace('<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">\n                      ✓\n                    </div>', f'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">{svg_check_white}</div>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', f'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
with open(p, 'w', encoding='utf-8') as f: f.write(c)
print("Updated Poland")

# 6. Ireland
p = 'src/components/IrelandStudyAbroadContent.tsx'
with open(p, 'r', encoding='utf-8') as f: c = f.read()
c = c.replace('icon: "🏠",', 'icon: "home",')
c = c.replace('icon: "🥗",', 'icon: "food",')
c = c.replace('icon: "🚌",', 'icon: "transport",')
c = c.replace('icon: "📱",', 'icon: "phone",')
c = c.replace('icon: "💡",', 'icon: "utilities",')
c = c.replace('icon: "☕",', 'icon: "leisure",')
c = c.replace('<span className="text-base">{cost.icon}</span>', svg_cost_icon)
c = c.replace('📍 {uni.city}', f'{svg_pin}{{uni.city}}')
c = c.replace('<span>💼</span>', '<svg className="w-4 h-4 inline mr-1 text-[#0a1e38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>')
c = c.replace('<span className="text-[#22c55e] font-bold text-base">✓</span>', svg_check_emerald)
c = c.replace('<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">\n                      ✓\n                    </div>', f'<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">{svg_check_white}</div>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', f'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
with open(p, 'w', encoding='utf-8') as f: f.write(c)
print("Updated Ireland")

# 7. Canada, UK, France, Hungary, Latvia, Malta remaining
for f_name in ["CanadaStudyAbroadContent.tsx", "UKStudyAbroadContent.tsx", "FranceStudyAbroadContent.tsx", "HungaryStudyAbroadContent.tsx", "LatviaStudyAbroadContent.tsx", "MaltaStudyAbroadContent.tsx"]:
    p = 'src/components/' + f_name
    with open(p, 'r', encoding='utf-8') as fl: c = fl.read()
    c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✓</span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
    c = c.replace('🔒 100% Free Initial Assessment. Certified British Council & UKVI counselors.', f'{svg_lock}100% Free Initial Assessment. Certified British Council & UKVI counselors.')
    # Canada work icons
    c = c.replace('<div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-2xl">\n                💼\n              </div>', '<div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>')
    c = c.replace('<div className="w-12 h-12 rounded-2xl bg-red-100 text-[#e52928] flex items-center justify-center font-black text-2xl">\n                🎓\n              </div>', '<div className="w-12 h-12 rounded-2xl bg-red-100 text-[#e52928] flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>')
    with open(p, 'w', encoding='utf-8') as fl: fl.write(c)

print("Updated Canada-Malta remaining")
