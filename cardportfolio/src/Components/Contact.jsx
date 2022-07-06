import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [isSuccess, setIsSuccess] = useState(false);
  const [sentAlready, setSentAlready] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mi6o48a', 'template_u83yxfd', form.current, 'kHCf_xwtzMenQJggX')
    .then((result) => {
      setIsSuccess(true);
      setSentAlready(true);
    }, (error) => {
      console.log(error.text);
    });
  };

  useEffect(() => {
    if(isSuccess){
      setTimeout(() => {setIsSuccess(false)}, 4000)
    }
  }, [isSuccess])

  return (
    <div className='Content'>
      <div id='ContactForm'>
      <form ref={form} onSubmit={handleSubmit}>
        <h3>Reach out!</h3>
        <p>Shoot me an email -- I'd love to chat all things tech, nerddom, business opportunities and connections!</p>
        <div>
          <input className='formEntry' type='text' name='name' placeholder='Name'/>
        </div>
        <div>
          <input className='formEntry' type='email' name='email' placeholder='Email' />
        </div>
        <div>
          <textarea className='formEntry' type='text' name='message' placeholder='Message' />
        </div>
        <div>
          {isSuccess ?
            <p><b>Thanks for reaching out! I'll be in contact soon.</b></p> 
            : 
            sentAlready ?
              <p><b>Message already submitted. Reload to send a new one :)</b></p>
              :
              <button id='FormSubmit' type='submit'>Submit</button>
          }
        </div>
      </form>
      
      </div>
    </div>
    
  )
}

export default Contact