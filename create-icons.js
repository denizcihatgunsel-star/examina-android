const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const LOGO_SOURCE = './assets/logo-source.png';
const DARK_BG = '#0e0d12'; // Dark background matching the logo

async function createIcons() {
  console.log('Creating app icons...');
  
  // App icon (1024x1024)
  await sharp(LOGO_SOURCE)
    .resize(1024, 1024, { fit: 'contain', background: DARK_BG })
    .png()
    .toFile('./assets/icon.png');
  console.log('✓ icon.png');
  
  // Adaptive icon foreground (1024x1024)
  await sharp(LOGO_SOURCE)
    .resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('./assets/adaptive-icon.png');
  console.log('✓ adaptive-icon.png');
  
  // Favicon (48x48)
  await sharp(LOGO_SOURCE)
    .resize(48, 48, { fit: 'contain', background: DARK_BG })
    .png()
    .toFile('./assets/favicon.png');
  console.log('✓ favicon.png');
  
  // Splash screen (1284x2778 - iPhone 14 Pro Max size)
  // Dark background with centered logo
  const logoBuffer = await sharp(LOGO_SOURCE)
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  
  await sharp({
    create: {
      width: 1284,
      height: 2778,
      channels: 4,
      background: DARK_BG
    }
  })
  .composite([{
    input: logoBuffer,
    top: Math.floor((2778 - 400) / 2),
    left: Math.floor((1284 - 400) / 2)
  }])
  .png()
  .toFile('./assets/splash.png');
  console.log('✓ splash.png');
  
  console.log('\nAll icons created successfully!');
}

createIcons().catch(console.error);
