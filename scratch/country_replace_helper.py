import os
import re

svg_lock = '<svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>'

svg_pin = '<svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>'

svg_check_white = '<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>'

svg_check_emerald = '<svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'

svg_check_pill = '<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>'

note_badge_white = '<span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span>'
note_badge_slate = '<span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 text-[11px] font-black uppercase tracking-wider mr-2">Note</span>'
tip_badge_white = '<span className="px-2 py-0.5 rounded bg-white/20 text-white border border-white/30 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span>'
tip_badge_slate = '<span className="px-2 py-0.5 rounded bg-red-100 text-[#e52928] border border-red-200 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span>'
bench_badge_slate = '<span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 text-[11px] font-black uppercase tracking-wider mr-2">Benchmark</span>'
med_badge_slate = '<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-black uppercase tracking-wider mr-2">Medical Note</span>'

def fix_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    orig = content
    for old, new in replacements:
        content = content.replace(old, new)
    if content != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated", os.path.basename(path))
    else:
        print("No changes in", os.path.basename(path))

print("Helper defined.")
