import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate=useNavigate()
const [user,setUser]=useState({
    username:"",
    password:"",
    Cpassword:""
})
let name,value
const handerinput=(e)=>{
console.log(e)
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value})
}
const postdata=async (e)=>{
e.preventDefault()
const {username,password,Cpassword}=user
    const res=await fetch("http://localhost:5000/register",{
        method:"POST",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    ,
        body:JSON.stringify({
           username,
           password,
           Cpassword
        })

    })
    const data=await res.json();
    if(data.status===422){
        window.alert("Registration unsuccessful")
        console.log("Registration unsuccessful")
    }else{
        window.alert("Registration successful")
        console.log("Registration successful")
        navigate("/login")
    }
}


  return (
    <div>
        <div className='heading'>Register</div>

        <form className='register' method='POST'>
             <div className='form-body'>
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" id='username'
                 value={user.username}
                 onChange={handerinput}/>
             </div>

             <div className='form-body'>
                <label htmlFor='password'>Password</label>
                <input type="text" name="password" id='password'
                value={user.password}
                onChange={handerinput}/>
             </div>

             <div className='form-body'>
                <label htmlFor='Cpassword'>Confirm Password</label>
                <input type="text" name="Cpassword" id='Cpassword'
                value={user.Cpassword}
                onChange={handerinput}/>
             </div>

             <div className='register'>
                <input type="submit" id='signup' value="register"
                onClick={postdata} />
                
                </div>
        </form>
    </div>
  )
}

export default Signup