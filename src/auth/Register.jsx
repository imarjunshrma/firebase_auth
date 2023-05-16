import React, { useState,useEffect } from 'react'
import auth from '../config/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';

const Firebase = () => {
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
  createUserWithEmailAndPassword(auth,email,password)
  .then(res=>{
    const user=res.user;
    console.log(user)
    localStorage.setItem("token",user.accessToken)
    navigate("/")
    // you can set name and phonenumber of user
    // user.displayName="arjun"
    // user.phoneNumber=phonenumber
  })
  .catch(err=> toast(err))
  .finally(_=>{
    setIsButtonLoading(false)
    setEmail("")
    setPassword("")
  })
}

  return (
    <>
    <h1>Register page</h1>
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
    </form>
    </>
  )
}

export default Firebase