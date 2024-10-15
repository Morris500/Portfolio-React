import "./contact.css";
import React, {useState} from 'react';
import axios from "axios";
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
  
  //console.log(handelChange);

  async function submit(event) {
    try {
      const url = "http://localhost:4000/contact";
      event.preventDefault();
      const data = await axios.post(url, handelChange);
       console.log(data);
       
    //   fetch(url, {
    //     method: 'POST', 
    //   headers:{'content-Type': 'application/json'},
    //   body: JSON.stringify(handelChange)
    // })
      
      alert('message sent');
    } catch (error) {
      alert(`unable to send at the moment please try again ${error}`)
    }
    
  }
  return (
    <div className="form">
        <form >
            <input type="text" name="Name" value={handelChange.Name} onChange={detail} placeholder="Enter Your Name" />
            <input type="text" name="Email" value={handelChange.Email} onChange={detail} placeholder="Enter Your Email" />
            <input type="text" name="Subject" value={handelChange.Subject} onChange={detail} placeholder="Subject" />
            <textarea rows={6} name="Text" value={handelChange.Text} onChange={detail} placeholder="Type your message"></textarea>
            <button type="submit" onClick={submit} className="btnws">Submit</button>
        </form>
    </div>
  )
}

export default Form