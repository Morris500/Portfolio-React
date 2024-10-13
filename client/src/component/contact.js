import "./contact.css";
import React from 'react';
//import { GoogleApis } from "googleapis";

const a = process.env.REACT_APP_SECRET;
console.log(a);



const Form = () => {
  return (
    <div className="form">
        <form>
            <input type="text" name="Name" placeholder="Enter Your Name" />
            <input type="text" name="Email" placeholder="Enter Your Email" />
            <input type="text" name="Subject" placeholder="Subject" />
            <textarea rows={6} name="Text" placeholder="Type your message"></textarea>
            <button type="submit" className="btnws">Submit</button>
        </form>
    </div>
  )
}

export default Form