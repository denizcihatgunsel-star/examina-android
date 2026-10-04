#!/bin/bash
# Create Examina icon - Dark "E" on white background with Examina blue

# Main icon 1024x1024 - white background with dark blue E
convert -size 1024x1024 xc:#0055FF \
  -gravity center \
  -fill white \
  -font DejaVu-Sans-Bold \
  -pointsize 600 \
  -annotate +0+0 "E" \
  icon.png

# Adaptive icon 1024x1024 - same design
cp icon.png adaptive-icon.png

# Favicon 48x48
convert icon.png -resize 48x48 favicon.png

# Splash screen 1284x2778 - beige background with icon in center
convert -size 1284x2778 xc:#F7F3EE \
  \( icon.png -resize 320x320 \) \
  -gravity center \
  -composite \
  splash.png

echo "Icons created successfully"
