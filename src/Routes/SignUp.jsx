import { CircularProgress, Input } from '@mui/material';
import { userInfo } from 'os';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
    let [signUpError,setSignUpError]= useState(false);
    let [passwordError,setPasswordError]= useState(false);
    let [loading, setLoading]=useState(false)
    let navigate=useNavigate();
    let [signUp, setSignUp] =useState({
        username:'',
        name:'',
        password:'',
        rePassword:''
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
    }
    function submit(e) {
        e.preventDefault();
        console.log(signUp.password[0],signUp.rePassword[0])
        setPasswordError(false)
        if(signUp.password[0]!==signUp.rePassword[0]){
            setPasswordError(true)
        }
        else{
            setLoading(true);
            //   setTimeout(()=>{
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name:signUp.name[0], 
                        rePassword:signUp.rePassword[0],
                         userName:signUp.username[0], 
                         password:signUp.password[0] })
                };
                fetch(`${import.meta.env.VITE_API_URL}/CreateNewUser`,requestOptions)
                    .then(res=>res.json())
                    .then(res=>{
                        if(!res){
                            setSignUpError(true)
                        }
                        else{
                            setSignUpError(false)
                            localStorage.setItem('user', JSON.stringify(res));
                            navigate('../')
                        }
                    }
                    )
                    .catch(e=>{
                        setLoading(false);
                    })
                    setLoading(false);
                }
            }
    return (
        <>
        <div className='main-top-div'>
            <h1>Welcome to the Todo List App</h1>
        <div className='main-centre-div'>
            <form onsubmit="return false;">
                <h3>Sign up</h3>
                <Input color='secondary' required={true} className='input' placeholder='Username' name='username' onChange={(e) => handleChangeFunction(e)} />
                <Input color='secondary' required={true} className='input' placeholder='Name' name='name' onChange={(e) => handleChangeFunction(e)} />
                <Input color='primary' required={true} type='password' placeholder='Password' name='password' onChange={(e) => handleChangeFunction(e)} />
                <Input color='primary' required={true} type='password' placeholder='Re-Enter Password' name='rePassword' onChange={(e) => handleChangeFunction(e)} />
                <button className='submit-button' type='submit' onClick={submit}>
                    {
                        loading?
                    <CircularProgress size={20}/>
                    :
                    'Submit'
                }
                </button>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px',gap:'5px'}}>
                    <p style={{fontWeight:'100'}}>Already have an account?</p>
                    <Link className='link' to={'/'}>Sign in here</Link>
                    </div>
                
            </form>
        </div>
        {
                        signUpError &&
                        <p style={{color:'red'}}>Username already in use</p>
                    }
        {
                        passwordError &&
                        <p style={{color:'red'}}>Passwords do not match</p>
                    }
        </div>
        </>
    )
};

export default SignUp