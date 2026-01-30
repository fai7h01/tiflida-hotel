# Deploying to Vercel

This guide will help you deploy the Tiflida Hotel website to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed (optional, for CLI deployment):
   ```bash
   npm install -g vercel
   ```

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   - Create a repository
   - Push all your code

2. **Import Project to Vercel**
   - Go to https://vercel.com/new
   - Import your Git repository
   - Vercel will auto-detect it's a Vite project

3. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     ```
     SMTP_HOST=your-smtp-server.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=your-email@domain.com
     SMTP_PASSWORD=your-password
     SMTP_REJECT_UNAUTHORIZED=true
     CONTACT_EMAIL=info@tiflidahotel.com
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Add Environment Variables**:
   ```bash
   vercel env add SMTP_HOST
   vercel env add SMTP_PORT
   vercel env add SMTP_SECURE
   vercel env add SMTP_USER
   vercel env add SMTP_PASSWORD
   vercel env add SMTP_REJECT_UNAUTHORIZED
   vercel env add CONTACT_EMAIL
   ```

5. **Redeploy with environment variables**:
   ```bash
   vercel --prod
   ```

## Important Notes

### API Routes
- The email API is set up as Vercel serverless functions in the `/api` directory
- These will automatically work when deployed to Vercel
- No additional server configuration needed

### Environment Variables
- **Never commit** your `.env` file to Git
- Add all SMTP credentials as environment variables in Vercel dashboard
- Environment variables are encrypted and secure

### Build Configuration
- Vercel will automatically detect Vite
- The build output goes to `dist` directory
- API routes in `/api` are automatically converted to serverless functions

### Testing After Deployment
1. Visit your deployed site
2. Test the contact form
3. Check Vercel function logs if emails aren't sending:
   - Go to your project → Functions tab
   - Check logs for any errors

## Troubleshooting

### Emails Not Sending
- Verify all environment variables are set correctly in Vercel
- Check Vercel function logs for errors
- Ensure SMTP credentials are correct
- Some SMTP providers require app-specific passwords (like Gmail)

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure build command is correct
- Check Vercel build logs for specific errors

### API Routes Not Working
- Verify the `/api` directory structure is correct
- Check that routes are properly configured in `vercel.json`
- Ensure CORS is properly configured in API functions

## Post-Deployment

After successful deployment:
1. Test all pages and functionality
2. Test the contact form with a real email
3. Verify language switching works
4. Check mobile responsiveness
5. Test booking button redirects

Your site will be live at: `https://your-project-name.vercel.app`
