import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './services/emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email server is running' });
});

// Contact form email endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }

    // Send email
    const emailResult = await sendEmail({
      from: email,
      name: name,
      subject: subject,
      message: message
    });

    if (emailResult.success) {
      res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send email. Please try again later.' 
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error. Please try again later.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
