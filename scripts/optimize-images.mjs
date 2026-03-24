import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, relative } from 'path';

const IMAGES_DIR = join(process.cwd(), 'public', 'images');
const QUALITY = 80;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImages() {
  const files = await getFiles(IMAGES_DIR);
  const imageFiles = files.filter((f) =>
    ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log('All images already optimized (no PNG/JPG files found)');
    return;
  }

  console.log(`Found ${imageFiles.length} images to optimize`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of imageFiles) {
    const relPath = relative(IMAGES_DIR, file);
    const beforeStat = await stat(file);
    totalBefore += beforeStat.size;

    const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');

    try {
      await sharp(file).webp({ quality: QUALITY }).toFile(webpPath);

      const afterStat = await stat(webpPath);
      totalAfter += afterStat.size;

      const savings = (
        ((beforeStat.size - afterStat.size) / beforeStat.size) *
        100
      ).toFixed(1);
      console.log(
        `  ${relPath}: ${formatSize(beforeStat.size)} → ${formatSize(afterStat.size)} (${savings}% smaller)`
      );

      // Remove original
      await unlink(file);
    } catch (err) {
      console.error(`  Failed: ${relPath} - ${err.message}`);
      totalAfter += beforeStat.size;
    }
  }

  console.log(
    `\nTotal: ${formatSize(totalBefore)} → ${formatSize(totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% reduction)`
  );
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

optimizeImages();
