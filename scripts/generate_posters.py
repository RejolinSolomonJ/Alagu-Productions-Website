import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

POSTERS_DIR = "public/posters"
os.makedirs(POSTERS_DIR, exist_ok=True)

# 16 Movies metadata
MOVIES = [
    {
        "slug": "jailer-2",
        "title": "JAILER 2",
        "star": "SUPERSTAR RAJINIKANTH",
        "tagline": "THE TIGER RETURNS",
        "director": "A NELSON DILIPKUMAR FILM",
        "bg_top": (28, 18, 8),
        "bg_bot": (6, 5, 4),
        "accent": (212, 175, 55),
        "theme": "embers",
    },
    {
        "slug": "thug-life",
        "title": "THUG LIFE",
        "star": "KAMAL HAASAN • SILAMBARASAN TR",
        "tagline": "AN UNFORGIVING UNDERWORLD EPIC",
        "director": "A MANI RATNAM FILM",
        "bg_top": (40, 10, 14),
        "bg_bot": (8, 4, 6),
        "accent": (230, 57, 70),
        "theme": "noir",
    },
    {
        "slug": "good-bad-ugly",
        "title": "GOOD BAD UGLY",
        "star": "AJITH KUMAR",
        "tagline": "SURRENDER TO CHAOS",
        "director": "AN ADHIK RAVICHANDRAN FILM",
        "bg_top": (36, 28, 10),
        "bg_bot": (8, 7, 5),
        "accent": (244, 199, 67),
        "theme": "speed",
    },
    {
        "slug": "the-rajasaab",
        "title": "THE RAJASAAB",
        "star": "REBEL STAR PRABHAS",
        "tagline": "THE ROYAL GOTHIC FANTASY",
        "director": "A MARUTHI FILM",
        "bg_top": (30, 15, 45),
        "bg_bot": (7, 5, 12),
        "accent": (192, 132, 252),
        "theme": "royal",
    },
    {
        "slug": "peddi",
        "title": "PEDDI",
        "star": "A PERIOD SAGA OF RESILIENCE",
        "tagline": "HONOR BEYOND GENERATIONS",
        "director": "ACCLAIMED DIRECTORIAL VISION",
        "bg_top": (42, 22, 12),
        "bg_bot": (10, 6, 4),
        "accent": (249, 115, 22),
        "theme": "rustic",
    },
    {
        "slug": "karuppu",
        "title": "KARUPPU",
        "star": "NEO-NOIR INVESTIGATION",
        "tagline": "SHADOWS NEVER LIE",
        "director": "AWARD-WINNING CRIME THRILLER",
        "bg_top": (18, 20, 26),
        "bg_bot": (5, 6, 8),
        "accent": (161, 161, 170),
        "theme": "noir",
    },
    {
        "slug": "patriot",
        "title": "PATRIOT",
        "star": "AN ESPIONAGE THRILLER",
        "tagline": "SILENT HEROES • UNCHARTED BORDERS",
        "director": "TACTICAL INTELLIGENCE MISSION",
        "bg_top": (12, 32, 24),
        "bg_bot": (5, 9, 7),
        "accent": (16, 185, 129),
        "theme": "tactical",
    },
    {
        "slug": "dhurandhar",
        "title": "DHURANDHAR",
        "star": "GEOPOLITICAL ACTION SAGA",
        "tagline": "BEYOND ALL LINES OF DEFENSE",
        "director": "PAN-EURASIAN COVERT OPS",
        "bg_top": (12, 28, 38),
        "bg_bot": (4, 8, 12),
        "accent": (6, 182, 212),
        "theme": "cyber",
    },
    {
        "slug": "jana-nayagan",
        "title": "JANA NAYAGAN",
        "star": "THE PEOPLE'S CHAMPION",
        "tagline": "VOICE OF THE MILLIONS",
        "director": "POLITICAL POWER EPIC",
        "bg_top": (38, 24, 10),
        "bg_bot": (10, 7, 4),
        "accent": (245, 158, 11),
        "theme": "fire",
    },
    {
        "slug": "eko",
        "title": "EKO",
        "star": "A PSYCHOLOGICAL MYSTERY",
        "tagline": "EVERY ECHO CARRIES A SECRET",
        "director": "INDEPENDENT VISIONARY CINEMA",
        "bg_top": (14, 30, 44),
        "bg_bot": (5, 9, 14),
        "accent": (56, 189, 248),
        "theme": "mystery",
    },
    {
        "slug": "tourist-family",
        "title": "TOURIST FAMILY",
        "star": "A HILARIOUS EUROPEAN HOLIDAY",
        "tagline": "PACK YOUR BAGS FOR ADVENTURE",
        "director": "HEARTWARMING FAMILY ENTERTAINER",
        "bg_top": (15, 35, 32),
        "bg_bot": (6, 12, 10),
        "accent": (20, 184, 166),
        "theme": "travel",
    },
    {
        "slug": "hit",
        "title": "HIT: CASE 3",
        "star": "HOMICIDE INTERVENTION TEAM",
        "tagline": "THE EVIDENCE CANNOT HIDE",
        "director": "A SAILESH KOLANU INVESTIGATION",
        "bg_top": (38, 12, 20),
        "bg_bot": (8, 4, 6),
        "accent": (244, 63, 94),
        "theme": "crime",
    },
    {
        "slug": "gymkhana",
        "title": "GYMKHANA",
        "star": "THE GRIT OF TOURNAMENT DREAMS",
        "tagline": "FIGHT FOR THE HOME TURF",
        "director": "HIGH-OCTANE SPORTS DRAMA",
        "bg_top": (24, 34, 12),
        "bg_bot": (7, 10, 4),
        "accent": (132, 204, 22),
        "theme": "arena",
    },
    {
        "slug": "kalamkaval",
        "title": "KALAMKAVAL",
        "star": "PROCEDURAL COLD CASE",
        "tagline": "TRUTH BURIED IN TIME",
        "director": "REALISTIC INVESTIGATIVE NOIR",
        "bg_top": (28, 18, 42),
        "bg_bot": (7, 5, 12),
        "accent": (139, 92, 246),
        "theme": "vintage",
    },
    {
        "slug": "ustaad",
        "title": "USTAAD",
        "star": "DESTINY IN FLIGHT",
        "tagline": "TOUCHING SKY • WINNING HEARTS",
        "director": "A DRAMA OF DREAMS & PASSION",
        "bg_top": (16, 24, 46),
        "bg_bot": (5, 7, 14),
        "accent": (59, 130, 246),
        "theme": "sky",
    },
    {
        "slug": "aram",
        "title": "ARAM",
        "star": "JUSTICE UNCOMPROMISED",
        "tagline": "ONE STAND FOR HUMANITY",
        "director": "A GOPI NAINAR HARD-HITTING SAGA",
        "bg_top": (34, 20, 10),
        "bg_bot": (8, 6, 4),
        "accent": (217, 119, 6),
        "theme": "justice",
    },
]

W, H = 600, 900

# Try to load Windows system fonts
def get_font(name_list, size):
    for n in name_list:
        path = os.path.join("C:/Windows/Fonts", n)
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except:
                pass
    return ImageFont.load_default()

font_title_bold = get_font(["AGENCYB.TTF", "impact.ttf", "arialbd.ttf"], 54)
font_title_sub = get_font(["AGENCYR.TTF", "georgia.ttf", "arial.ttf"], 28)
font_star = get_font(["arialbd.ttf", "georgiab.ttf"], 15)
font_tagline = get_font(["georgiai.ttf", "timesi.ttf", "ariali.ttf"], 18)
font_director = get_font(["arialbd.ttf", "georgiab.ttf"], 13)
font_badge = get_font(["arialbd.ttf"], 12)
font_specs = get_font(["consola.ttf", "arial.ttf"], 11)

for m in MOVIES:
    im = Image.new("RGB", (W, H), m["bg_bot"])
    draw = ImageDraw.Draw(im)

    # 1. Background gradient
    r1, g1, b1 = m["bg_top"]
    r2, g2, b2 = m["bg_bot"]
    for y in range(H):
        t = y / H
        # non-linear falloff for dramatic spotlight effect
        t_curv = math.pow(t, 0.85)
        r = int(r1 * (1 - t_curv) + r2 * t_curv)
        g = int(g1 * (1 - t_curv) + g2 * t_curv)
        b = int(b1 * (1 - t_curv) + b2 * t_curv)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # 2. Add dramatic spotlight / ambient cone
    spotlight = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(spotlight)
    ar, ag, ab = m["accent"]

    # Top light glow
    s_draw.ellipse(
        [-100, -150, W + 100, int(H * 0.65)],
        fill=(ar, ag, ab, 45)
    )
    # Center beam
    s_draw.polygon(
        [(W * 0.15, 0), (W * 0.85, 0), (W * 0.95, H * 0.75), (W * 0.05, H * 0.75)],
        fill=(ar, ag, ab, 22)
    )
    spotlight = spotlight.filter(ImageFilter.GaussianBlur(60))
    im.paste(spotlight, (0, 0), spotlight)
    draw = ImageDraw.Draw(im)

    # 3. Add thematic visual motifs
    theme = m["theme"]
    if theme in ["embers", "fire", "speed"]:
        # Particle streaks / sparks
        for i in range(40):
            import random
            random.seed(i * 37 + hash(m["slug"]))
            px = random.randint(30, W - 30)
            py = random.randint(100, H - 200)
            rad = random.randint(2, 5)
            alpha_col = (min(255, ar + 30), min(255, ag + 30), min(255, ab + 30))
            draw.ellipse([px, py, px + rad, py + rad], fill=alpha_col)
    elif theme in ["noir", "crime", "tactical"]:
        # Atmospheric horizontal grid/slats
        for y_slat in range(120, int(H * 0.6), 28):
            draw.line([(0, y_slat), (W, y_slat)], fill=(ar, ag, ab), width=1)
    elif theme in ["royal", "vintage", "sky"]:
        # Concentric thin rings
        for r_ring in [140, 220, 300]:
            draw.ellipse(
                [W // 2 - r_ring, int(H * 0.38) - r_ring, W // 2 + r_ring, int(H * 0.38) + r_ring],
                outline=(ar, ag, ab),
                width=1
            )

    # 4. Top header billing strip
    draw.line([(30, 50), (W - 30, 50)], fill=(ar, ag, ab), width=1)
    top_label = "ALAGU PRODUCTION • PAN-EUROPEAN THEATRICAL EXCLUSIVE"
    draw.text((W // 2, 32), top_label, fill=(ar, ag, ab), font=font_specs, anchor="mm")

    # Star / billing header
    draw.text((W // 2, 90), m["star"], fill=(240, 240, 240), font=font_star, anchor="mm")

    # 5. Massive Center Movie Title with Drop Shadow & Accent Border
    title_y = int(H * 0.44)

    # Shadow
    for sx, sy in [(-2, 2), (2, 2), (0, 3)]:
        draw.text((W // 2 + sx, title_y + sy), m["title"], fill=(0, 0, 0), font=font_title_bold, anchor="mm")

    # Main title text
    draw.text((W // 2, title_y), m["title"], fill=(255, 255, 255), font=font_title_bold, anchor="mm")

    # Thin accent underline
    draw.line([(W // 2 - 120, title_y + 36), (W // 2 + 120, title_y + 36)], fill=(ar, ag, ab), width=2)

    # Tagline
    draw.text((W // 2, title_y + 65), f'"{m["tagline"]}"', fill=(ar, ag, ab), font=font_tagline, anchor="mm")

    # Director
    draw.text((W // 2, title_y + 105), m["director"], fill=(200, 205, 215), font=font_director, anchor="mm")

    # 6. Lower Theatrical Badges
    badge_y = H - 140
    # Center pill
    pill_w = 260
    pill_h = 32
    draw.rectangle(
        [(W // 2 - pill_w // 2, badge_y - pill_h // 2), (W // 2 + pill_w // 2, badge_y + pill_h // 2)],
        fill=(12, 16, 24),
        outline=(ar, ag, ab),
        width=1
    )
    draw.text((W // 2, badge_y), "DCI 4K SCOPE • DOLBY ATMOS", fill=(255, 255, 255), font=font_badge, anchor="mm")

    # 7. Bottom Cinema Billing Block / Studio Credits
    draw.line([(40, H - 90), (W - 40, H - 90)], fill=(ar, ag, ab), width=1)
    credits_line1 = "SCREENPLAY & DIRECTION • CINEMATOGRAPHY • MASTER AUDIO • VFX"
    credits_line2 = "OVERSEAS RIGHTS & DISTRIBUTION: ALAGU PRODUCTION EUROPE"
    credits_line3 = "KDM ENCRYPTED TO COMPLIANT DCI DIGITAL CINEMA SERVERS ONLY"
    draw.text((W // 2, H - 72), credits_line1, fill=(150, 160, 175), font=font_specs, anchor="mm")
    draw.text((W // 2, H - 52), credits_line2, fill=(ar, ag, ab), font=font_specs, anchor="mm")
    draw.text((W // 2, H - 32), credits_line3, fill=(110, 120, 135), font=font_specs, anchor="mm")

    # Save output
    out_path = os.path.join(POSTERS_DIR, f"{m['slug']}.jpg")
    im.save(out_path, "JPEG", quality=92)
    print(f"Generated poster: {out_path}")

print("All 16 cinematic posters generated successfully!")

