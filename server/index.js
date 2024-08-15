const express = require('express')
const nodemailer = require("nodemailer");
const cors = require('cors');
const dotenv = require('dotenv');
const validator = require('validator');
const mongoose = require('mongoose');
// const helmet = require("helmet");
// const morgan = require("morgan");

// const AuthRoute = require('./Routes/AuthRoute.js');
// const userRoute = require("./Routes/UserRoute.js");
// const MessageRoute = require('./Routes/MessageRoute.js')
// const ChatRoute = require('./Routes/ChatRoute.js')


const app = express()
dotenv.config();

const PORT = process.env.PORT || 3000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(accountSid, authToken);
const DATABASE_URL = process.env.DATABASE_URL;

// app.use(express.static('public'));

// app.use(cors());
// Configure CORS
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return callback(null, true);

    // Check if the origin is allowed
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }

    // If the origin is allowed, allow the request
    return callback(null, true);
  }
}));
// Setting up course to allow us pass to frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(helmet());
// app.use(morgan("common"));

const sendEmail = ({ recipient_email }) => {
  return new Promise((resolve, reject) => {
    // const { senderEmail, message } = req.body;

    // Validate email address
    if (!validator.isEmail(recipient_email)) {
      return reject({ message: 'Invalid email address'});
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

app.post('/subscribe', (req, res) => {
  sendEmail(req.body)
  .then((response) => res.send(response.message))
  .catch((error) => res.status(400).send(error.message));
})



// const sendOTP = ({ recipient_email, OTP }) => {
//   return new Promise((resolve, reject) => {
//     // const { senderEmail, message } = req.body;

//     // Validate email address
//     if (!validator.isEmail(recipient_email)) {
//       return reject({ message: 'Invalid email address'});
//     }

//     const output = `<!DOCTYPE html>
//     <html lang="en" >
//     <head>
//       <meta charset="UTF-8">
//       <title>CodePen - OTP Email Template</title>
      
    
//     </head>
//     <body>
//     <!-- partial:index.partial.html -->
//     <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//       <div style="margin:50px auto;width:70%;padding:20px 0">
//         <div style="border-bottom:1px solid #eee">
//           <a href="" style="font-size:1.4em;color: #6F00B4;text-decoration:none;font-weight:600">Puzzle Africa</a>
//         </div>
//         <p style="font-size:1.1em">Hi,</p>
//         <p>Thank you for choosing Puzzle Africa. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
//         <h2 style="background: #6F00B4;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
//         <p style="font-size:0.9em;">Regards,<br />Puzzle Africa</p>
//         <hr style="border:none;border-top:1px solid #eee" />
//         <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//           <p>Simsak Technologies LTD</p>
//           <p>1600 Amphitheatre Parkway</p>
//           <p>Nigeria</p>
//         </div>
//       </div>
//     </div>
//     <!-- partial -->
      
//     </body>
//     </html>`;

//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth:{
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       // Use either port 465 (SSL) or 587 (TLS)
//       port: 465,
//       secure: true, // Use false if you are using port 587 (TLS)
//       tls: {
//         rejectUnauthorized: false,
//       },
//     })

//     const mail_configs = {
//       // from: '"Bob-Daawid" <bobdaawid@gmail.com>'
//       from: `"Your Puzzle Password Reset" <${process.env.EMAIL_USER}>`,
//       to: recipient_email,
//       // to: recipient_email,
//       subject: 'RECOVERY PASSWORD',
//       html: output,
//     }
//     transporter.sendMail(mail_configs, (error, info) => {
//       if (error) {
//         console.log(error);
//         return reject({message: `An error has occured`});
//       } else {
//         console.log(info)
//         return resolve({ message: "Email sent successfully"});
//       }
//     });
//   });
// }

// app.post("/send_recovery_email", (req, res) => {
//   sendOTP(req.body)
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });

// From here above


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

// app.listen(PORT, () => {
//   console.log(`Server started at http://localhost:${PORT}`);
// });

// mongoose.connect(DATABASE_URL).then(() =>
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     })
// )
// .catch((error) => console.log(error));


app.get('/', (req, res) => {
  res.send('Hello, World!')
});

app.post('/', (req, res) => {
  const {message, user: sender, type, members} = req.body;

  if(type === 'message.new'){
    members
      .filter((member) => member.user.id !== sender.id)
      .forEach(({user}) => {
        if(!user.online){
          twilioClient.messages.create({
            body: `You have a new message from ${message.user.fullName} - ${message.text}`,
            // messagingServiceSid: 
            to: user.phoneNumber
          })
            .then(() => console.log('Message sent!'))
            .catch((err) => console.log(err));
        }
      })
      return res.status(200).send('Message Sent!');
  }

  return res.status(200).send('Not a new message request');
})

mongoose.connect(DATABASE_URL).then(() =>
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
)
.catch((error) => console.log(error));

// usage of routes
// app.use('/auth', AuthRoute)
// app.use('/user', userRoute)
// app.use('/message', MessageRoute)
// app.use('/chat', ChatRoute)