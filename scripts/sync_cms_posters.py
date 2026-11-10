import json

path = r'data\cms-state.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for movie in data.get('movies', []):
    slug = movie.get('slug')
    if slug:
        movie['posterUrl'] = f'/posters/{slug}.jpg'

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Updated data/cms-state.json with posterUrl for all movies.")

