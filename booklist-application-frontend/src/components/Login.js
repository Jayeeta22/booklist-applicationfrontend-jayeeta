import React from 'react'
import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate=useNavigate()
    const [username,setusetname]=useState("")
    const [password,setpassword]=useState("")

    const loginuser=async(e)=>{

        e.preventDefault()

    const res=await fetch("http://localhost:5000/login",{
        method:"POST",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    ,
        body:JSON.stringify({
           username,
           password
           
        })

    })
    const data=await res.json();
    if(data.status===400 || !data){
        window.alert("login unsuccessful")
        console.log("login unsuccessful")
    }else{
        window.alert("login successful")
        console.log("login successful")
        navigate("/login")
    }
        
        
    }
  return (
    <div>

<div className='heading'>Login Form</div>

<form className='register' method='POST'>
     <div className='form-body'>
        <label htmlFor='username'>Username</label>
        <input type="text" name="username" id='username'
        value={username}
        onChange={(e)=>{
            setusetname(e.target.value)
        }}/>
     </div>

     <div className='form-body'>
        <label htmlFor='password'>Password</label>
        <input type="text" name="password" id='password'
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value)
        }}/>
     </div>

     <div className='register'>
                <input type="submit" id='signup' value="register"
                onClick={loginuser} />
    </div>
     
</form>
</div>
    
  )
}

export default Login