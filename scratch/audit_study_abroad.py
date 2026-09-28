import glob, os, re

study_pages = glob.glob('src/components/*StudyAbroadContent.tsx')
print(f"Total Study Abroad components: {len(study_pages)}")

for p in sorted(study_pages):
    base = os.path.basename(p)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
        
    has_section_header = "function SectionHeader" in content or "const SectionHeader" in content
    has_stacked_lines = "h-[2.5px]" in content or "bg-[#e52928] rounded-full" in content
    has_observer = "IntersectionObserver" in content
    has_hero_loaded = "heroLoaded" in content
    has_gentle_float = "anim-gentle-float" in content
    has_accordion = "toggleFaq" in content or "openFaqs" in content or "activeFaq" in content
    
    # Check max-width
    max_widths = list(set(re.findall(r'max-w-[a-z0-9]+', content)))
    
    print(f"{base:35} | Header: {str(has_section_header):5} | StackedLines: {str(has_stacked_lines):5} | Observer: {str(has_observer):5} | Float: {str(has_gentle_float):5} | Accordion: {str(has_accordion):5}")
