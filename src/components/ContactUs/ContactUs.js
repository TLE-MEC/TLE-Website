import React, { useState } from 'react'
import { IoIosPaperPlane } from "react-icons/io";
import isEmail from 'validator/lib/isEmail';

import './ContactUs.css'

import contacts_abstract from '../../assets/png/abstract.png'

function ContactUs() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [msgErr, setMsgErr] = useState('')


  const clearFields = () => {
    setName('')
    setEmail('')
    setMsg('')
    setNameErr('')
    setEmailErr('')
    setMsgErr('')
  }

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name) {
        if(email) {
          if (isEmail(email)) {
            const responseData = {
                name: name,
                email: email,
                msg: msg,
            };

            console.log(responseData)

            clearFields()

        } else {
            setEmailErr('Invalid email address')
        }
          if (msg) {

        } else {
          setMsgErr('Message cannot be blank');
        }
      } else {
        setEmailErr('Email cannot be blank');
      }
    } else {
      setNameErr('Name cannot be blank');
    }
};

  return (
    <div className='contactUs' id='contact'>
        <div className='contactUs__container'>
            <div className='contactUs__left'>
              <form className='contactUs__form' onSubmit={handleContactForm}>
                <h1>Get in Touch</h1>
                <div className='contact_form_div'>
                  <label className='contact_form_label'>Name</label>
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="contact_form_input" />
                  <p className='contact_form_error'>{nameErr}</p>
                </div>
                <div className='contact_form_div'>
                  <label className='contact_form_label'>Email</label>
                  <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className="contact_form_input" />
                  <p className='contact_form_error'>{emailErr}</p>
                </div>
                <div className='contact_form_div'>
                  <label className='contact_form_label'>Message</label>
                  <textarea type='text' value={msg} onChange={(e) => setMsg(e.target.value)} className="contact_form_input textarea" />
                  <p className='contact_form_error'>{msgErr}</p>
                </div>

                <button type='submit' className='contact_form_btn'>
                  Send 
                  <IoIosPaperPlane size={20}/>
                </button>
              </form>
            </div>
            <div className='contactUs__right'>
              <img src={contacts_abstract} className='contacts_abstract' alt='' />

            </div>
        </div>
    </div>
  )
}

export default ContactUs