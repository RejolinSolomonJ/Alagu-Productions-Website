import urllib.request
import json
import os
from PIL import Image
import io

REMAINING = {
    'hit': 'File:HIT - The Third Case.jpg',
    'ustaad': 'File:Ustaad Bhagat Singh.jpg',
    'aram': 'File:Aramm poster.jpg',
    'gymkhana': 'File:Alappuzha Gymkhana.jpg',
    'kalamkaval': 'File:Kalamkaval.JPG',
    'tourist-family': 'File:A tourist family.jpg'
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for slug, file_title in REMAINING.items():
    enc_title = urllib.parse.quote(file_title)
    api_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={enc_title}&prop=imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(api_url, headers=headers)
    try:
        res = json.loads(urllib.request.urlopen(req, timeout=10).read().decode('utf-8'))
        pages = res.get('query', {}).get('pages', {})
        for pid, p in pages.items():
            info = p.get('imageinfo')
            if info:
                img_url = info[0].get('url').split('?')[0]
                print(f"Downloading {slug} from {img_url}...")
                img_data = urllib.request.urlopen(urllib.request.Request(img_url, headers=headers), timeout=10).read()
                img = Image.open(io.BytesIO(img_data)).convert('RGB')
                img = img.resize((700, 1050), Image.Resampling.LANCZOS)
                out_path = f"public/posters/{slug}.jpg"
                img.save(out_path, 'JPEG', quality=92)
                print(f"Saved {out_path} ({os.path.getsize(out_path)} bytes)")
            else:
                print(f"No imageinfo for {slug} ({file_title})")
    except Exception as e:
        print(f"Error {slug}: {e}")
