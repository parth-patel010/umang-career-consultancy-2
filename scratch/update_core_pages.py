import re

# 1. Update src/app/study-abroad/[country]/page.tsx
p1 = 'src/app/study-abroad/[country]/page.tsx'
with open(p1, 'r', encoding='utf-8') as f:
    c1 = f.read()

# Replace flags with codes
c1 = c1.replace('flag: "🇨🇦"', 'flag: "CA"')
c1 = c1.replace('flag: "🇺🇸"', 'flag: "USA"')
c1 = c1.replace('flag: "🇬🇧"', 'flag: "UK"')
c1 = c1.replace('flag: "🇦🇺"', 'flag: "AUS"')
c1 = c1.replace('flag: "🇩🇪"', 'flag: "DE"')
c1 = c1.replace('flag: "🇫🇷"', 'flag: "FR"')
c1 = c1.replace('flag: "🇮🇪"', 'flag: "IE"')
c1 = c1.replace('flag: "🇳🇿"', 'flag: "NZ"')
c1 = c1.replace('flag: "🌍"', 'flag: "GLOBAL"')

# Replace flag span in hero
c1 = c1.replace(
    '<span className="text-base">{country.flag}</span>',
    '<span className="px-2 py-0.5 rounded bg-white/20 text-white text-[11px] font-black tracking-wider border border-white/30">{country.flag}</span>'
)

# Replace ✓ in benefits
c1 = c1.replace(
    '<span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                        ✓\n                      </span>',
    '<span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>'
)

# Replace buttons in sidebar
c1 = c1.replace(
    '<span>📞 Call +91 91731 86109</span>',
    '<svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg><span>Call +91 91731 86109</span>'
)
c1 = c1.replace(
    '<span>📝 Fill Application Form</span>',
    '<svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><span>Fill Application Form</span>'
)
c1 = c1.replace(
    '<span className="text-emerald-500 font-bold">✓</span>',
    '<svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'
)

with open(p1, 'w', encoding='utf-8') as f:
    f.write(c1)
print("Updated", p1)

# 2. Update src/components/ContactUsContent.tsx
p2 = 'src/components/ContactUsContent.tsx'
with open(p2, 'r', encoding='utf-8') as f:
    c2 = f.read()

# Advisors flags
c2 = c2.replace('{ country: "Canada", number: "+91 6355 600 204", raw: "+916355600204", flag: "🇨🇦" }', '{ country: "Canada", number: "+91 6355 600 204", raw: "+916355600204", flag: "CA" }')
c2 = c2.replace('{ country: "UK", number: "+91 7990 359 721", raw: "+917990359721", flag: "🇬🇧" }', '{ country: "UK", number: "+91 7990 359 721", raw: "+917990359721", flag: "UK" }')
c2 = c2.replace('{ country: "Europe", number: "+91 7874 030 174", raw: "+917874030174", flag: "🇪🇺" }', '{ country: "Europe", number: "+91 7874 030 174", raw: "+917874030174", flag: "EU" }')
c2 = c2.replace('{ country: "Coaching", number: "+91 9724 913 620", raw: "+919724913620", flag: "📚" }', '{ country: "Coaching", number: "+91 9724 913 620", raw: "+919724913620", flag: "COACH" }')
c2 = c2.replace('{ country: "MBBS In India", number: "+91 9898 434 909", raw: "+919898434909", flag: "🩺" }', '{ country: "MBBS In India", number: "+91 9898 434 909", raw: "+919898434909", flag: "MBBS-IN" }')
c2 = c2.replace('{ country: "MBBS In Abroad", number: "+91 9998 034 909", raw: "+919998034909", flag: "🏥" }', '{ country: "MBBS In Abroad", number: "+91 9998 034 909", raw: "+919998034909", flag: "MBBS-ABROAD" }')
c2 = c2.replace('{ country: "MBBS B2B", number: "+91 8490 090 111", raw: "+918490090111", flag: "🤝" }', '{ country: "MBBS B2B", number: "+91 8490 090 111", raw: "+918490090111", flag: "B2B" }')

# Advisors rendering
c2 = c2.replace(
    '<span>{adv.flag}</span>',
    '<span className="px-1.5 py-0.5 text-[10px] font-black rounded bg-white/10 text-slate-200 border border-white/20 tracking-wider">{adv.flag}</span>'
)

# General hotline phone emoji
c2 = c2.replace('<span>📞</span>', '<svg className="w-4 h-4 fill-current inline-block text-amber-300" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>')

# ✓ in form
c2 = c2.replace(
    '<span className="text-[#22c55e] font-bold">✓</span>',
    '<svg className="w-3.5 h-3.5 text-emerald-500 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'
)

# Map section badge
c2 = c2.replace(
    '<span>📍 VISIT OUR HEAD OFFICE IN VADODARA</span>',
    '<span className="inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-[#e52928]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>VISIT OUR HEAD OFFICE IN VADODARA</span>'
)
c2 = c2.replace(
    '<span>🚗 Ample Parking Available</span>',
    '<span className="inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>Ample Parking Available</span>'
)

# 3 cards at bottom: ⚡, 🎯, 🌐
c2 = c2.replace(
    '<div className="text-2xl mb-3">⚡</div>',
    '<div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>'
)
c2 = c2.replace(
    '<div className="text-2xl mb-3">🎯</div>',
    '<div className="w-10 h-10 rounded-xl bg-red-500/10 text-[#e52928] flex items-center justify-center mb-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><circle cx="12" cy="12" r="5" strokeWidth="2" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg></div>'
)
c2 = c2.replace(
    '<div className="text-2xl mb-3">🌐</div>',
    '<div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><path strokeWidth="1.8" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg></div>'
)

with open(p2, 'w', encoding='utf-8') as f:
    f.write(c2)
print("Updated", p2)

# 3. Update src/components/StudyAbroadContent.tsx
p3 = 'src/components/StudyAbroadContent.tsx'
with open(p3, 'r', encoding='utf-8') as f:
    c3 = f.read()

c3 = c3.replace(
    '<span className="text-xl leading-none">🌐</span>',
    '<svg className="w-8 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="1.8" /><path strokeWidth="1.6" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>'
)
c3 = c3.replace('<span>🌍</span>', '<svg className="w-4 h-4 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><path strokeWidth="1.6" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>')
c3 = c3.replace(
    '<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">\n                    ✓\n                  </div>',
    '<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>'
)
c3 = c3.replace(
    '<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-lg">\n                    🎓\n                  </div>',
    '<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>'
)
c3 = c3.replace('"✈ Read More"', '"Read More"')
c3 = c3.replace(
    '<span className="text-[#22c55e] font-bold mt-0.5">✓</span>',
    '<svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'
)

# Why choose Umang icons
c3 = c3.replace('icon: "🏛️",', 'iconSvg: "university",')
c3 = c3.replace('icon: "📋",', 'iconSvg: "profile",')
c3 = c3.replace('icon: "✍️",', 'iconSvg: "sop",')
c3 = c3.replace('icon: "🛡️",', 'iconSvg: "ecosystem",')
c3 = c3.replace(
    '<span>{card.icon}</span>',
    '''{card.iconSvg === "university" ? (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                ) : card.iconSvg === "profile" ? (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                ) : card.iconSvg === "sop" ? (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                ) : (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                )}'''
)

# Testimonials
c3 = c3.replace('destination: "Canada 🇨🇦"', 'destination: "Canada"')
c3 = c3.replace('destination: "United Kingdom 🇬🇧"', 'destination: "United Kingdom"')
c3 = c3.replace('destination: "Germany 🇩🇪"', 'destination: "Germany"')

# Green checks in why choose us checklist
c3 = c3.replace(
    '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">\n                    ✓\n                  </span>',
    '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>'
)

# Confidential lock
c3 = c3.replace(
    '🔒 We respect your privacy. No spam. You will be contacted only by our certified counselors.',
    '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>We respect your privacy. No spam. You will be contacted only by our certified counselors.'
)

with open(p3, 'w', encoding='utf-8') as f:
    f.write(c3)
print("Updated", p3)

# 4. Update src/components/AccommodationContent.tsx
p4 = 'src/components/AccommodationContent.tsx'
with open(p4, 'r', encoding='utf-8') as f:
    c4 = f.read()

c4 = c4.replace(
    '<div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0a1e38] flex items-center justify-center font-bold text-lg mb-4">\n                  🏫\n                </div>',
    '<div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0a1e38] flex items-center justify-center font-bold text-lg mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>'
)
c4 = c4.replace(
    '<div className="w-12 h-12 rounded-xl bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-lg mb-4">\n                  🏢\n                </div>',
    '<div className="w-12 h-12 rounded-xl bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-lg mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg></div>'
)

# Replace ✓ list items in accommodation
c4 = c4.replace('<li className="flex items-center gap-2">✓ ', '<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>')

with open(p4, 'w', encoding='utf-8') as f:
    f.write(c4)
print("Updated", p4)

# 5. Update src/components/EducationLoanContent.tsx
p5 = 'src/components/EducationLoanContent.tsx'
with open(p5, 'r', encoding='utf-8') as f:
    c5 = f.read()

c5 = c5.replace(
    '<span className="text-[#22c55e] font-bold">✓</span>',
    '<svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'
)
with open(p5, 'w', encoding='utf-8') as f:
    f.write(c5)
print("Updated", p5)

# 6. Update src/components/ForexContent.tsx
p6 = 'src/components/ForexContent.tsx'
with open(p6, 'r', encoding='utf-8') as f:
    c6 = f.read()

c6 = c6.replace(
    '<div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#22c55e] flex items-center justify-center font-bold text-xs mb-3">\n                      ✓\n                    </div>',
    '<div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#22c55e] flex items-center justify-center font-bold text-xs mb-3"><svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>'
)
with open(p6, 'w', encoding='utf-8') as f:
    f.write(c6)
print("Updated", p6)

# 7. Update src/components/AirTicketInsuranceContent.tsx
p7 = 'src/components/AirTicketInsuranceContent.tsx'
with open(p7, 'r', encoding='utf-8') as f:
    c7 = f.read()

c7 = c7.replace(
    '<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-700 font-bold text-lg group-hover:bg-[#e52928] group-hover:text-white transition-colors">\n                  🛡️\n                </div>',
    '<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-700 group-hover:bg-[#e52928] group-hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>'
)
with open(p7, 'w', encoding='utf-8') as f:
    f.write(c7)
print("Updated", p7)
