# 🚀 Plesk Deployment Instructions - cashyte.com

## ✅ ERESOLVE Error Fixed!

**Problem Resolved:** Removed conflicting Three.js packages that were causing npm dependency conflicts.

## 📦 Deployment Files Ready

All files are in the `dist/` folder and ready for Plesk upload:

```
dist/
├── package.json          # Clean production dependencies only
├── server/
│   └── node-build.mjs    # Express server
└── spa/
    ├── index.html        # Main app
    ├── assets/           # CSS/JS bundles
    └── .well-known/      # SSL validation files
        └── pki-validation/
            └── AC3D013D8DD5F3D608445DB78CA1B2ED.txt
```

## 🎯 Step-by-Step Plesk Deployment

### 1. Upload Files to Plesk
- **Method 1:** Upload `dist/` folder contents to `public_html/`
- **Method 2:** Use Plesk File Manager to upload files

### 2. Set Node.js Version
- Go to **Plesk Panel** → **Node.js**
- Set **Node.js version**: 20.x or higher
- Set **Document root**: `public_html/spa`
- Set **Application startup file**: `../server/node-build.mjs`

### 3. Install Dependencies
```bash
cd /var/www/vhosts/cashyte.com/httpdocs
npm install --only=production
```

### 4. Configure Environment
- Go to **Plesk Panel** → **Node.js** → **Environment Variables**
- Add: `NODE_ENV=production`
- Add: `PORT=3000`

### 5. Start Application
- Click **Enable Node.js** in Plesk
- Application should start automatically

## 🔧 Troubleshooting

### If npm install still fails:
```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps --only=production

# Or use npm v10 (not v11)
npm install -g npm@10.8.2
npm install --only=production
```

### File Permissions:
```bash
chmod -R 755 public_html/
chmod 644 public_html/spa/.well-known/pki-validation/*.txt
```

## ✅ Verification Checklist

After deployment, verify:
- [ ] **Website loads:** `https://cashyte.com`
- [ ] **Humans see:** Clean login page
- [ ] **Bots see:** Lifestyle content (test with bot user agents)
- [ ] **SSL validation:** `http://cashyte.com/.well-known/pki-validation/AC3D013D8DD5F3D608445DB78CA1B2ED.txt`
- [ ] **Contact info visible:** mikebhai355@gmail.com, +1-833-251-8091

## 📝 Production Dependencies (Clean)

Only essential packages included:
```json
{
  "dotenv": "^17.2.0",     # Environment variables
  "express": "^4.18.2",   # Web server
  "zod": "^3.23.8"        # Validation
}
```

**Total size:** Much smaller than before (Three.js packages removed)

---
**🎉 Ready for Production!**  
**Status: 🟢 ERESOLVE Error Resolved**
