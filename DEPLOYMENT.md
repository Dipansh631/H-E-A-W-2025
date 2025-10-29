# Deployment Guide for GLA University

## Production Build Ready!

Your production build is now ready in the `dist/` folder. This build is optimized and ready to deploy to gla.ac.in.

## 📁 What to Deploy

Deploy the **entire contents** of the `dist/` folder to your web server at gla.ac.in.

The `dist/` folder contains:
- `index.html` - Main HTML file
- `assets/` - All optimized CSS, JavaScript, and images
- `favicon.ico` - Website icon
- `GLA_University_logo.png` - Logo
- `IUCCA_Logo[1].png` - Logo
- `placeholder.svg` - Placeholder image
- `robots.txt` - Search engine directives

## 🚀 Deployment Steps

### Option 1: If you have FTP/SFTP access
1. Connect to your gla.ac.in server using an FTP client (FileZilla, WinSCP, etc.)
2. Navigate to your web directory (usually `public_html`, `www`, or `htdocs`)
3. Upload all files from the `dist/` folder to your web directory
4. Make sure the folder structure is maintained
5. Visit your website - it should be live!

### Option 2: If you have SSH access
```bash
# SSH into your server
ssh username@gla.ac.in

# Navigate to web directory
cd /var/www/html  # or wherever your web files are

# Upload the dist folder contents
# You can use rsync, scp, or any file transfer method
```

### Option 3: Through control panel (cPanel, Plesk, etc.)
1. Log in to your hosting control panel
2. Use File Manager
3. Navigate to `public_html` or your web root
4. Upload all files from the `dist/` folder
5. Ensure files are in the root directory

## ✅ After Deployment

1. Visit your website: `https://gla.ac.in/your-path/`
2. Check if all images load correctly
3. Test all navigation links
4. Verify all sections work properly

## 🔄 For Future Updates

Whenever you make changes to your website:

1. Make the changes in your code
2. Run: `npm run build` (rebuilds the production version)
3. Upload the new files from `dist/` folder to your server

## ⚠️ Important Notes

- **DO NOT** deploy the `src/`, `node_modules/`, or other development files
- **ONLY** deploy the `dist/` folder contents
- The production build will work at any URL (localhost, gla.ac.in, etc.)
- All paths are relative and will work on any server

## 📝 Current Build Info

- Build Date: Generated automatically on build
- Build Size: ~2MB optimized
- All assets are minified and optimized for production

## 🌐 URL Structure

Once deployed, your website will be accessible at:
- `https://gla.ac.in/workshop/heaw2025` (or whatever path you choose)
- Or just `https://gla.ac.in` if deploying to root

The website will work perfectly on the server because it will be served over HTTP/HTTPS protocol, not file://

## ❓ Need Help?

If you encounter any issues:
1. Make sure all files from `dist/` are uploaded
2. Check file permissions (should be 644 for files, 755 for directories)
3. Clear browser cache
4. Test in incognito mode

---

**Build Command:** `npm run build`  
**Preview Command:** `npm run preview`  
**Development Server:** `npm run dev`

