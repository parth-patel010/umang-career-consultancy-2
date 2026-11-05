#!/usr/bin/env python3
"""
Download real university logos from Wikipedia/Wikimedia Commons and convert to AVIF.

Strategy:
1. Use hardcoded Wikipedia article names to find logos via prop=images API
2. Use hardcoded Wikimedia Commons file names where known
3. Fallback to Google Favicon API (128px)
4. Convert all downloaded images to 160x160 AVIF using ImageMagick

Usage:
    python3 scripts/download_real_logos.py
"""

import os
import sys
import time
import subprocess
import requests
import json
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

OUTPUT_DIR = "public/universities"
HEADERS = {'User-Agent': 'UmangCareerBot/1.0 (contact@umangcareer.in)'}
THUMB_SIZE = 300  # Wikipedia thumbnail width

# ─────────────────────────────────────────────────────────────────────────────
# UNIVERSITY DATABASE
# Format: (slug, wikipedia_article, wikimedia_file_override, official_domain)
# - wikipedia_article: Used to auto-find logo via prop=images
# - wikimedia_file_override: If set, skip auto-discovery and use this file directly
# - official_domain: For Google Favicon fallback
# ─────────────────────────────────────────────────────────────────────────────

UNIVERSITIES = {
    "australia": [
        ("melbourne", "University_of_Melbourne", "File:University of Melbourne logo.svg", "unimelb.edu.au"),
        ("sydney", "University_of_Sydney", "File:The University of Sydney Logo.svg", "sydney.edu.au"),
        ("unsw", "UNSW_Sydney", "File:UNSW coat of arms.svg", "unsw.edu.au"),
        ("anu", "Australian_National_University", "File:Australian National University crest.svg", "anu.edu.au"),
        ("monash", "Monash_University", "File:Monash University logo.svg", "monash.edu"),
        ("uq", "University_of_Queensland", "File:UQ logo.svg", "uq.edu.au"),
        ("uwa", "University_of_Western_Australia", "File:UWA coat of arms.svg", "uwa.edu.au"),
        ("adelaide", "University_of_Adelaide", "File:University of Adelaide Logo.svg", "adelaide.edu.au"),
        ("deakin", "Deakin_University", "File:Deakin University Logo 2017.png", "deakin.edu.au"),
        ("uow", "University_of_Wollongong", "File:University of Wollongong logo.svg", "uow.edu.au"),
        ("rmit", "RMIT_University", "File:RMIT University Logo.svg", "rmit.edu.au"),
        ("macquarie", "Macquarie_University", "File:Macquarie University logo.svg", "mq.edu.au"),
    ],
    "canada": [
        ("toronto", "University_of_Toronto", "File:Arms of the University of Toronto.svg", "utoronto.ca"),
        ("mcgill", "McGill_University", "File:McGill University CoA.svg", "mcgill.ca"),
        ("ubc", "University_of_British_Columbia", "File:UBC coat of arms.svg", "ubc.ca"),
        ("alberta", "University_of_Alberta", "File:University of Alberta seal.svg", "ualberta.ca"),
        ("waterloo", "University_of_Waterloo", "File:University of Waterloo seal.svg", "uwaterloo.ca"),
        ("york", "York_University", "File:York University logo.svg", "yorku.ca"),
        ("ottawa", "University_of_Ottawa", "File:University of Ottawa Logo.svg", "uottawa.ca"),
        ("western", "Western_University", "File:Western University Logo.svg", "uwo.ca"),
        ("calgary", "University_of_Calgary", "File:University of Calgary Logo.svg", "ucalgary.ca"),
        ("sfu", "Simon_Fraser_University", "File:Simon Fraser University logo.svg", "sfu.ca"),
        ("centennial", "Centennial_College", None, "centennialcollege.ca"),
        ("seneca", "Seneca_Polytechnic", "File:Seneca Polytechnic Logo.svg", "senecapolytechnic.ca"),
        ("windsor", "University_of_Windsor", "File:University of Windsor logo.svg", "uwindsor.ca"),
        ("conestoga", "Conestoga_College", None, "conestogac.on.ca"),
    ],
    "czech": [
        ("charles", "Charles_University", "File:Univerzita Karlova logo.svg", "cuni.cz"),
        ("muni", "Masaryk_University", "File:Masaryk University logo.svg", "muni.cz"),
        ("ctu", "Czech_Technical_University_in_Prague", "File:CVUT logo.svg", "cvut.cz"),
        ("vse", "Prague_University_of_Economics_and_Business", "File:VŠE logo.svg", "vse.cz"),
        ("vut", "Brno_University_of_Technology", "File:Brno University of Technology logo.svg", "vutbr.cz"),
        ("uct", "University_of_Chemistry_and_Technology,_Prague", None, "vscht.cz"),
        ("palacky", "Palacký_University_Olomouc", "File:Palacký University Olomouc logo.svg", "upol.cz"),
        ("czu", "Czech_University_of_Life_Sciences_Prague", None, "czu.cz"),
    ],
    "denmark": [
        ("copenhagen", "University_of_Copenhagen", "File:Københavns Universitet seal.svg", "ku.dk"),
        ("dtu", "Technical_University_of_Denmark", "File:DTU logo.svg", "dtu.dk"),
        ("aarhus", "Aarhus_University", "File:Aarhus University seal.svg", "au.dk"),
        ("aalborg", "Aalborg_University", "File:AAU logo 2012.svg", "aau.dk"),
        ("sdu", "University_of_Southern_Denmark", "File:University of Southern Denmark logo.svg", "sdu.dk"),
        ("roskilde", "Roskilde_University", "File:Roskilde University seal.svg", "ruc.dk"),
    ],
    "france": [
        ("skema", "SKEMA_Business_School", None, "skema.edu"),
        ("rennes", "Rennes_School_of_Business", None, "rennes-sb.com"),
        ("neoma", "NEOMA_Business_School", None, "neoma-bs.com"),
        ("em-normandie", "EM_Normandie", None, "em-normandie.com"),
        ("college-de-paris", None, None, "collegedeparis.fr"),
        ("devinci", "Léonard_de_Vinci_University_Center", None, "devinci.fr"),
        ("kedge", "Kedge_Business_School", None, "kedge.edu"),
        ("bsb", "Burgundy_School_of_Business", None, "bsb-education.com"),
        ("mbs", "Montpellier_Business_School", None, "montpellier-bs.com"),
        ("sorbonne", "Sorbonne_University", "File:Logo Sorbonne Université.svg", "sorbonne-universite.fr"),
        ("hec", "HEC_Paris", "File:HEC Paris.svg", "hec.edu"),
        ("insead", "INSEAD", "File:INSEAD Logo.svg", "insead.edu"),
        ("essec", "ESSEC_Business_School", "File:ESSEC Logo.svg", "essec.edu"),
        ("epita", "EPITA", None, "epita.fr"),
        ("centralesupelec", "CentraleSupélec", "File:CentraleSupélec logo.svg", "centralesupelec.fr"),
    ],
    "germany": [
        ("tum", "Technical_University_of_Munich", "File:Logo of the Technical University of Munich.svg", "tum.de"),
        ("lmu", "Ludwig_Maximilian_University_of_Munich", "File:LMU Muenchen Logo.svg", "lmu.de"),
        ("heidelberg", "Heidelberg_University", "File:Ruprecht-Karls-Universität Heidelberg logo.svg", "uni-heidelberg.de"),
        ("rwth", "RWTH_Aachen_University", "File:RWTH Aachen University Logo.svg", "rwth-aachen.de"),
        ("hu-berlin", "Humboldt_University_of_Berlin", "File:HU Berlin Logo.svg", "hu-berlin.de"),
        ("fu-berlin", "Free_University_of_Berlin", "File:FU Berlin Logo.svg", "fu-berlin.de"),
        ("kit", "Karlsruhe_Institute_of_Technology", "File:Logo KIT.svg", "kit.edu"),
        ("tu-berlin", "Technical_University_of_Berlin", "File:TU Berlin logo.svg", "tu-berlin.de"),
        ("freiburg", "University_of_Freiburg", "File:Uni Freiburg Seal.svg", "uni-freiburg.de"),
        ("bonn", "University_of_Bonn", "File:Universität Bonn logo.svg", "uni-bonn.de"),
        ("constructor", "Constructor_University", "File:Constructor University logo.svg", "constructor.university"),
        ("stuttgart", "University_of_Stuttgart", "File:Logo Universität Stuttgart.svg", "uni-stuttgart.de"),
        ("frankfurt-school", "Frankfurt_School_of_Finance_%26_Management", None, "frankfurt-school.de"),
    ],
    "hungary": [
        ("corvinus", "Corvinus_University_of_Budapest", "File:Corvinus University of Budapest logo.svg", "uni-corvinus.hu"),
        ("semmelweis", "Semmelweis_University", "File:Semmelweis University logo.svg", "semmelweis.hu"),
        ("pecs", "University_of_Pécs", "File:University of Pécs logo.svg", "pte.hu"),
        ("debrecen", "University_of_Debrecen", "File:University of Debrecen logo.svg", "unideb.hu"),
        ("szeged", "University_of_Szeged", "File:University of Szeged logo.svg", "u-szeged.hu"),
        ("bme", "Budapest_University_of_Technology_and_Economics", "File:BME logo.svg", "bme.hu"),
        ("elte", "Eötvös_Loránd_University", "File:ELTE logo.svg", "elte.hu"),
        ("miskolc", "University_of_Miskolc", None, "uni-miskolc.hu"),
        ("sze", "Széchenyi_István_University", None, "sze.hu"),
        ("ibs", "International_Business_School,_Budapest", None, "ibs-b.hu"),
    ],
    "ireland": [
        ("tcd", "Trinity_College_Dublin", "File:Trinity College Dublin crest.svg", "tcd.ie"),
        ("ucd", "University_College_Dublin", "File:University College Dublin Logo.svg", "ucd.ie"),
        ("galway", "University_of_Galway", "File:University of Galway logo.svg", "universityofgalway.ie"),
        ("ucc", "University_College_Cork", "File:University College Cork logo.svg", "ucc.ie"),
        ("ul", "University_of_Limerick", "File:University of Limerick logo.svg", "ul.ie"),
        ("dcu", "Dublin_City_University", "File:Dublin City University logo.svg", "dcu.ie"),
        ("maynooth", "Maynooth_University", "File:Maynooth University logo.svg", "maynoothuniversity.ie"),
        ("tu-dublin", "Technological_University_Dublin", "File:TU Dublin Logo.svg", "tudublin.ie"),
        ("nci", "National_College_of_Ireland", None, "ncirl.ie"),
    ],
    "italy": [
        ("bologna", "University_of_Bologna", "File:Seal of the University of Bologna.svg", "unibo.it"),
        ("sapienza", "Sapienza_University_of_Rome", "File:Sapienza University of Rome logo.svg", "uniroma1.it"),
        ("padua", "University_of_Padua", "File:University of Padua seal.svg", "unipd.it"),
        ("unimi", "University_of_Milan", "File:Seal of the University of Milan.svg", "unimi.it"),
        ("pisa", "University_of_Pisa", "File:University of Pisa seal.svg", "unipi.it"),
        ("polimi", "Polytechnic_University_of_Milan", "File:Logo Politecnico Milano.svg", "polimi.it"),
    ],
    "latvia": [
        ("rtu", "Riga_Technical_University", "File:Riga Technical University logo.svg", "rtu.lv"),
        ("lu", "University_of_Latvia", "File:University of Latvia logo.svg", "lu.lv"),
        ("rsu", "Rīga_Stradiņš_University", "File:Rīga Stradiņš University logo.svg", "rsu.lv"),
        ("du", "Daugavpils_University", None, "du.lv"),
        ("liepaja", "University_of_Liepāja", None, "liepu.lv"),
        ("va", "Vidzeme_University_of_Applied_Sciences", None, "va.lv"),
        ("venta", "Ventspils_University_of_Applied_Sciences", None, "venta.lv"),
        ("rta", "Rezekne_Academy_of_Technologies", None, "rta.lv"),
        ("lma", "Art_Academy_of_Latvia", None, "lma.lv"),
        ("tsi", "Transport_and_Telecommunication_Institute", None, "tsi.lv"),
    ],
    "lithuania": [
        ("vu", "Vilnius_University", "File:Vilnius University logo.svg", "vu.lt"),
        ("vilnius-tech", "Vilnius_Gediminas_Technical_University", "File:VILNIUS TECH logo.svg", "vilniustech.lt"),
        ("ktu", "Kaunas_University_of_Technology", "File:KTU logo.svg", "ktu.lt"),
        ("lsmu", "Lithuanian_University_of_Health_Sciences", None, "lsmu.lt"),
        ("vmu", "Vytautas_Magnus_University", "File:Vytautas Magnus University logo.svg", "vdu.lt"),
        ("mru", "Mykolas_Romeris_University", None, "mruni.eu"),
        ("ku", "Klaipėda_University", None, "ku.lt"),
        ("lcc", "LCC_International_University", None, "lcc.lt"),
    ],
    "malaysia": [
        ("um", "University_of_Malaya", "File:University of Malaya coat of arms.svg", "um.edu.my"),
        ("monash-my", "Monash_University_Malaysia", None, "monash.edu.my"),
        ("ukm", "National_University_of_Malaysia", "File:UKM Logo.svg", "ukm.my"),
        ("upm", "Universiti_Putra_Malaysia", "File:UPM Logo.svg", "upm.edu.my"),
        ("ucsi", "UCSI_University", None, "ucsiuniversity.edu.my"),
        ("sunway", "Sunway_University", None, "sunway.edu.my"),
    ],
    "malta": [
        ("um", "University_of_Malta", "File:University of Malta logo.svg", "um.edu.mt"),
        ("mcast", "Malta_College_of_Arts,_Science_%26_Technology", None, "mcast.edu.mt"),
        ("qmul-malta", "Queen_Mary_University_of_London", None, "qmul.ac.uk"),
        ("aum", "American_University_of_Malta", None, "aum.edu.mt"),
        ("mdx-malta", "Middlesex_University", None, "mdx.ac.uk"),
        ("lsc-malta", None, None, "lsc.edu.mt"),
        ("gcm", None, None, "globalcollege.edu.mt"),
        ("its", "Institute_of_Tourism_Studies", None, "its.edu.mt"),
        ("eihe", None, None, "eihe.edu.mt"),
        ("ascencia", None, None, "ascencia.edu"),
    ],
    "nz": [
        ("auckland", "University_of_Auckland", "File:University of Auckland coat of arms.svg", "auckland.ac.nz"),
        ("otago", "University_of_Otago", "File:University of Otago logo.svg", "otago.ac.nz"),
        ("aut", "Auckland_University_of_Technology", "File:AUT logo.svg", "aut.ac.nz"),
        ("canterbury", "University_of_Canterbury", "File:University of Canterbury coat of arms.svg", "canterbury.ac.nz"),
        ("victoria", "Victoria_University_of_Wellington", "File:Victoria University of Wellington logo.svg", "wgtn.ac.nz"),
        ("waikato", "University_of_Waikato", "File:University of Waikato Logo.svg", "waikato.ac.nz"),
        ("massey", "Massey_University", "File:Massey University logo.svg", "massey.ac.nz"),
        ("lincoln", "Lincoln_University_(New_Zealand)", "File:Lincoln University NZ logo.svg", "lincoln.ac.nz"),
    ],
    "poland": [
        ("uw", "University_of_Warsaw", "File:Herb Uniwersytetu Warszawskiego.svg", "uw.edu.pl"),
        ("wut", "Warsaw_University_of_Technology", "File:Politechnika Warszawska logo.svg", "pw.edu.pl"),
        ("uj", "Jagiellonian_University", "File:Jagiellonian University logo.svg", "uj.edu.pl"),
        ("agh", "AGH_University_of_Science_and_Technology", "File:AGH logo.svg", "agh.edu.pl"),
        ("uam", "Adam_Mickiewicz_University", "File:Adam Mickiewicz University logo.svg", "amu.edu.pl"),
        ("pwr", "Wrocław_University_of_Science_and_Technology", "File:Politechnika Wrocławska logo.svg", "pwr.edu.pl"),
        ("pg", "Gdańsk_University_of_Technology", "File:Politechnika Gdańska logo.svg", "pg.edu.pl"),
        ("put", "Poznań_University_of_Technology", None, "put.poznan.pl"),
        ("uwr", "University_of_Wrocław", "File:University of Wrocław logo.svg", "uni.wroc.pl"),
        ("tul", "Łódź_University_of_Technology", None, "p.lodz.pl"),
    ],
    "singapore": [
        ("nus", "National_University_of_Singapore", "File:National University of Singapore logo.svg", "nus.edu.sg"),
        ("ntu", "Nanyang_Technological_University", "File:NTU Singapore logo.svg", "ntu.edu.sg"),
        ("smu", "Singapore_Management_University", "File:Singapore Management University logo.svg", "smu.edu.sg"),
        ("sutd", "Singapore_University_of_Technology_and_Design", None, "sutd.edu.sg"),
        ("sit", "Singapore_Institute_of_Technology", None, "singaporetech.edu.sg"),
        ("jcu", "James_Cook_University", "File:James Cook University logo.svg", "jcu.edu.sg"),
    ],
    "switzerland": [
        ("eu-business", "EU_Business_School", None, "euruni.edu"),
        ("glion", "Glion_Institute_of_Higher_Education", None, "glion.edu"),
        ("gbs", None, None, "gbsge.com"),
        ("shms", "Swiss_Hotel_Management_School", None, "shms.com"),
        ("bhms", None, None, "bhms.ch"),
        ("cesar-ritz", "César_Ritz_Colleges", None, "cesarritzcolleges.edu"),
        ("aus", None, None, "aus.edu"),
        ("ssbm", None, None, "ssbm.ch"),
        ("htmi", None, None, "htmi.ch"),
        ("caa", None, None, "caa.edu"),
    ],
    "uae": [
        ("birmingham-dubai", "University_of_Birmingham", "File:University of Birmingham crest.svg", "birmingham.ac.uk"),
        ("heriot-watt-dubai", "Heriot-Watt_University", "File:Heriot-Watt University logo.svg", "hw.ac.uk"),
        ("uowd", "University_of_Wollongong_in_Dubai", None, "uowdubai.ac.ae"),
        ("mdx-dubai", "Middlesex_University", "File:Middlesex University Logo.svg", "mdx.ac.uk"),
        ("curtin-dubai", "Curtin_University", "File:Curtin University Logo.svg", "curtin.edu.au"),
    ],
    "uk": [
        ("oxford", "University_of_Oxford", "File:Oxford University Coat Of Arms.svg", "ox.ac.uk"),
        ("cambridge", "University_of_Cambridge", "File:University of Cambridge coat of arms.svg", "cam.ac.uk"),
        ("imperial", "Imperial_College_London", "File:Imperial College London crest.svg", "imperial.ac.uk"),
        ("ucl", "University_College_London", "File:UCL logo.svg", "ucl.ac.uk"),
        ("qmul", "Queen_Mary_University_of_London", "File:Queen Mary University of London logo.svg", "qmul.ac.uk"),
        ("greenwich", "University_of_Greenwich", "File:University of Greenwich logo.svg", "gre.ac.uk"),
        ("kcl", "King%27s_College_London", "File:King's College London logo.svg", "kcl.ac.uk"),
        ("edinburgh", "University_of_Edinburgh", "File:University of Edinburgh coat of arms.svg", "ed.ac.uk"),
        ("manchester", "University_of_Manchester", "File:Victoria University of Manchester coat of arms.svg", "manchester.ac.uk"),
        ("middlesex", "Middlesex_University", "File:Middlesex University Logo.svg", "mdx.ac.uk"),
        ("leeds", "University_of_Leeds", "File:University of Leeds logo.svg", "leeds.ac.uk"),
        ("coventry", "Coventry_University", "File:Coventry University Logo.svg", "coventry.ac.uk"),
        ("birmingham", "University_of_Birmingham", "File:University of Birmingham crest.svg", "birmingham.ac.uk"),
        ("hertfordshire", "University_of_Hertfordshire", None, "herts.ac.uk"),
        ("cardiff", "Cardiff_University", "File:Cardiff University logo.svg", "cardiff.ac.uk"),
    ],
    "usa": [
        ("stanford", "Stanford_University", "File:Seal of Leland Stanford Junior University.svg", "stanford.edu"),
        ("purdue", "Purdue_University", "File:Purdue University Seal.svg", "purdue.edu"),
        ("usc", "University_of_Southern_California", "File:University of Southern California seal.svg", "usc.edu"),
        ("bu", "Boston_University", "File:Boston University seal.svg", "bu.edu"),
        ("ut-austin", "University_of_Texas_at_Austin", "File:UT Austin seal.svg", "utexas.edu"),
        ("nyu", "New_York_University", "File:New York University Seal.svg", "nyu.edu"),
        ("jhu", "Johns_Hopkins_University", "File:Johns Hopkins University seal.svg", "jhu.edu"),
        ("mit", "Massachusetts_Institute_of_Technology", "File:MIT Seal.svg", "mit.edu"),
        ("northeastern", "Northeastern_University", "File:Northeastern University seal.svg", "northeastern.edu"),
        ("asu", "Arizona_State_University", "File:Arizona State University seal.svg", "asu.edu"),
        ("usf", "University_of_South_Florida", "File:University of South Florida seal.svg", "usf.edu"),
        ("unt", "University_of_North_Texas", "File:University of North Texas seal.svg", "unt.edu"),
    ],
}


def get_wiki_image_url(file_title, thumb_width=THUMB_SIZE):
    """Get the download URL for a Wikimedia file via the API."""
    try:
        # Try English Wikipedia first
        for api_url in [
            'https://en.wikipedia.org/w/api.php',
            'https://commons.wikimedia.org/w/api.php'
        ]:
            resp = requests.get(api_url, params={
                'action': 'query',
                'titles': file_title,
                'prop': 'imageinfo',
                'iiprop': 'url|size|mime',
                'format': 'json',
                'iiurlwidth': thumb_width
            }, headers=HEADERS, timeout=15)
            data = resp.json()
            for pid, page in data['query']['pages'].items():
                if 'imageinfo' in page:
                    info = page['imageinfo'][0]
                    url = info.get('thumburl', info.get('url'))
                    return url
    except Exception as e:
        print(f"    [WARN] API error for {file_title}: {e}")
    return None


def find_logo_from_article(wiki_article):
    """Search a Wikipedia article's images for logo/crest/seal files."""
    if not wiki_article:
        return None
    try:
        resp = requests.get('https://en.wikipedia.org/w/api.php', params={
            'action': 'query',
            'titles': wiki_article,
            'prop': 'images',
            'format': 'json',
            'imlimit': '50'
        }, headers=HEADERS, timeout=15)
        data = resp.json()
        
        # Also try pageimages as it sometimes works
        resp2 = requests.get('https://en.wikipedia.org/w/api.php', params={
            'action': 'query',
            'titles': wiki_article,
            'prop': 'pageimages',
            'format': 'json',
            'piprop': 'thumbnail',
            'pithumbsize': THUMB_SIZE
        }, headers=HEADERS, timeout=15)
        data2 = resp2.json()
        
        # Check pageimages first (usually the main logo/crest)
        for pid, page in data2['query']['pages'].items():
            if 'thumbnail' in page:
                return page['thumbnail']['source']
        
        # Search through article images
        keywords = ['logo', 'crest', 'seal', 'coat_of_arms', 'arms_of', 'emblem', 'wappen', 'herb']
        exclude = ['commons-logo', 'wikidata', 'wikimedia', 'flag_of', 'portal', 'edit-', 'semi-', 
                    'question_book', 'padlock', 'crystal_ball', 'globe', 'icon', 'ambox', 'blank']
        
        for pid, page in data['query']['pages'].items():
            candidates = []
            for img in page.get('images', []):
                title = img['title'].lower()
                if any(k in title for k in keywords) and not any(k in title for k in exclude):
                    candidates.append(img['title'])
            
            if candidates:
                # Prefer SVG files
                svg_candidates = [c for c in candidates if c.lower().endswith('.svg')]
                chosen = svg_candidates[0] if svg_candidates else candidates[0]
                url = get_wiki_image_url(chosen)
                if url:
                    return url
    except Exception as e:
        print(f"    [WARN] Article search error for {wiki_article}: {e}")
    return None


def get_google_favicon(domain, size=128):
    """Get favicon from Google's Favicon API."""
    if not domain:
        return None
    try:
        url = f"https://www.google.com/s2/favicons?domain={domain}&sz={size}"
        resp = requests.get(url, headers=HEADERS, timeout=10)
        if resp.status_code == 200 and len(resp.content) > 100:
            return url
    except Exception:
        pass
    return None


def download_image(url, output_path):
    """Download an image to a temporary file, return the temp path."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
        if resp.status_code == 200 and len(resp.content) > 50:
            # Determine extension from content-type
            ct = resp.headers.get('content-type', '').lower()
            if 'svg' in ct:
                ext = '.svg'
            elif 'png' in ct:
                ext = '.png'
            elif 'jpeg' in ct or 'jpg' in ct:
                ext = '.jpg'
            elif 'gif' in ct:
                ext = '.gif'
            elif 'webp' in ct:
                ext = '.webp'
            elif 'ico' in ct or 'icon' in ct:
                ext = '.ico'
            else:
                ext = '.png'
            
            temp_path = output_path + '.tmp' + ext
            with open(temp_path, 'wb') as f:
                f.write(resp.content)
            return temp_path
    except Exception as e:
        print(f"    [WARN] Download error: {e}")
    return None


def convert_to_avif(input_path, output_path):
    """Convert image to 160x160 AVIF using ImageMagick."""
    try:
        # For SVGs, set density first for crisp rendering
        cmd = ['magick']
        if input_path.endswith('.svg'):
            cmd.extend(['-density', '300', '-background', 'white'])
        cmd.extend([
            input_path,
            '-resize', '160x160',
            '-background', 'white',
            '-gravity', 'center',
            '-extent', '160x160',
            '-flatten',
            '-quality', '85',
            output_path
        ])
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        if result.returncode == 0 and os.path.exists(output_path):
            size = os.path.getsize(output_path)
            if size > 100:
                return True
            else:
                print(f"    [WARN] Output too small ({size} bytes)")
        else:
            print(f"    [WARN] magick error: {result.stderr[:200]}")
    except Exception as e:
        print(f"    [WARN] Conversion error: {e}")
    return False


def process_university(country, slug, wiki_article, wiki_file, domain):
    """Process a single university: find, download, and convert logo."""
    output_dir = os.path.join(OUTPUT_DIR, country)
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, f"{slug}.avif")
    
    print(f"  [{country}/{slug}]", end=" ", flush=True)
    
    image_url = None
    source = None
    
    # Strategy 1: Try hardcoded Wikimedia file
    if wiki_file:
        url = get_wiki_image_url(wiki_file)
        if url:
            image_url = url
            source = "wikimedia_file"
    
    # Strategy 2: Try finding logo from Wikipedia article images
    if not image_url and wiki_article:
        url = find_logo_from_article(wiki_article)
        if url:
            image_url = url
            source = "wiki_article"
    
    # Strategy 3: Google Favicon
    if not image_url and domain:
        url = get_google_favicon(domain)
        if url:
            image_url = url
            source = "google_favicon"
    
    if not image_url:
        print("❌ NO SOURCE FOUND")
        return False, country, slug
    
    # Download
    temp_path = download_image(image_url, output_path)
    if not temp_path:
        print(f"❌ DOWNLOAD FAILED ({source})")
        return False, country, slug
    
    # Convert to AVIF
    success = convert_to_avif(temp_path, output_path)
    
    # Cleanup temp file
    try:
        os.remove(temp_path)
    except:
        pass
    
    if success:
        size = os.path.getsize(output_path)
        print(f"✅ {source} ({size} bytes)")
        return True, country, slug
    else:
        print(f"❌ CONVERSION FAILED ({source})")
        return False, country, slug


def main():
    print("=" * 70)
    print("DOWNLOADING REAL UNIVERSITY LOGOS")
    print("=" * 70)
    
    total = 0
    success = 0
    failed = []
    
    for country, unis in UNIVERSITIES.items():
        print(f"\n{'─' * 50}")
        print(f"📁 {country.upper()} ({len(unis)} universities)")
        print(f"{'─' * 50}")
        
        for slug, wiki_article, wiki_file, domain in unis:
            total += 1
            ok, c, s = process_university(country, slug, wiki_article, wiki_file, domain)
            if ok:
                success += 1
            else:
                failed.append(f"{c}/{s}")
            
            # Be polite to APIs
            time.sleep(0.3)
    
    print(f"\n{'=' * 70}")
    print(f"RESULTS: {success}/{total} logos downloaded successfully")
    if failed:
        print(f"\nFAILED ({len(failed)}):")
        for f in failed:
            print(f"  ❌ {f}")
    print(f"{'=' * 70}")


if __name__ == "__main__":
    main()
