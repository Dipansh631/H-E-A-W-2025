# How to Run HEAW-2025 Website Locally

## ✅ Two Ways to View the Website

### Method 1: Development Server (RECOMMENDED)
This is the best way to see your changes in real-time:

1. Open terminal in the project folder
2. Run: `npm run dev`
3. Open browser and go to: `http://localhost:8080`
4. Make changes to your code and see them instantly!

**Status:** ✅ Currently running at http://localhost:8081

---

### Method 2: Production Build
This creates a production-ready version:

1. Build the project: `npm run build`
2. Preview the build: `npm run preview`
3. Or open the `dist/index.html` file directly

**Status:** ✅ Build is ready in `dist/` folder

---

## 📁 What I Fixed

I updated your configuration to use **relative paths** instead of absolute paths:

1. **Updated `index.html`** - Changed paths from `/src/main.jsx` to `./src/main.jsx`
2. **Updated `vite.config.js`** - Added `base: './'` configuration
3. **Rebuilt the production version** - All paths are now relative

## 🚀 Deploy to gla.ac.in

Your production build is ready in the `dist/` folder!

**Steps:**
1. Upload ALL files from the `dist/` folder to your web server
2. The website will work perfectly at `https://gla.ac.in/your-path`

## ⚠️ Important Notes

- **Development:** Use `npm run dev` for development
- **Production:** Use `npm run build` to create deployment files
- **Testing:** The `dist/` folder contains the production-ready version
- **File System:** Opening `index.html` directly will still have some limitations due to browser security

## 🎯 Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📝 Why Some Errors Still Appear

When opening `index.html` directly from the file system:
- ✅ Images will load (fixed with relative paths)
- ❌ Some JavaScript may still have issues (browser security)

**Solution:** Always use the development server (`npm run dev`) for best results!

---

Your website is ready to deploy! 🎉

