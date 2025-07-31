# Plesk Deployment Guide

## Step 1: Build the Project

The project has been built successfully. You'll find the production files in:

- `dist/spa/` - Frontend files (React app)
- `dist/server/` - Backend files (Express server)

## Step 2: Upload Files to Plesk

### Option A: Static Website (Frontend Only)

If you want to deploy just the frontend as a static website:

1. **Upload to Document Root:**

   - Copy all files from `dist/spa/` folder
   - Upload to your domain's `httpdocs` or `public_html` folder in Plesk
   - This includes: `index.html`, `assets/` folder, etc.

2. **Configure Web Server:**
   - In Plesk, go to your domain settings
   - Set up URL rewriting for React Router:
     ```
     RewriteEngine On
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
     ```

### Option B: Full Stack Application (Recommended)

For the complete application with backend:

1. **Upload Server Files:**

   - Create a folder like `app/` in your domain root
   - Upload these files to the `app/` folder:
     - `dist/server/node-build.mjs`
     - `dist/spa/` (entire folder)
     - `package.json`

2. **Install Dependencies:**

   - SSH into your Plesk server or use Plesk Node.js interface
   - Navigate to your app folder
   - Run: `npm install --production`

3. **Configure Node.js Application in Plesk:**
   - Go to Plesk → Domains → Your Domain → Node.js
   - Set Application Root: `/app`
   - Set Application Startup File: `dist/server/node-build.mjs`
   - Set Application Environment: `production`

## Step 3: Environment Configuration

Create a `.env` file in your app folder:

```env
NODE_ENV=production
PORT=3000
```

## Step 4: File Structure on Server

Your Plesk hosting should look like this:

```
your-domain.com/
├── httpdocs/ (or public_html/)
│   └── (other files)
├── app/
│   ├── dist/
│   │   ├── server/
│   │   │   └── node-build.mjs
│   │   └── spa/
│   │       ├── index.html
│   │       └── assets/
│   ├── package.json
│   ├── .env
│   └── node_modules/
```

## Step 5: Testing

### For Static Deployment:

- Visit your domain directly
- Should show the login page

### For Full Stack Deployment:

- The Node.js app will serve both frontend and backend
- Visit your domain - should show the login page
- API endpoints available at `/api/*`

## Troubleshooting

### Common Issues:

1. **404 on React Routes:**

   - Ensure URL rewriting is configured
   - Check that `.htaccess` file is present (for Apache)

2. **Node.js App Won't Start:**

   - Check Node.js version (requires Node 16+)
   - Verify file permissions
   - Check Plesk error logs

3. **Bot Detection Issues:**
   - The bot detection is currently disabled for easier deployment
   - Can be re-enabled by uncommenting BotRouter in App.tsx

## Additional Notes

- The website includes bot detection and routing
- Main page shows clean login form
- `/lifestyle` route shows lifestyle content
- Error handling shows the specified error message
- No branding as requested (removed VaultPay references)

## Support Files Included

- All source code is production-ready
- Modern React 18 with TypeScript
- Vite build system for optimal performance
- Express.js backend for API endpoints
- Responsive design works on all devices
