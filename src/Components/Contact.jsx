// import React, {useState} from 'react'

// import emailjs from '@emailjs/browser'

// const Contact = () => {
//       const [user,setUser] = useState({
//             name:"",
//             email:"",
//             message:"",
//       });

//       console.log(import.meta.env.VITE_TEMPLATE_ID);
//       console.log(import.meta.env.VITE_SERVICE_ID);
//       console.log(import.meta.env.VITE_PUBLIC_KEY);

//       const handleSubmit = (e)=>{
//             e.preventDefault();
//             emailjs.
//             send(
//                   import.meta.env.VITE_SERVICE_ID,
//                   import.meta.env.VITE_TEMPLATE_ID,
//                   {
//                         to_name : user.name,
//                         to_email : user.email,
//                         message: user.message
//                   },
//                   import.meta.env.VITE_PUBLIC_KEY
//             )
//             .then((result) => {
//                   console.log('Email sent successfully:', result.text);
//             })
//             .catch((error) => {
//                   console.error('Error sending email:', error.text);
//             });

//             console.log(user);
//       }

//       const handleChange = (e)=>{
//             e.preventDefault();
//             setUser((prev)=>({...prev, [e.target.name] : e.target.value}));
//             console.log(user);
//       }

//       return (
//       <div>
//             <h1>Contact Page</h1>
//             <form onSubmit={handleSubmit}>
//                   <label>Name:</label>
//                   <input type='text' name= "name" onChange={handleChange} value={user.name} placeholder='Enter Name'/>
//                   <label>E-mail:</label>
//                   <input type='email' name= "email" onChange={handleChange} value={user.email} placeholder='Enter Email'/>
//                   <label>Message:</label>
//                   <textarea type='text'name= "message" onChange={handleChange} value={user.message} placeholder='Enter Message'/>
//                   <button type='submit'>Submit</button>
//             </form>
//       </div>
//   )
// }

// export default Contact

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          to_name: user.name,
          to_email: user.email,
          message: user.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });

    console.log(user);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={user.name}
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="Enter your email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={user.message}
          placeholder="Enter your message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
