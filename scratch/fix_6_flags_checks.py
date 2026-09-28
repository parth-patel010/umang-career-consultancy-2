import re
import os

svg_lock = '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>'
svg_pin = '<svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>'

# Process Italy, Denmark, Malaysia, New Zealand, Singapore, UAE
countries = [
    ('ItalyStudyAbroadContent.tsx', '🇮🇹', 'IT'),
    ('DenmarkStudyAbroadContent.tsx', '🇩🇰', 'DK'),
    ('MalaysiaStudyAbroadContent.tsx', '🇲🇾', 'MY'),
    ('NewZealandStudyAbroadContent.tsx', '🇳🇿', 'NZ'),
    ('SingaporeStudyAbroadContent.tsx', '🇸🇬', 'SG'),
    ('UAEStudyAbroadContent.tsx', '🇦🇪', 'UAE')
]

for fname, flag_emoji, code in countries:
    path = os.path.join('src/components', fname)
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    # Normalize CRLF
    c = c.replace('\r\n', '\n')
    
    # Replace flag pill
    c = re.sub(
        r'<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-\[#e52928\] font-black text-lg">\s*' + re.escape(flag_emoji) + r'\s*</div>',
        f'<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-xs tracking-wider">{code}</div>',
        c
    )
    
    # Replace ✓ in div
    c = re.sub(
        r'<div className="w-5 h-5 rounded-full bg-emerald-100 text-\[#22c55e\] flex items-center justify-center font-bold text-xs shrink-0 mt-0\.5">\s*✓\s*</div>',
        '<div className="w-5 h-5 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>',
        c
    )
    c = re.sub(
        r'<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md">\s*✓\s*</div>',
        '<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>',
        c
    )
    
    # Replace any lone ✓ inside why choose us checklist
    c = re.sub(
        r'<span className="text-\[#22c55e\] font-bold text-base">\s*✓\s*</span>',
        '<svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>',
        c
    )
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("Fixed", fname)
