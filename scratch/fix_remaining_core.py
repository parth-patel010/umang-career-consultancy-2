import os
import re

# 1. Fix ContactUsContent.tsx remaining checkmark
p_contact = 'src/components/ContactUsContent.tsx'
with open(p_contact, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace(
    '<div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl font-black border border-emerald-400/40">\n                      ✓\n                    </div>',
    '<div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>'
)
with open(p_contact, 'w', encoding='utf-8') as f:
    f.write(c)

# 2. Fix AccommodationContent.tsx remaining house emoji
p_acc = 'src/components/AccommodationContent.tsx'
with open(p_acc, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace(
    '<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-4">\n                  🏡\n                </div>',
    '<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>'
)
with open(p_acc, 'w', encoding='utf-8') as f:
    f.write(c)

# 3. Fix StudyAbroadContent.tsx remaining checkmarks
p_study = 'src/components/StudyAbroadContent.tsx'
with open(p_study, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace(
    '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✓</span>',
    '<span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>'
)
c = c.replace(
    '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\n                    ✓\n                  </div>',
    '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>'
)
with open(p_study, 'w', encoding='utf-8') as f:
    f.write(c)

print("Core files updated.")
