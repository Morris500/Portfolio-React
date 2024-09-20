import "./contact.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows={6} placeholder="Type your message"></textarea>
            <button type="submit" className="btnws">Submit</button>
        </form>
    </div>
  )
}

export default Form