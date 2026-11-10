import urllib.request
import json
import os
from PIL import Image
import io

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# Exact direct verified URLs for remaining posters
REMAINING_URLS = {
    'ustaad': 'https://upload.wikimedia.org/wikipedia/en/e/ea/Ustaad_Bhagat_Singh.jpg',
    'aram': 'https://upload.wikimedia.org/wikipedia/en/f/f6/Aramm_poster.jpg',
    'kalamkaval': 'https://upload.wikimedia.org/wikipedia/en/9/95/Thug_Life_2025.jpg' # or fallback
}

# Search Wikipedia File for Kalamkaval
url = "https://en.wikipedia.org/w/api.php?action=query&titles=File:Aramm_poster.jpg|File:Ustaad_Bhagat_Singh.jpg|File:Kalamkaval.JPG&prop=imageinfo&iiprop=url&format=json"
req = urllib.request.Request(url, headers=headers)
try:
    res = json.loads(urllib.request.urlopen(req, timeout=10).read().decode('utf-8'))
    for pid, p in res.get('query', {}).get('pages', {}).items():
        title = p.get('title')
        info = p.get('imageinfo')
        if info:
            u = info[0].get('url').split('?')[0]
            print(f"Found {title}: {u}")
            slug = 'ustaad' if 'Ustaad' in title else ('aram' if 'Aramm' in title else 'kalamkaval')
            img_data = urllib.request.urlopen(urllib.request.Request(u, headers=headers), timeout=10).read()
            img = Image.open(io.BytesIO(img_data)).convert('RGB')
            img = img.resize((700, 1050), Image.Resampling.LANCZOS)
            out_path = f"public/posters/{slug}.jpg"
            img.save(out_path, 'JPEG', quality=92)
            print(f"Saved {out_path}")
except Exception as e:
    print("Error:", e)
