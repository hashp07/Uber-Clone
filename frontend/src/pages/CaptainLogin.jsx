import React, { useState, useContext } from 'react'
import uberIcon from "../assets/uber-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

function CaptainLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext)

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const captainLoginData = {
      email,
      password
    }

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainLoginData
      )

      const data = response.data

      localStorage.setItem("token", data.token)

      setCaptain(data.captain)

      navigate("/captain-home")

    } catch (error) {

      console.log("Login error:", error.response?.data)

      alert("Invalid email or password")

    }
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>

      <div>

        <img
          src={uberIcon}
          alt="Uber Logo"
          className="w-16 mb-10"
        />

        <form onSubmit={submitHandler}>

          <h3 className='text-lg font-medium mb-2'>What's your Email</h3>

          <input
            required
            value={email}
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='Email'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'
            type='submit'
          >
            Login
          </button>

          <p className='text-center'>
            Want to join a fleet ?
            <Link className="text-blue-600" to='/captain-signup'>
              Register as a captain
            </Link>
          </p>

        </form>

      </div>

      <div>
        <Link to='/login'>
          <button className='bg-[#f3b200] flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg'>
            Sign in as User
          </button>
        </Link>
      </div>

    </div>
  )
}

export default CaptainLogin