const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const apiDir = path.join(__dirname, "..", "src", "app", "api");
const tempDir = path.join(__dirname, "..", "src", "_api_temp");

const hasApi = fs.existsSync(apiDir);

try {
  if (hasApi) {
    fs.renameSync(apiDir, tempDir);
  }
  console.log("Building Next.js for Cloudflare Pages (static HTML export)...");
  execSync("npx next build", { stdio: "inherit" });
  console.log("Static export build completed successfully.");
} finally {
  if (fs.existsSync(tempDir)) {
    fs.renameSync(tempDir, apiDir);
  }
}
