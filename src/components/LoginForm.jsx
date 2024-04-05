 import React, { useState } from 'react'
 import axios from 'axios';
 
 const LoginForm = () => {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const authObject={"Project-ID":"639f4f9e-1806-445a-b60c-70c729a33473",'User-Name':userName,'User-Secret':password};
        try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',userName);
            localStorage.setItem('password',password);
            window.location.reload();

        }
        catch(error){
            setError("Oops, incorrect credentials.")

        }

    }

   return (
     <div className='wrapper'>
        <div className='form'>
            <h1 className='title'> Chat Application </h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className='input' placeholder='UserName' required />
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password' required/>
                 <div align="center">
                    <button type='submit' className='button'>
                        <span>Start Chatting </span>
                    </button>

                 </div>
                 <h2 className='error'>{error}</h2>

            </form>
            
            </div> 
       
     </div>
   )
 }
 
 export default LoginForm
 