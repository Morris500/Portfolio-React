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
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.urlencoded({extended:true}))
//client\build\index.html
app.use(cors({
         origin: "http://localhost:3000"
     }));
// {
//     origin: "http://localhost:3000"
// }
 app.get("/", (req, res)=>{
res.send("helloe world")
 })

app.get("*", (req,res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

app.post("/contact", (req, res)=>{
 const {Name, Email, Subject, Text} = req.body;
 console.log(Name, Email);
 //res.redirect("http://localhost:3000/contact")
 
});




app.listen(port, (req, res)=> {console.log(`app is listenon port ${port}`);
})