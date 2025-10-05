# Troubleshooting Guide

## Issue: Only Loading Screen Shows, Home Page Not Visible

### Problem
The preloader (loading screen) displays but the main content never appears.

### Root Causes & Solutions Applied

#### 1. **CSS Files Not Loading** ✅ FIXED
**Problem:** CSS import paths were incorrect in `globals.css`
**Solution:**
- Changed from relative paths (`../../../assets/css/...`) to absolute paths (`/assets/css/...`)
- Files updated: `src/app/globals.css`

#### 2. **Assets in Wrong Directory** ✅ FIXED
**Problem:** Assets were copied to nested `public/assets/assets/` instead of `public/assets/`
**Solution:**
- Moved images and sass files to correct location
- Structure now: `public/assets/images/`, `public/assets/css/`, etc.

#### 3. **Preloader Not Auto-Hiding** ✅ FIXED
**Problem:** JavaScript-based preloader wasn't hiding properly in React environment
**Solution:**
- Added CSS fallback animation to fade out preloader after 1 second
- Created `public/preloader-fix.css` with auto-fadeout animation
- Imported in `src/app/layout.tsx`

### Files Modified
1. `src/app/globals.css` - Fixed CSS import paths
2. `public/preloader-fix.css` - Added (CSS fadeout animation)
3. `src/app/layout.tsx` - Import preloader-fix.css
4. `public/assets/` - Directory structure fixed

### How to Verify Fix

```bash
# 1. Stop the dev server (Ctrl+C)
# 2. Restart it
npm run dev

# 3. Open browser
# Visit: http://localhost:3000

# 4. You should see:
#    - Preloader animation (1-2 seconds)
#    - Then home page content appears
```

### If Issue Persists

#### Check Browser Console
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Common issues:
   - 404 errors for CSS files → paths still wrong
   - 404 errors for images → images not in correct folder
   - JavaScript errors → jQuery not loading

#### Verify File Structure
```bash
cd chokhiyatra-nextjs
ls public/assets/
# Should show: css/ font/ images/ js/ sass/

ls public/assets/css/
# Should show: bootstrap.min.css, main.css, etc.

ls public/assets/images/
# Should show: about/ advance/ banner/ etc.
```

#### Force Clear Cache
- Chrome: Ctrl+Shift+Del → Clear cache
- Or use Incognito/Private mode

#### Check Network Tab
1. Open DevTools → Network tab
2. Refresh page
3. Look for failed requests (red)
4. Check if CSS/JS files are loading (200 status)

### Alternative: Disable Preloader Temporarily

If you want to test without the preloader, edit `src/app/page.tsx`:

```tsx
// Comment out or remove this line:
// <Preloader />
```

Then the page will load immediately without animation.

### Current Status
✅ All fixes applied
✅ CSS paths corrected
✅ Assets in correct location
✅ Preloader auto-fadeout enabled

The page should now work correctly!

---

## Other Common Issues

### Issue: Images Not Loading

**Check:**
1. Images are in `public/assets/images/`
2. Paths start with `/assets/images/...`
3. File names match (case-sensitive on Linux/macOS)

### Issue: Sliders Not Working

**Cause:** JavaScript libraries not loaded yet

**Solution:** Scripts load after page mount. Wait 1-2 seconds after page load.

### Issue: Styles Look Wrong

**Check:**
1. `main.css` is loading (check Network tab)
2. Bootstrap CSS is loading
3. No CSS conflicts in browser console

### Issue: npm install Fails

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue: Build Fails

**Solution:**
```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

---

## Getting Help

1. Check browser console for specific errors
2. Check Network tab for failed requests
3. Verify file structure matches documentation
4. Try in Incognito mode to rule out cache issues

**Still stuck?** Share the specific error message from browser console.
