import re

path = r'lib\data\movies.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# For each slug: '...', add posterUrl: '/posters/...jpg',
def replace_slug(match):
    slug = match.group(1)
    return f"slug: '{slug}',\n    posterUrl: '/posters/{slug}.jpg',"

new_content = re.sub(r"slug:\s*'([a-z0-9-]+)',", replace_slug, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated movies.ts with posterUrl for all movies.")
