import React, { useState } from 'react';
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const navigate=useNavigate()



  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
   
    try {
      const respond=await axios.get("http://localhost:3000/users",{
        params:{
          email:email
      
        }

      })

      // console.log(respond.data)
      const user=respond.data[0]
      console.log(user)
      if (email===user.email && password===user.password){
        alert("User Logged In")
        
        navigate("/")
      }
      else{
        alert("Invaild Email or Password")
      }
    } catch (error) {
      console.log(error)
      
    }
    // Handle form submission logic here
  };

  return (
    <>
      <div className='gradientBg2 h-screen flex justify-center items-center'>
        <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-96 pl-7 w-[400px] flex flex-col justify-center'>
          <form onSubmit={handleSubmit} className='space-y-1'>
            <div>
              <p className='font-semibold text-2xl tracking-white'>LOGIN</p>
            </div>
            <div className="mr-5">
              <p className='text-zinc-600 font-semibold'>Email :</p>
              <input onChange={(e)=>setEmail(e.target.value)}
              value={email}
                className='outline-none h-10 border border-sm w-full px-5'
                type="text"
                name="email"
                placeholder='Email'
                required
              />
            </div>
            <div className='mr-5'>
              <p className='text-zinc-600 font-semibold'>Password :</p>
              <input  onChange={(e)=>setPassword(e.target.value)}
              value={password}
                className='outline-none h-10 border border-sm w-full px-5'
                type="password"
                name="password"
                placeholder='Password'
                required
              />
            </div>
            <div className='flex gap-5 mt-1'>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember me?</label>
            </div>
            <div className='mr-5'>
              <button
                type="submit"
                className='bg-blue-400 text-white h-8 hover:bg-blue-600 duration-300 rounded-full w-full font-semibold'
              >
                LOGIN
              </button>
              <p className='text-end '>Forgot Password?</p>
            </div>
            <p className='flex justify-center font-semibold'>OR</p>
            <div className='flex flex-row justify-center gap-10 text-3xl' >
              <AiFillFacebook className='rounded-full text-blue-600'/>
              <AiFillGoogleCircle className='rounded-full text-red-600'/>
              <AiFillLinkedin className='rounded-full text-blue-800'/>
            </div>
            <div>
              <p className='text-zinc-500 mt-2'>Need an Account? <span className='text-black font-bold underline underline-offset-4 pl-2 '><Link to="/SignUp">SignUp</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
