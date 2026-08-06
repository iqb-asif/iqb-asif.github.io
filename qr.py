import qrcode
from PIL import Image, ImageDraw, ImageFont

DATA = "tel:+917678622647"

qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=16,
    border=4,
)

qr.add_data(DATA)
qr.make(fit=True)

matrix = qr.get_matrix()

BOX = 16
RADIUS = 5

rows = len(matrix)
cols = len(matrix[0])

img = Image.new(
    "RGBA",
    (cols * BOX, rows * BOX),
    (255, 255, 255, 0),      # transparent background
)

draw = ImageDraw.Draw(img)

# ---------------- Font ----------------

try:
    font = ImageFont.truetype("arialbd.ttf", 70)
except:
    font = ImageFont.load_default()

text = "AI"

bbox = draw.textbbox((0, 0), text, font=font)

tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]

cx = img.width // 2
cy = img.height // 2

padding = 12

left = cx - tw // 2 - padding
top = cy - th // 2 - padding
right = cx + tw // 2 + padding
bottom = cy + th // 2 + padding

# ------------- Draw QR ----------------

for y in range(rows):
    for x in range(cols):

        if not matrix[y][x]:
            continue

        px = x * BOX
        py = y * BOX

        # Skip ONLY the text area
        if (
            px < right
            and px + BOX > left
            and py < bottom
            and py + BOX > top
        ):
            continue

        draw.rounded_rectangle(
            (
                px + 2,
                py + 2,
                px + BOX - 2,
                py + BOX - 2,
            ),
            radius=RADIUS,
            fill="black",
        )

# --------- Draw AI (transparent background) ---------

draw.text(
    (cx - tw / 2, cy - th / 2),
    text,
    font=font,
    fill="black",
)

img.save("AI_QR.png")