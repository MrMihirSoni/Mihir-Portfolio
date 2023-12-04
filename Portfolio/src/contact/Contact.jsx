import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Loading from '../../assets/Loading.gif';

export default function Contact() {
  const form = useRef();
  const [popup, setPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setPopup(true)
    emailjs.sendForm('service_qd5z0sm', 'template_issrx1f', form.current, '0zDzKrX_j_Esh7sdc')
      .then((result) => {
        setPopup(false)
        alert('Email Sent!')
        e.target.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        setPopup(true)
      });
  };

  return (<>
    <div className='loading' style={popup ? { display: 'block' } : { display: 'none' }}>
      <img src={Loading} alt="" />
    </div>
    <div className='contact' id='contact'>
      <h3 className='contactText'>Contact</h3>
      <div >
        <div className='contactDetails'>
          <div className='contactInfo'>
            <i className='bx bxl-linkedin-square'></i>
            <p>Linkedin</p>
            <p>You can contact me on Linkedin</p>
            <p onClick={() => window.open('http://www.linkedin.com/in/mihir-soni-775221261', '_blank')}>Mihir Soni</p>
          </div>
          <div className='contactInfo'>
            <i className='bx bxs-phone'></i>
            <p>Phone</p>
            <p>Here is my Phone Number</p>
            <p onClick={() => navigator.clipboard.writeText(8340504980)}>8340504980</p>
          </div>
          <div className='contactInfo'>
            <i className='bx bxl-gmail' ></i>
            <p>Email</p>
            <p>Here is my Email</p>
            <p onClick={() => navigator.clipboard.writeText('ms6711534@gmail.com')}>ms6711534@gmail.com</p>
          </div>
        </div>
        <div>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name :</label>
              <input placeholder='Your Name' type="text" name="userName" required />
            </div>
            <div>
              <label>Email :</label>
              <input placeholder='Your Email' type="email" name="userEmail" required />
            </div>
            <div>
              <label>Message :</label>
              <textarea name="message" required />
            </div>
            <input style={{
              width: '100%',
              backgroundColor: 'rgb(120, 30, 30)',
              cursor:'pointer'
            }} className='submit' type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  </>
  );
};