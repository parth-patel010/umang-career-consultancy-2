for f in ['AustraliaStudyAbroadContent.tsx', 'GermanyStudyAbroadContent.tsx', 'USAStudyAbroadContent.tsx', 'CzechRepublicStudyAbroadContent.tsx', 'PolandStudyAbroadContent.tsx', 'IrelandStudyAbroadContent.tsx']:
    p = 'src/components/' + f
    with open(p, 'r', encoding='utf-8') as fl:
        c = fl.read()
    c = c.replace(
        '<div className="w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">\n                      ✓\n                    </div>',
        '<div className="w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>'
    )
    c = c.replace(
        '<div className="w-16 h-16 bg-green-100 text-[#22c55e] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">\n                    ✓\n                  </div>',
        '<div className="w-16 h-16 bg-green-100 text-[#22c55e] rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>'
    )
    with open(p, 'w', encoding='utf-8') as fl:
        fl.write(c)

print("Updated 6 files.")
