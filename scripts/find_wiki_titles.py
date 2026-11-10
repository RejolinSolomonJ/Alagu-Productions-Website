import urllib.request
import json

queries = ['Peddi', 'Patriot film', 'Gymkhana film', 'Tourist Family film', 'Kalamkaval', 'Eko film']
for q in queries:
    url = f"https://en.wikipedia.org/w/api.php?action=opensearch&search={urllib.parse.quote(q)}&limit=5&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
        print(q, "-->", data[1])
    except Exception as e:
        print(q, "error:", e)
