import express from 'express';
import bodyparser from "body-parser";
import { GoogleApis } from 'googleapis';

const app = express();
const port = 3000;

app.post("/contact", (req, res)=>{

});




app.listen(port, (req, res)=> {console.log(`app is listenon port ${port}`);
})