# Email Server Setup

This server handles email functionality for the Tiflida Hotel website contact form.

## Installation

1. Install dependencies:
```bash
npm install
```

## Configuration

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your SMTP server credentials:

```env
PORT=3001

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_REJECT_UNAUTHORIZED=true

CONTACT_EMAIL=info@tiflidahotel.com
```

## SMTP Configuration Examples

### Gmail
- **SMTP_HOST**: `smtp.gmail.com`
- **SMTP_PORT**: `587`
- **SMTP_SECURE**: `false`
- **SMTP_USER**: Your Gmail address
- **SMTP_PASSWORD**: Use an App Password (not your regular password)
  - Go to Google Account → Security → 2-Step Verification → App passwords
  - Generate an app password for "Mail"

### Outlook/Hotmail
- **SMTP_HOST**: `smtp-mail.outlook.com`
- **SMTP_PORT**: `587`
- **SMTP_SECURE**: `false`
- **SMTP_USER**: Your Outlook email
- **SMTP_PASSWORD**: Your Outlook password

### Custom SMTP Server
- **SMTP_HOST**: Your mail server hostname
- **SMTP_PORT**: Usually `587` (TLS) or `465` (SSL)
- **SMTP_SECURE**: `true` for port 465, `false` for port 587
- **SMTP_USER**: Your email username
- **SMTP_PASSWORD**: Your email password

## Running the Server

### Development (separate terminals)
Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run server
```

### Development (both together)
```bash
npm run dev:all
```

### Production
```bash
npm run server
```

## API Endpoints

### Health Check
```
GET /api/health
```

### Send Contact Form Email
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I have a question..."
}
```

## Testing

1. Start the server: `npm run server`
2. Test the health endpoint: `curl http://localhost:3001/api/health`
3. Test the contact form from the website

## Troubleshooting

- **Connection refused**: Make sure the server is running on port 3001
- **Authentication failed**: Check your SMTP credentials in `.env`
- **Email not sending**: Verify SMTP settings and check server logs
- **CORS errors**: The server includes CORS middleware, but ensure the frontend URL is allowed if needed
