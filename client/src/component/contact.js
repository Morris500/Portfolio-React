import "./contact.css";
import React, {useState} from 'react';
import axios from "axios";
//import { GoogleApis } from "googleapis";
import emailjs from '@emailjs/browser';
const a = process.env.REACT_APP_SECRET;
console.log(a);


const Form = () => {


    const form = useRef();
  
    function submit(e) {
    
      e.preventDefault();
  
      emailjs.sendForm('process.env.REACT_APP_SERVICE_ID', 'process.env.REACT_APP_TEMPLATE_ID', form.current, {
          publicKey: 'process.env.REACT_APP_PUBLIC_KEY',
        })
        .then(
          (data) => {
            console.log(data);
            alert('message sent');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    
//   const [handelChange, sethandelchange] = useState({
//     Name: "", Email:"", Subject:"", Text:""
//   });
//   function detail(event){
// const {name, value} = event.target;
// sethandelchange((prevalue)=>{
// return({...prevalue, [name]: value})
// })

  };
  
  


  // async function submit(event) {
  //   try {
  //     event.preventDefault();
  //     const data = await axios({
  //       method:"POST",
  //       url:  "http://localhost:4000", 
  //       data: handelChange,
  //        headers:{"content-Type":"application/json"},
  //         timeout: 100000, 
  //       });
  //      console.log(data);
       
   
  //     alert('message sent');
  //   } catch (error) {
  //     alert(`unable to send at the moment please try again ${error}`)
  //   }
    
  // }
  
  return (
    <div className="form">
        <form ref={form} onSubmit={submit} >
            <input type="text" name="from_name" value={handelChange.Name} onChange={detail} placeholder="Enter Your Name" required />
            <input type="text" name="from_email" value={handelChange.Email} onChange={detail} placeholder="Enter Your Email" required />
            <input type="text" name="from_subject" value={handelChange.Subject} onChange={detail} placeholder="Subject"  />
            <textarea rows={6} name="message" value={handelChange.Text} onChange={detail} placeholder="Type your message" required></textarea>
            <input type="submit" className="btn" value="Send" />
        </form>
    </div>
  )
}

export default Form