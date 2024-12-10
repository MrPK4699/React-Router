import React from 'react'
import {useState} from 'react'

const Contact = () => {
      const [user,setUser] = useState({
            name:"",
            email:"",
            phone:"",
            message:"",
      });


      const handleSubmit = ()=>{
            
      }

      const handleChange = (e)=>{
            e.preventDefault();
            let obj = {
                  [e.target.name] : e.target.value,
            }
            setUser({...user, ...obj});
            console.log(user);
      }
      // console.log(user);
      return (
      <div>
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' name= "name" onChange={handleChange} placeholder='Enter Name'/>
            <label>E-mail:</label>
            <input type='email' name= "email" onChange={handleChange} placeholder='Enter Email'/>
            <label>Phone:</label>
            <input type='number' name= "phone" onChange={handleChange} placeholder='Enter Phone'/>
            <label>Message:</label>
            <input type='text'name= "message" onChange={handleChange} placeholder='Enter Message'/>
            <button type='submit'>Submit</button>
            </form>
      </div>
  )
}

export default Contact