"""Generate a 1200x630 Open Graph image for GGNF."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-image.jpg"
LOGO = ROOT / "public" / "brand" / "logo.jpg"

W, H = 1200, 630

# Palette (matches tailwind.config.ts forest/cream tones)
CREAM_50 = (251, 246, 234)
CREAM_100 = (243, 234, 213)
FOREST_900 = (20, 49, 35)
FOREST_800 = (29, 70, 49)
FOREST_700 = (43, 96, 67)
FOREST_300 = (170, 198, 178)
GOLD = (191, 154, 79)


def vgrad(size, top, bottom):
    img = Image.new("RGB", size, top)
    px = img.load()
    w, h = size
    for y in range(h):
        t = y / max(1, h - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        for x in range(w):
            px[x, y] = (r, g, b)
    return img


def load_font(name_candidates, size):
    """Try a few common Windows font paths until one works."""
    for n in name_candidates:
        try:
            return ImageFont.truetype(n, size)
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


# Background: cream with a subtle gradient
bg = vgrad((W, H), CREAM_50, CREAM_100)

# Decorative forest panel on the right
panel_w = 460
panel = Image.new("RGB", (panel_w, H), FOREST_900)
pdraw = ImageDraw.Draw(panel)
# Subtle vertical gradient on the panel
for y in range(H):
    t = y / H
    r = int(FOREST_900[0] * (1 - t * 0.15) + FOREST_800[0] * (t * 0.15))
    g = int(FOREST_900[1] * (1 - t * 0.15) + FOREST_800[1] * (t * 0.15))
    b = int(FOREST_900[2] * (1 - t * 0.15) + FOREST_800[2] * (t * 0.15))
    pdraw.line([(0, y), (panel_w, y)], fill=(r, g, b))
bg.paste(panel, (W - panel_w, 0))

draw = ImageDraw.Draw(bg)

# Logo top-left
try:
    logo = Image.open(LOGO).convert("RGB")
    # Square crop + resize
    s = min(logo.size)
    logo = logo.crop(((logo.width - s) // 2, (logo.height - s) // 2,
                      (logo.width + s) // 2, (logo.height + s) // 2))
    logo = logo.resize((100, 100), Image.LANCZOS)
    # Round mask
    mask = Image.new("L", (100, 100), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, 100, 100), radius=22, fill=255)
    bg.paste(logo, (80, 70), mask)
except Exception as e:
    print(f"Logo load failed: {e}")

# Fonts (try a few that ship with Windows)
serif_big = load_font(["georgiab.ttf", "georgia.ttf", "times.ttf"], 76)
serif_mid = load_font(["georgiab.ttf", "georgia.ttf", "times.ttf"], 44)
sans_small = load_font(["segoeui.ttf", "arial.ttf"], 22)
sans_label = load_font(["segoeuib.ttf", "arialbd.ttf", "arial.ttf"], 18)

# Brand label top-left next to logo
draw.text((200, 80), "GREEN GUJARAT", font=sans_label, fill=FOREST_900)
draw.text((200, 108), "NATURAL FERTILIZER", font=sans_small, fill=FOREST_700)

# Eyebrow line above headline
draw.line([(80, 230), (140, 230)], fill=FOREST_700, width=2)
draw.text((155, 218), "AHMEDABAD · GUJARAT", font=sans_label, fill=FOREST_700)

# Main headline (multi-line)
headline_lines = [
    "Nutrition that",
    "the earth trusts.",
]
y = 270
for line in headline_lines:
    draw.text((80, y), line, font=serif_big, fill=FOREST_900)
    y += 88

# Subline
sub = "Imported water-soluble NPK, chelated micronutrients,"
sub2 = "sulphur & organic fertilizers."
draw.text((80, y + 16), sub, font=sans_small, fill=FOREST_800)
draw.text((80, y + 46), sub2, font=sans_small, fill=FOREST_800)

# Right panel content — vertical stack of category labels
panel_text_x = W - panel_w + 50
categories = [
    "WATER-SOLUBLE NPK",
    "CHELATED MICRONUTRIENTS",
    "SULPHUR FERTILIZERS",
    "ORGANIC MANURE",
    "SOIL CONDITIONERS",
    "SECONDARY NUTRIENTS",
]
draw.text((panel_text_x, 80), "OUR LINES", font=sans_label, fill=CREAM_50)
draw.line([(panel_text_x, 110), (panel_text_x + 60, 110)], fill=GOLD, width=2)

cy = 150
for c in categories:
    draw.text((panel_text_x, cy), c, font=sans_small, fill=CREAM_50)
    cy += 48

# Number stat at bottom of right panel
draw.text((panel_text_x, H - 180), "24", font=serif_big, fill=CREAM_50)
draw.text((panel_text_x, H - 100), "PRODUCTS · 7 CATEGORIES", font=sans_label, fill=FOREST_300)

# Bottom URL bar on left
draw.text((80, H - 50), "greengujaratnaturalfertilizer.in", font=sans_label, fill=FOREST_700)

bg.save(OUT, "JPEG", quality=88, optimize=True)
print(f"Wrote {OUT} ({OUT.stat().st_size // 1024} KB)")
