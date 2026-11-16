const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) await walk(p);
    else if (p.toLowerCase().endsWith('.png')) {
      const out = p.replace(/\.png$/i, '.webp');
      await sharp(p)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
      const a = (fs.statSync(p).size / 1024).toFixed(0);
      const b = (fs.statSync(out).size / 1024).toFixed(0);
      console.log(`${path.basename(p)}: ${a} KB -> ${b} KB`);
    }
  }
}

walk('public/images').then(() => console.log('DONE'));