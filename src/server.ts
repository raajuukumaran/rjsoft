import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rraajuukumaran@gmail.com', // Replace with your email
    pass: 'Rajesh..'   // Replace with your email password or app password if using 2FA
  }
});

app.post('/send', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'rraajuukumaran@gmail.com', // Replace with your receiving email
    subject: `Contact Form Submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Failed to send email:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    } else {
      return res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
