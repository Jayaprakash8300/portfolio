import './form.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ufgfpxm', 'template_uxmhqns', form.current, 'Pxv2gTsshPyGsyIv4')
        .then((result) => {
            console.log(result.text);
            console.log("Message send");
        }, (error) => {
            console.log(error.text);
        });
    };
        const notify = () => toast("Message Send");
  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Message</label>
            <textarea row="6" placeholder='Type youe message here' name="message" />
            <input className='btn' type="submit" value="Send" onClick={notify} />
            <ToastContainer />
        </form>
    </div>
  )
}

export default Form
