import React, { use } from 'react'
import { useState } from 'react'
import uberIcon from "../assets/uber-logo.png";
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const {user , setUser} = useContext(UserDataContext);

  const submitHandler = async (e) =>{
    e.preventDefault();
    
    const userData = {
      email : email,
      password : password
    }
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData)

        if(response.status === 200){
          const data = response.data;
          setUser(data.user);
          localStorage.setItem("token", data.token);
          navigate("/home");
        }
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between'>
       <div>
        <img
              src={uberIcon}
              alt="Uber Logo"
              className="w-16 mb-10 "
            />
      <form onSubmit={(e)=>{
        submitHandler(e);
        
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
        <input 
        required 
        value={email}
        type="email" 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        placeholder='Email tak' 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'/>



        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        type="password" 
        placeholder='Password' 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'/>

        <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' type='submit'>Login</button>

        <p className='text-center'>New here ?<Link className = "text-blue-600" to='/signup'>Create new Account</Link></p>
      </form>
       </div>

       <div className='mt-48'>
        <Link to='/captain-login'>
          <button className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' type='submit'>Sign in as Captain</button>
        </Link>
       </div>
    </div>
    
  )
}

export default UserLogin