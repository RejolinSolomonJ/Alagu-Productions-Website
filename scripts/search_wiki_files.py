import urllib.request
import json

queries = ['Jailer 2 poster', 'Jana Nayagan poster', 'Karuppu poster', 'Peddi poster', 'Patriot poster', 'Kalamkaval', 'Tourist Family', 'Gymkhana poster', 'Eko poster']
for q in queries:
    url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
        results = [r['title'] for r in data['query']['search']]
        print(q, "-->", results[:3])
    except Exception as e:
        print(q, "error:", e)
