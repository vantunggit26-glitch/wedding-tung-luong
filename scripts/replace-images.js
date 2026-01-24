const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "../public/image_wedding_compressed");
const targetDir = path.join(__dirname, "../public/image_wedding");
const backupDir = path.join(__dirname, "../public/image_wedding_backup");

// Backup ảnh gốc
if (!fs.existsSync(backupDir)) {
  console.log("Creating backup...");
  fs.mkdirSync(backupDir, { recursive: true });

  const files = fs.readdirSync(targetDir);
  files.forEach((file) => {
    fs.copyFileSync(path.join(targetDir, file), path.join(backupDir, file));
  });
  console.log("✓ Backup created in /public/image_wedding_backup/");
}

// Thay thế bằng ảnh đã compress
console.log("\nReplacing images...");
const files = fs.readdirSync(sourceDir);
files.forEach((file) => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
});

console.log(`✅ Replaced ${files.length} images!`);
console.log("\nOriginal images backed up to: /public/image_wedding_backup/");
