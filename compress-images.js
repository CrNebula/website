const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_DIR = path.join(__dirname, 'public/images');
const QUALITY = 80; // 压缩质量 (1-100)
const MAX_WIDTH = 1920; // 最大宽度
const MAX_HEIGHT = 1080; // 最大高度

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

async function compressImage(inputPath) {
  try {
    const outputPath = inputPath;
    const inputStat = fs.statSync(inputPath);
    const inputSize = inputStat.size;
    
    const metadata = await sharp(inputPath).metadata();
    
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    
    const ext = path.extname(inputPath).toLowerCase();
    let sharpInstance = sharp(inputPath).resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true
    });
    
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({ quality: QUALITY });
    } else if (ext === '.webp') {
      sharpInstance = sharpInstance.webp({ quality: QUALITY });
    } else {
      sharpInstance = sharpInstance.jpeg({ quality: QUALITY });
    }
    
    await sharpInstance.toFile(outputPath + '.tmp');
    
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    const outputStat = fs.statSync(outputPath);
    const outputSize = outputStat.size;
    const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(2);
    
    console.log(`✓ ${path.relative(IMAGE_DIR, inputPath)}`);
    console.log(`  ${formatSize(inputSize)} → ${formatSize(outputSize)} (减少 ${reduction}%)`);
    
    return { inputSize, outputSize, reduction };
  } catch (error) {
    console.error(`✗ ${path.relative(IMAGE_DIR, inputPath)}: ${error.message}`);
    return null;
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('开始压缩图片...\n');
  
  const images = getAllImages(IMAGE_DIR);
  console.log(`找到 ${images.length} 张图片\n`);
  
  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;
  
  for (const image of images) {
    const result = await compressImage(image);
    if (result) {
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      successCount++;
    }
  }
  
  console.log('\n压缩完成！');
  console.log(`成功压缩: ${successCount}/${images.length} 张图片`);
  console.log(`总大小: ${formatSize(totalInputSize)} → ${formatSize(totalOutputSize)}`);
  console.log(`总减少: ${((totalInputSize - totalOutputSize) / totalInputSize * 100).toFixed(2)}%`);
}

main().catch(console.error);