import React, { useState,useEffect, useContext } from 'react'
import auth from '../config/firebase'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isButtonLoading,setIsButtonLoading]=useState(false)
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    useEffect(() => {
      if (token) {
        navigate("/")
      }
    }, [token]);
  const onSubmit=(e)=>{
    e.preventDefault()
    setIsButtonLoading(true)
    signInWithEmailAndPassword(auth,email,password)
    .then(res=>{
        const user=res.user
        // console.log(user)
        const token=user.accessToken
        localStorage.setItem("token",user.accessToken)
        // console.log(res)
    setEmail("")
    navigate("/")
    })
    .catch(err=> toast("invalid credentials"))
    .finally(_=>{
      setIsButtonLoading(false)
      setPassword("")
    })
  }


  return (
    <>
    <h1>Login Component</h1>
     <ToastContainer />
    <form onSubmit={onSubmit}>
    <div className="email">
     <label htmlFor="">Email</label>
     <input type="email" name="" id="" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="password">
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button type="submit">
      {
        isButtonLoading?<ClipLoader color="#36d7b7" />:" Submit form"
      }
      </button>
      <p>already login <span onClick={()=>navigate('/register')}>register</span></p>
</form>
</>
  )
}

export default Login