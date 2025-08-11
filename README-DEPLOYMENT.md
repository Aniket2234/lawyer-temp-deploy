# Pocket Lawyer - Netlify Deployment Guide

## Prerequisites
1. GitHub account
2. Netlify account
3. Node.js 20 or higher

## Deployment Steps

### 1. Prepare for Deployment
Your project is already configured for Netlify deployment with:
- `netlify.toml` - Build and deployment configuration
- `public/_redirects` - SPA routing and API redirects
- `netlify/functions/api.ts` - Serverless API function

### 2. Upload to GitHub
1. Create a new repository on GitHub
2. Upload all project files to the repository
3. Make sure to include all files except `node_modules/` and `.env` files

### 3. Deploy on Netlify
1. Go to Netlify (https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository
5. Netlify will automatically detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

### 4. Environment Variables (Optional)
If you want to enable email features, add these in Netlify's site settings:
- `SENDGRID_API_KEY` - For email notifications

### 5. Custom Domain (Optional)
In Netlify site settings, you can add a custom domain if desired.

## Features Available After Deployment

✅ **Working Features (Static/Client-side):**
- Complete UI and navigation
- Legal knowledge base (static content)
- Document templates
- Case law database
- State law guides
- Responsive design

⚠️ **Limited Features (Need Backend Integration):**
- AI Chat (shows demo responses)
- Consultation booking (frontend only)
- User authentication (needs database)
- Real-time feedback (needs email service)

## Post-Deployment Customization

To enable full functionality, you would need to:
1. Set up a database (PostgreSQL, MongoDB, etc.)
2. Integrate with an AI service (OpenAI, Claude, etc.)
3. Configure email service (SendGrid, etc.)
4. Update the serverless functions to connect to these services

## Troubleshooting

**Build Issues:**
- Ensure Node.js 20 is specified in `netlify.toml`
- Check that all dependencies are in `package.json`

**Routing Issues:**
- The `_redirects` file handles SPA routing
- API calls are redirected to serverless functions

**Function Issues:**
- Check Netlify function logs in the dashboard
- Ensure TypeScript is properly compiled

## Support
The deployed application will work as a static site with demo functionality. For full features, additional backend services need to be integrated.