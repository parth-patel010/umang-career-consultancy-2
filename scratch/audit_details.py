import glob, os, re

study_pages = glob.glob('src/components/*StudyAbroadContent.tsx')
for p in sorted(study_pages):
    base = os.path.basename(p)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    has_faq = "faq" in content.lower()
    has_faq_toggle = bool(re.search(r'(setOpenFaq|setActiveFaq|toggleFaq|openFaq)', content))
    has_float = "anim-gentle-float" in content
    has_phone_ring = "anim-phone-ring" in content
    has_in_view = "inView" in content or "InView" in content
    has_section_header = "SectionHeader" in content
    print(f"{base:35} | FAQ: {str(has_faq_toggle):5} | Float: {str(has_float):5} | Ring: {str(has_phone_ring):5} | InView: {str(has_in_view):5} | SH: {str(has_section_header):5}")
