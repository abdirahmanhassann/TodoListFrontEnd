import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
    let [signUp, setSignUp] =useState({
        username:'',
        name:'',
        password:''
    })
        useEffect(() => {
            window. scrollTo({ top: 0, left: 0});
        }, []);

    function handleChangeFunction(e) {
        setSignUp((i) => {
            return {
                ...i,
                [e.target.name] : [e.target.value]
            }
        }
        )
        console.log(signUp)
    }
    function submit() {
        error('submitted'); 
    }
    return (
        <>
        <div className='main-top-div'>
            <h1>Welcome to the Todo List App FAO Russ</h1>
        <div className='main-centre-div'>
            <form>
                <h3>Login</h3>
                <Input color='secondary' className='input' placeholder='Username' name='username' onChange={(e) => handleChangeFunction(e)} />
                <Input color='secondary' className='input' placeholder='name' name='name' onChange={(e) => handleChangeFunction(e)} />
                <Input color='primary' placeholder='input' className='password' name='password' onChange={(e) => handleChangeFunction(e)} />
                <button className='submit-button' onClick={submit}>Submit</button>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px',gap:'5px'}}>
                    <p style={{fontWeight:'100'}}>Already have an account?</p>
                    <Link className='link' to={'/'}>Sign in here</Link>
                    </div>
                
            </form>
        </div>
        </div>
        </>
    )
};

export default SignUp