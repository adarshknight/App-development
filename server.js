const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5001;

// Use CORS
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '727722euit006@skcet.ac.in',
    pass: 'adarsh@14122004'
  }
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: '727722euit006@skcet.ac.in',
    subject: 'Newsletter Subscription',
    text: `New subscription from: ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to subscribe');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Successfully subscribed');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
