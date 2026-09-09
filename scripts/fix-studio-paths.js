// `sanity build` emits root-absolute /static/* URLs in index.html and the
// web manifest, ignoring the Studio basePath. When the Studio is served from
// /studio alongside the frontend (which owns /static/* itself), rewrite those
// refs to /studio/static/*. The Studio JS bundle has no absolute /static refs
// (Vite code-splitting is relative), so these two files are all that need it.
const fs = require("fs");
const path = require("path");

const studioDir = path.join(__dirname, "..", "build", "studio");
const files = ["index.html", path.join("static", "manifest.webmanifest")];

for (const rel of files) {
  const file = path.join(studioDir, rel);
  if (!fs.existsSync(file)) {
    console.warn(`[fix-studio-paths] missing ${file}, skipping`);
    continue;
  }
  const before = fs.readFileSync(file, "utf8");
  const after = before.replaceAll('"/static/', '"/studio/static/');
  if (after !== before) {
    fs.writeFileSync(file, after);
    console.log(`[fix-studio-paths] rewrote asset prefix in ${rel}`);
  }
}
