import urllib.request
import json

titles = ['Peddi', 'Patriot (film)', 'Kalamkaval', 'Eko (film)', 'Jailer (2023 Tamil film)', 'Jailer 2', 'Aramm', 'Jana Nayagan', 'Karuppu (film)']
url = f"https://en.wikipedia.org/w/api.php?action=query&titles={'|'.join(urllib.parse.quote(t) for t in titles)}&prop=images&format=json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
    for pid, p in data['query']['pages'].items():
        print(p.get('title'), "-->", [img['title'] for img in p.get('images', [])])
except Exception as e:
    print("error:", e)
