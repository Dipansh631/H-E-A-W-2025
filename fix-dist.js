import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Copy public assets to dist if they don't exist
const publicFiles = ['IUCCA_Logo[1].png', 'GLA_University_logo.png', 'favicon.ico', 'placeholder.svg', 'robots.txt'];
publicFiles.forEach(file => {
  const src = join(__dirname, 'public', file);
  const dest = join(__dirname, 'dist', file);
  try {
    if (existsSync(src)) {
      copyFileSync(src, dest);
      console.log(`✓ Copied ${file} to dist`);
    }
  } catch (e) {
    // File might already exist or not exist in public
  }
});

// Read the built index.html
const indexPath = join(__dirname, 'dist', 'index.html');
let indexHtml = readFileSync(indexPath, 'utf8');

// Find the script tag and extract its src
const scriptMatch = indexHtml.match(/<script[^>]*src="([^"]+)"[^>]*>/);
if (scriptMatch) {
  const scriptSrc = scriptMatch[1];
  
  // Remove the script tag from head (including any closing tags left behind)
  indexHtml = indexHtml.replace(/<script[^>]*src="[^"]+"[^>]*>/g, '');
  indexHtml = indexHtml.replace(/<\/script>\s*<\/head>/g, '\n  </head>');
  
  // Move script to end of body (before </body>)
  const newScriptTag = `\n    <script src="${scriptSrc}"></script>\n  `;
  indexHtml = indexHtml.replace(/\s*<\/body>/, newScriptTag + '</body>');
}

// Write back
writeFileSync(indexPath, indexHtml);
console.log('✓ Fixed dist/index.html for file:// protocol');

