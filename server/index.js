import express from 'express';
import bodyParser from "body-parser";
import { GoogleApis } from 'googleapis';
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
//client\build\index.html
app.use(cors());

// {
//     origin: "http://localhost:3000"
// }

// const { google } = require('googleapis');
// const { readFileSync } = require('fs');
// const nodemailer = require('nodemailer');


// // Path to your service account key file
// const KEYFILEPATH = path.join(__dirname, 'your-service-account-key.json');

// // Gmail API Scopes
// const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// // Load the service account key file
// const credentials = JSON.parse(readFileSync(KEYFILEPATH));

// // Create an OAuth2 client with the service account
// const auth = new google.auth.GoogleAuth({
//   credentials,
//   scopes: SCOPES,
// });

// // Async function to send an email
// async function sendEmail() {
//   const authClient = await auth.getClient();
//   const gmail = google.gmail({ version: 'v1', auth: authClient });

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient-email@gmail.com',
//     subject: 'Test Email',
//     text: 'Hello, this is a test email!',
//   };

//   // Set up Nodemailer to send the email
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       type: 'OAuth2',
//       user: 'your-email@gmail.com',
//       clientId: credentials.client_id,
//       clientSecret: credentials.client_secret,
//       refreshToken: 'your-refresh-token', // Can use a stored token or skip with service account
//     },
//   });

//   try {
//     const result = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', result);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// }

// // Call the function to send an email
// sendEmail();



 app.get("/callback", (req, res)=>{
    res.redirect("http://localhost:3000/contact")
 })

// app.get("*", (req,res)=> {
//     //res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
// });

app.post("/", (req, res)=>{
    
 const {Name, Email, Subject, Text} = req.body;
 console.log(Name,Email, Subject, Text);
 //res.redirect("http://localhost:3000/contact")
 res.json({ success: true });
 
});




app.listen(port, (req, res)=> {console.log(`app is listenon port ${port}`);
})