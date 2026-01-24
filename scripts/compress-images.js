const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../public/image_wedding");
const outputDir = path.join(__dirname, "../public/image_wedding_compressed");

// Tạo thư mục output nếu chưa có
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Compress tất cả ảnh JPG
const compressImages = async () => {
  const files = fs
    .readdirSync(inputDir)
    .filter(
      (file) =>
        file.toLowerCase().endsWith(".jpg") ||
        file.toLowerCase().endsWith(".jpeg"),
    );

  console.log(`Found ${files.length} images to compress...`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    try {
      await sharp(inputPath)
        .jpeg({
          quality: 60, // Giảm chất lượng xuống 60%
          progressive: true, // Progressive JPEG
          mozjpeg: true, // Dùng mozjpeg để compress tốt hơn
        })
        .resize(1920, null, {
          // Resize max width 1920px, giữ tỷ lệ
          withoutEnlargement: true,
          fit: "inside",
        })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const compressedSize = fs.statSync(outputPath).size;
      const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);

      console.log(
        `✓ ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (giảm ${reduction}%)`,
      );
    } catch (error) {
      console.error(`✗ Error compressing ${file}:`, error.message);
    }
  }

  console.log("\n✅ Done! Compressed images saved to:", outputDir);
  console.log("\nNext steps:");
  console.log("1. Kiểm tra ảnh trong /public/image_wedding_compressed/");
  console.log("2. Nếu ok, thay thế folder cũ: npm run replace-images");
};

compressImages();
