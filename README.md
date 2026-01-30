# Tiflida Hotel Website

A modern, responsive hotel website built with React and Vite.

## Features

- 🏨 Beautiful, modern design
- 📱 Fully responsive
- 🌐 Multi-language support (English & Georgian)
- 📧 Contact form with email functionality
- 🗺️ Google Maps integration
- 🖼️ Image galleries and carousels
- 🎨 Elegant color scheme

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Express.js (for email server)
- **Styling**: CSS3
- **Email**: Nodemailer
- **Deployment**: Vercel

## Getting Started

### Installation

```bash
npm install
```

### Development

Run both frontend and backend:
```bash
npm run dev:all
```

Or run separately:
```bash
# Frontend only
npm run dev

# Backend only (in another terminal)
npm run server
```

### Build

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-password
SMTP_REJECT_UNAUTHORIZED=true
CONTACT_EMAIL=info@tiflidahotel.com
```

## Deployment to Vercel

See [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) for detailed deployment instructions.

Quick steps:
1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
tiflida/
├── api/                 # Vercel serverless functions
├── server/              # Express server (for local development)
├── src/
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts
│   ├── pages/          # Page components
│   └── translations/   # Language translations
├── public/             # Static assets
└── dist/               # Build output
```

## License

Private project - Tiflida Hotel
