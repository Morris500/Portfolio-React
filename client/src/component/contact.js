import "./contact.css";
import React, {useState} from 'react';
//import axios from "axios";
//import { GoogleApis } from "googleapis";
const a = process.env.REACT_APP_SECRET;
console.log(a);


const Form = () => {
  const [handelChange, sethandelchange] = useState({
    Name: "", Email:"", Subject:"", Text:""
  });
  function detail(event){
const {name, value} = event.target;
sethandelchange((prevalue)=>{
return({...prevalue, [name]: value})
})

  };
  
  console.log(handelChange);
  
  async function submit(params) {
    try {
      //axios.post()
    } catch (error) {
      
    }
    
  }
  return (
    <div className="form">
        <form >
            <input type="text" name="Name" onChange={detail} placeholder="Enter Your Name" />
            <input type="text" name="Email" onChange={detail} placeholder="Enter Your Email" />
            <input type="text" name="Subject" onChange={detail} placeholder="Subject" />
            <textarea rows={6} name="Text" onChange={detail} placeholder="Type your message"></textarea>
            <button type="submit" onClick={submit} className="btnws">Submit</button>
        </form>
    </div>
  )
}

export default Form