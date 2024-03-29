const express = require('express')
const nodemailer = require("nodemailer");
const cors = require('cors');
const dotenv = require('dotenv');
const validator = require('validator');

// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import validator from 'validator';


const app = express()
dotenv.config();
const PORT = process.env.PORT;

// app.use(express.static('public'));

app.use(cors());

// Setting up course to allow us pass to frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const sendEmail = ({ recipient_email }) => {
  return new Promise((resolve, reject) => {
    // const { senderEmail, message } = req.body;

    // Validate email address
    if (!validator.isEmail(recipient_email)) {
      return res.status(400).send('Invalid email address');
    }

    const output = `
      <p>You have a new Subscribe request</p>
      <h3>Contact Email</h3>
      <ul>
        <li>Email: ${recipient_email}</li>
      </ul>
    `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Use either port 465 (SSL) or 587 (TLS)
      port: 465,
      secure: true, // Use false if you are using port 587 (TLS)
      tls: {
        rejectUnauthorized: false,
      },
    })

    const mail_configs = {
      // from: '"Bob-Daawid" <bobdaawid@gmail.com>'
      from: `"Puzzle Product Subscription" <${process.env.EMAIL_USER}>`,
      to: 'puzzleafrica@gmail.com',
      // to: recipient_email,
      subject: 'Subscription Confirmation',
      html: output,
    }
    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        console.log(error);
        return reject({message: `An error has occured`});
      } else {
        console.log(info)
        return resolve({ message: "Email sent successfully"});
      }
    });
  });
}

// app.get('/', (req, res) => {
//   sendEmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(400).send(error.message));
// });

// app.post('/subscribe', (req, res) => {
//   sendEmail(req.body)
//   .then((response) => res.send(response.message))
//   .catch((error) => res.status(400).send(error.message));
// })

// // Handle click event on YouTube image
// app.get('/video', (req, res) => {
//   const range = req.headers.range;

//   if(!range) {
//     res.status(400).send("Requires Range header");
//   }

//   const videoPath = 'public/successfulcompany.mp4';
//   const videoSize = fs.statSync(videoPath).size;

//   // Parse Range
//   // Example: 'bytes=32324-'
//   const CHUNCK_SIZE = 10 ** 6; // 10MB
//   const start = Number(range.replace(/\D/g, ""));;
//   const end = Math.min(start + CHUNCK_SIZE, videoSize - 1);

//   const contentLength = end - start + 1;
//   const headers = {
//     "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//     "Accept-Ranges": "bytes",
//     "Content-Length": contentLength,
//     "Content-Type": "video/mp4",
//   };

//   res.writeHead(206, headers);

//   const videoStream = fs.createReadStream(videoPath, { start, end });

//   videoStream.pipe(res);
// });

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

