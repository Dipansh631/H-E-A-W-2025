# How to Use HEAW-2025 Website

## 🎯 For Your College Deployment on gla.ac.in

### ✅ Website is Now Ready!

Your website has been configured to work when opened directly from File Explorer and when deployed to a web server.

---

## 📁 How to Open from File Explorer

### Simple Method:
1. Open File Explorer
2. Navigate to: `D:\dowl\heaw\H-E-A-W-2025-main\dist`
3. Double-click on `index.html`
4. The website should open in your browser **WITHOUT CORS errors!**

### What We Fixed:
- ✅ Removed module type from script tag
- ✅ Changed to IIFE format (works without a server)
- ✅ All paths are relative
- ✅ Images and files will load correctly

---

## 🚀 Deploy to gla.ac.in

Your website is production-ready! Here's how to deploy:

### Steps:
1. **Upload the `dist` folder contents** to your web server
2. Place files in your web directory (usually `public_html` or `www`)
3. Make sure all files from `dist/` are uploaded
4. Visit your website at `https://gla.ac.in/your-path`

### What's in `dist/`:
- `index.html` - Main webpage
- `assets/` - All CSS, JavaScript, and images
- Logos and icons (GLA_University_logo.png, IUCCA_Logo[1].png, etc.)

---

## 🔄 After Making Changes

When you update the website:

1. Edit your source files in `src/`
2. Run: `npm run build`
3. A post-build script will automatically fix the files for both local and server use
4. Upload the NEW files from `dist/` to gla.ac.in

---

## 🎨 Development vs Production

| Type | Use For | How to Run |
|------|---------|------------|
| **Development** | Testing changes | `npm run dev` → http://localhost:8081 |
| **Production** | Deploy to server OR open from File Explorer | Double-click `dist/index.html` |

---

## ✅ Summary

- ✅ Website works when opened from File Explorer (dist/index.html)
- ✅ Website works when deployed to gla.ac.in
- ✅ No CORS errors
- ✅ All images and assets load correctly
- ✅ Automatic fix after every build

---

## 📝 Quick Commands

```bash
npm run dev      # Development server with live reload
npm run build    # Build for deployment (includes auto-fix)
npm run preview  # Preview the production build
```

---

**Your website is ready to deploy to gla.ac.in! 🎉**

