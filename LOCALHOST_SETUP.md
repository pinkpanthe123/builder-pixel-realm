# Running on Localhost - Setup Guide

## Step 1: Get the Source Code

### Option A: Download Project
1. Click the [**Download Project button**](#project-download) above
2. Extract the ZIP file to your desired folder
3. Open terminal/command prompt in that folder

### Option B: Clone from Git (if pushed to repository)
```bash
git clone [your-repository-url]
cd [project-folder]
```

## Step 2: Install Requirements

### Prerequisites:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Check if installed:
```bash
node --version
npm --version
```

## Step 3: Install Dependencies

Open terminal in your project folder and run:
```bash
npm install
```

This will install all required packages (React, Express, Vite, etc.)

## Step 4: Start Development Server

Run the development server:
```bash
npm run dev
```

## Step 5: Access Your Application

Once the server starts, you'll see output like:
```
Local:   http://localhost:8080
Network: http://192.168.x.x:8080
```

**Open your browser and go to:** `http://localhost:8080`

## What You'll See:

✅ **Main Page (`/`)** - Clean PayPal-style login form  
✅ **Lifestyle Page (`/lifestyle`)** - Rich content page  
✅ **Error Demo (`/login-error`)** - Shows error message  

## Development Features:

- **Hot Reload** - Changes update automatically
- **Full Stack** - Frontend (React) + Backend (Express)
- **TypeScript** - Type safety throughout
- **Modern Tooling** - Vite for fast development

## Available Scripts:

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm test          # Run tests
npm run typecheck # Check TypeScript
```

## Troubleshooting:

### Port Already in Use:
If port 8080 is busy, the server will automatically use the next available port (8081, 8082, etc.)

### Installation Errors:
```bash
# Clear npm cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Permission Issues (Mac/Linux):
```bash
sudo npm install
```

## Project Structure:
```
your-project/
├── client/           # React frontend
│   ├── pages/        # Route components
│   ├── components/   # UI components
│   └── App.tsx       # Main app
├── server/           # Express backend
│   ├── routes/       # API endpoints
│   └── index.ts      # Server setup
├── shared/           # Shared types
└── package.json      # Dependencies
```

## Features Working:
- ✅ Clean login page (no branding)
- ✅ PayPal-style design with blue colors
- ✅ Error message with help number
- ✅ Lifestyle content page
- ✅ Responsive design
- ✅ Bot detection (currently disabled for easier testing)

Your localhost will have the exact same functionality as the live version!
