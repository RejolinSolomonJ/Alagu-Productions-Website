import urllib.request
import json
import os
from PIL import Image
import io

os.makedirs('public/posters', exist_ok=True)

# Map movie slug to Wikipedia file title or direct verified URL
POSTER_FILES = {
    'jailer-2': 'File:Jailer 2 poster.jpg',
    'thug-life': 'File:Thug Life 2025.jpg',
    'good-bad-ugly': 'File:Good Bad Ugly poster.jpg',
    'the-rajasaab': 'File:The RajaSaab poster.jpg',
    'peddi': 'File:Peddi Poster.jpg',
    'karuppu': 'File:Karuppu film poster.jpg',
    'patriot': 'File:Patriot promo poster.jpg',
    'dhurandhar': 'File:Dhurandhar poster.jpg',
    'jana-nayagan': 'File:Jana Nayagan.jpg',
    'eko': 'File:Eko movie poster.jpg',
    'tourist-family': 'File:A tourist family.jpg',
    'hit': 'File:HIT - The Third Case.jpg',
    'gymkhana': 'File:Jolly O Gymkhana (film).jpg',
    'kalamkaval': 'File:Kalamkaval.JPG',
    'ustaad': 'File:Ustaad Bhagat Singh.jpg',
    'aram': 'File:Aramm poster.jpg',
}

headers = {'User-Agent': 'AlaguProductionWebsite/1.0 (contact: admin@alaguproduction.com)'}

# 1. Fetch URLs from Wikipedia API
titles = list(POSTER_FILES.values())
url = f"https://en.wikipedia.org/w/api.php?action=query&titles={'|'.join(urllib.parse.quote(t) for t in titles)}&prop=imageinfo&iiprop=url&format=json"

req = urllib.request.Request(url, headers=headers)
response = urllib.request.urlopen(req)
data = json.loads(response.read().decode('utf-8'))

file_url_map = {}
for pid, page in data.get('query', {}).get('pages', {}).items():
    title = page.get('title')
    imageinfo = page.get('imageinfo')
    if imageinfo and len(imageinfo) > 0:
        file_url_map[title] = imageinfo[0].get('url')

print(f"Found {len(file_url_map)} poster URLs from Wikipedia.")

# Alternate direct fallbacks if any file is missing from Wikipedia
FALLBACK_URLS = {
    'jailer-2': 'https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg',
    'tourist-family': 'https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg',
    'gymkhana': 'https://upload.wikimedia.org/wikipedia/en/5/52/Alappuzha_Gymkhana.jpg',
}

# 2. Download and save each poster
for slug, file_title in POSTER_FILES.items():
    img_url = file_url_map.get(file_title) or FALLBACK_URLS.get(slug)
    if not img_url:
        print(f"Warning: No URL for {slug} ({file_title})")
        continue

    # Strip query params from URL if needed
    clean_url = img_url.split('?')[0]
    out_path = os.path.join('public', 'posters', f"{slug}.jpg")

    try:
        print(f"Downloading {slug} from {clean_url}...")
        img_req = urllib.request.Request(clean_url, headers=headers)
        img_data = urllib.request.urlopen(img_req, timeout=15).read()

        # Open and ensure valid RGB JPEG
        img = Image.open(io.BytesIO(img_data)).convert('RGB')
        
        # Resize to standard studio 2:3 vertical poster (e.g. 700x1050)
        img = img.resize((700, 1050), Image.Resampling.LANCZOS)
        img.save(out_path, 'JPEG', quality=92)
        print(f"-> Successfully saved {out_path} ({os.path.getsize(out_path)} bytes)")
    except Exception as e:
        print(f"Failed to download {slug}: {e}")

print("Done downloading official movie posters.")
