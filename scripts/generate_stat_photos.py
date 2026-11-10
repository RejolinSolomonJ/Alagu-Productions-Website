import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter

os.makedirs("public/stats", exist_ok=True)

W, H = 480, 560

# 1. premiere-crowd.jpg (Auditorium & fans cheering at premiere)
im1 = Image.new("RGB", (W, H), (14, 18, 28))
d1 = ImageDraw.Draw(im1)
# Cinema screen glow at top
for y in range(H):
    t = y / H
    r = int(30 * (1 - t) + 10 * t)
    g = int(60 * (1 - t) + 12 * t)
    b = int(120 * (1 - t) + 20 * t)
    d1.line([(0, y), (W, y)], fill=(r, g, b))

# Floating projector dust particles & stage lights
for _ in range(70):
    px = random.randint(20, W - 20)
    py = random.randint(30, int(H * 0.6))
    rad = random.randint(1, 4)
    d1.ellipse([px, py, px + rad, py + rad], fill=(220, 240, 255))

# Audience silhouettes at bottom
for i in range(14):
    cx = int(i * (W / 12) + random.randint(-15, 15))
    cy = int(H * 0.72 + random.randint(-10, 30))
    head_rad = random.randint(25, 38)
    # head
    d1.ellipse([cx - head_rad, cy - head_rad, cx + head_rad, cy + head_rad], fill=(8, 10, 16))
    # shoulders
    d1.polygon([(cx - head_rad * 2, H), (cx + head_rad * 2, H), (cx, cy + head_rad // 2)], fill=(8, 10, 16))

# Warm spotlight glow
spot1 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ds1 = ImageDraw.Draw(spot1)
ds1.ellipse([W//4, -50, W*3//4, H//2], fill=(255, 220, 150, 70))
spot1 = spot1.filter(ImageFilter.GaussianBlur(50))
im1.paste(spot1, (0, 0), spot1)
im1.save("public/stats/premiere-crowd.jpg", quality=90)


# 2. european-theatres.jpg (Grand European cinema facade & neon marquee)
im2 = Image.new("RGB", (W, H), (25, 12, 10))
d2 = ImageDraw.Draw(im2)
for y in range(H):
    t = y / H
    r = int(80 * (1 - t) + 20 * t)
    g = int(35 * (1 - t) + 10 * t)
    b = int(20 * (1 - t) + 10 * t)
    d2.line([(0, y), (W, y)], fill=(r, g, b))

# Architectural pillars
for px in [60, 160, W - 160, W - 60]:
    d2.rectangle([px - 14, 120, px + 14, H - 40], fill=(45, 25, 20))
    d2.rectangle([px - 18, 110, px + 18, 130], fill=(70, 40, 30))

# Glowing Marquee Banner
d2.rectangle([40, 140, W - 40, 260], fill=(20, 10, 10), outline=(255, 180, 80), width=3)
# Neon bulb row
for bx in range(50, W - 40, 16):
    d2.ellipse([bx, 143, bx + 5, 148], fill=(255, 240, 180))
    d2.ellipse([bx, 252, bx + 5, 257], fill=(255, 240, 180))

# Ambient warm marquee glow
spot2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ds2 = ImageDraw.Draw(spot2)
ds2.ellipse([20, 100, W - 20, 300], fill=(255, 140, 40, 80))
spot2 = spot2.filter(ImageFilter.GaussianBlur(40))
im2.paste(spot2, (0, 0), spot2)
im2.save("public/stats/european-theatres.jpg", quality=90)


# 3. multiplex-screens.jpg (Luxury curved cinema screen & illuminated stadium seating)
im3 = Image.new("RGB", (W, H), (10, 16, 28))
d3 = ImageDraw.Draw(im3)
for y in range(H):
    t = y / H
    r = int(15 * (1 - t) + 6 * t)
    g = int(35 * (1 - t) + 10 * t)
    b = int(75 * (1 - t) + 22 * t)
    d3.line([(0, y), (W, y)], fill=(r, g, b))

# Glowing Curved Screen
d3.arc([30, 40, W - 30, 260], start=190, end=350, fill=(200, 230, 255), width=8)
screen_glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ds3 = ImageDraw.Draw(screen_glow)
ds3.ellipse([50, 40, W - 50, 220], fill=(120, 190, 255, 90))
screen_glow = screen_glow.filter(ImageFilter.GaussianBlur(45))
im3.paste(screen_glow, (0, 0), screen_glow)
d3 = ImageDraw.Draw(im3)

# Stadium seat rows
for r_idx in range(5):
    sy = int(H * 0.52 + r_idx * 46)
    seat_w = 42
    for s_idx in range(W // seat_w + 1):
        sx = s_idx * seat_w + (r_idx * 6)
        d3.rounded_rectangle([sx + 3, sy, sx + seat_w - 5, sy + 32], radius=6, fill=(18, 28, 48), outline=(35, 55, 95))

# Floor aisle lighting
for ay in range(int(H * 0.5), H, 20):
    d3.ellipse([W // 2 - 8, ay, W // 2 + 8, ay + 6], fill=(100, 200, 255))

im3.save("public/stats/multiplex-screens.jpg", quality=90)


# 4. dci-projector.jpg (High-tech 4K Laser Projector & Lens with blue-gold laser beam)
im4 = Image.new("RGB", (W, H), (14, 14, 20))
d4 = ImageDraw.Draw(im4)
for y in range(H):
    t = y / H
    r = int(35 * (1 - t) + 8 * t)
    g = int(25 * (1 - t) + 8 * t)
    b = int(45 * (1 - t) + 14 * t)
    d4.line([(0, y), (W, y)], fill=(r, g, b))

# Projector Lens Rings
cx, cy = W // 2, int(H * 0.45)
for r_ring in [140, 110, 85, 60, 35]:
    d4.ellipse([cx - r_ring, cy - r_ring, cx + r_ring, cy + r_ring], outline=(200, 160, 80), width=3)
    d4.ellipse([cx - r_ring + 4, cy - r_ring + 4, cx + r_ring - 4, cy + r_ring - 4], outline=(60, 40, 90), width=1)

# Center glass reflection
d4.ellipse([cx - 25, cy - 25, cx + 25, cy + 25], fill=(240, 220, 160))

# Laser beam expanding forward
beam = Image.new("RGBA", (W, H), (0, 0, 0, 0))
db = ImageDraw.Draw(beam)
db.polygon([(cx - 20, cy), (cx + 20, cy), (W + 60, H + 40), (-60, H + 40)], fill=(120, 180, 255, 55))
db.ellipse([cx - 50, cy - 50, cx + 50, cy + 50], fill=(255, 230, 160, 120))
beam = beam.filter(ImageFilter.GaussianBlur(30))
im4.paste(beam, (0, 0), beam)
im4.save("public/stats/dci-projector.jpg", quality=90)

print("Generated all 4 stat photographic cutouts in public/stats/")
