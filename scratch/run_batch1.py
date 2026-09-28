import os
import re

svg_lock = '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>'
svg_pin = '<svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>'

# 1. CanadaStudyAbroadContent.tsx
p_ca = 'src/components/CanadaStudyAbroadContent.tsx'
with open(p_ca, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('<span>🇨🇦</span>', '<span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">CA</span>')
c = c.replace('💡 <span className="font-semibold text-white">Admissions & PGWP Guidance:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Admissions & PGWP Guidance:</span>')
c = c.replace('📊 <span className="font-semibold text-slate-900">Statistics Canada Benchmark:</span>', '<span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 text-[11px] font-black uppercase tracking-wider mr-2">Benchmark</span><span className="font-semibold text-slate-900">Statistics Canada Benchmark:</span>')
c = c.replace('<div className="w-12 h-12 rounded-2xl bg-white/10 text-2xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] transition-colors">\n                    💼\n                  </div>', '<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#22c55e] transition-colors"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>')
c = c.replace('<div className="w-12 h-12 rounded-2xl bg-white/10 text-2xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] transition-colors">\n                    🎓\n                  </div>', '<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#22c55e] transition-colors"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>')
c = c.replace('<span className="text-[#22c55e] font-bold mt-0.5">✓</span>', '<svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>')
c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
c = c.replace('🔒 100% Free Initial Assessment. Certified Canadian immigration & admission counselors.', f'{svg_lock}100% Free Initial Assessment. Certified Canadian immigration & admission counselors.')
with open(p_ca, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated Canada")

# 2. UKStudyAbroadContent.tsx
p_uk = 'src/components/UKStudyAbroadContent.tsx'
with open(p_uk, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('<span>🇬🇧</span>', '<span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">UK</span>')
c = c.replace('icon: "💰",', 'iconSvg: "cost",')
c = c.replace('icon: "📈",', 'iconSvg: "growth",')
c = c.replace('icon: "🎓",', 'iconSvg: "degree",')
c = c.replace('<span>{metric.icon}</span>', '<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>')
c = c.replace('<span className="text-xl">🎓</span>', '<svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>')
c = c.replace('<span className="text-xl">🤝</span>', '<svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>')
c = c.replace('<span className="text-xl">💼</span>', '<svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>')
c = c.replace('💡 <span className="font-semibold text-white">University Selection:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">University Selection:</span>')
c = c.replace('📊 <span className="font-semibold text-slate-900">Tier 4/Student Route Work Rights:</span>', '<span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 text-[11px] font-black uppercase tracking-wider mr-2">Policy</span><span className="font-semibold text-slate-900">Tier 4/Student Route Work Rights:</span>')
c = c.replace('💡 <span className="font-semibold text-white">London vs Regional Living Costs:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">London vs Regional Living Costs:</span>')
c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
c = c.replace('🔒 100% Free Initial Assessment. Certified UK British Council counselors.', f'{svg_lock}100% Free Initial Assessment. Certified UK British Council counselors.')
with open(p_uk, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated UK")

# 3. FranceStudyAbroadContent.tsx
p_fr = 'src/components/FranceStudyAbroadContent.tsx'
with open(p_fr, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('<span>🇫🇷</span>', '<span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">FR</span>')
c = c.replace('💡 <span className="font-semibold text-white">Personalized Matching:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Personalized Matching:</span>')
c = c.replace('<span className="text-xl">🏛️</span>', '<svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>')
c = c.replace('📌 <span className="font-semibold text-white">Umang Tip:</span>', '<span className="px-2 py-0.5 rounded bg-white/20 text-white border border-white/30 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span><span className="font-semibold text-white">Umang Tip:</span>')
# seasons
c = c.replace('icon: "☀️",', 'iconSvg: "summer",')
c = c.replace('icon: "🍂",', 'iconSvg: "autumn",')
c = c.replace('icon: "❄️",', 'iconSvg: "winter",')
c = c.replace('icon: "🌸",', 'iconSvg: "spring",')
c = c.replace('<div className="text-4xl mb-3">{w.icon}</div>', '<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeWidth="2" strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>')
c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
c = c.replace('🔒 100% Free Initial Assessment. Certified France & Campus France counselors.', f'{svg_lock}100% Free Initial Assessment. Certified France & Campus France counselors.')
with open(p_fr, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated France")

# 4. HungaryStudyAbroadContent.tsx
p_hu = 'src/components/HungaryStudyAbroadContent.tsx'
with open(p_hu, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('<span>🇭🇺</span>', '<span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">HU</span>')
c = c.replace('💡 <span className="font-semibold text-white">Stipendium Hungaricum Partner:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Stipendium Hungaricum Partner:</span>')
c = c.replace('🩺 <span className="font-semibold text-slate-900">Medical Degree Note:</span>', '<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-black uppercase tracking-wider mr-2">Medical Note</span><span className="font-semibold text-slate-900">Medical Degree Note:</span>')
c = c.replace('💡 <span className="font-semibold text-white">Total Living Budget:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Total Living Budget:</span>')
c = c.replace('icon: "☀️",', 'iconSvg: "summer",')
c = c.replace('icon: "🍂",', 'iconSvg: "autumn",')
c = c.replace('icon: "❄️",', 'iconSvg: "winter",')
c = c.replace('icon: "🌸",', 'iconSvg: "spring",')
c = c.replace('<div className="text-4xl mb-3">{w.icon}</div>', '<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeWidth="2" strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>')
c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
c = c.replace('🔒 100% Free Initial Assessment. Certified European admission & visa specialists.', f'{svg_lock}100% Free Initial Assessment. Certified European admission & visa specialists.')
with open(p_hu, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated Hungary")

# 5. LatviaStudyAbroadContent.tsx
p_lv = 'src/components/LatviaStudyAbroadContent.tsx'
with open(p_lv, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('<span>🇱🇻</span>', '<span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">LV</span>')
c = c.replace('💡 <span className="font-semibold text-white">Objective Guidance:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Objective Guidance:</span>')
c = c.replace('📌 <span className="font-semibold text-white">Budget Recommendation:</span>', '<span className="px-2 py-0.5 rounded bg-white/20 text-white border border-white/30 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span><span className="font-semibold text-white">Budget Recommendation:</span>')
c = c.replace('icon: "☀️",', 'iconSvg: "summer",')
c = c.replace('icon: "🍂",', 'iconSvg: "autumn",')
c = c.replace('icon: "❄️",', 'iconSvg: "winter",')
c = c.replace('icon: "🌸",', 'iconSvg: "spring",')
c = c.replace('<div className="text-4xl mb-3">{w.icon}</div>', '<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeWidth="2" strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>')
c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
c = c.replace('🔒 100% Free Initial Assessment. Certified European admission counselors.', f'{svg_lock}100% Free Initial Assessment. Certified European admission counselors.')
with open(p_lv, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated Latvia")

# 6. MaltaStudyAbroadContent.tsx
p_mt = 'src/components/MaltaStudyAbroadContent.tsx'
with open(p_mt, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('<span>🇲🇹</span>', '<span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">MT</span>')
c = c.replace('💡 <span className="font-semibold text-white">Admissions & Visa Advantage:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Admissions & Visa Advantage:</span>')
c = c.replace('📌 <span className="font-semibold text-slate-900">Flexible Rolling Intakes:</span>', '<span className="px-2 py-0.5 rounded bg-red-100 text-[#e52928] border border-red-200 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span><span className="font-semibold text-slate-900">Flexible Rolling Intakes:</span>')
c = c.replace('💡 <span className="font-semibold text-white">Student Budget:</span>', '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Student Budget:</span>')
c = c.replace('icon: "☀️",', 'iconSvg: "summer",')
c = c.replace('icon: "🍂",', 'iconSvg: "autumn",')
c = c.replace('icon: "🌤️",', 'iconSvg: "winter",')
c = c.replace('icon: "🌸",', 'iconSvg: "spring",')
c = c.replace('<div className="text-4xl mb-3">{w.icon}</div>', '<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeWidth="2" strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>')
c = c.replace('<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>', '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>')
c = c.replace('<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>', '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>')
c = c.replace('🔒 100% Free Initial Assessment. Certified Malta student visa counselors.', f'{svg_lock}100% Free Initial Assessment. Certified Malta student visa counselors.')
with open(p_mt, 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated Malta")
