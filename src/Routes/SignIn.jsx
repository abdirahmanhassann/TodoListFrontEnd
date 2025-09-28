/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import '../App.css'
import { CircularProgress, Input } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { meta } from '@eslint/js';
//import { Button } from '../../node_modules/@mui/material/index';
function SignIn() {
    let [signIn, setsignIn] = useState({
        username:'',
        password:''
    })
    let [loginError,setLoginError]= useState(false);
    let [loading, setLoading]=useState(false)
    let navigate=useNavigate();
    useEffect(() => {
        window. scrollTo({ top: 0, left: 0});
    }, []);

    function handleChangeFunction(e) {
        setsignIn((i) => {
            return {
                ...i,
                [e.target.name] : e.target.value
            }
        }
        )
        console.log(signIn)
    }
    function submit(e) {
        e.preventDefault()
        setLoading(true);
     //   setTimeout(()=>{
            console.log(signIn.username,signIn.password)
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:'', rePassword:'', userName:signIn.username, password:signIn.password})
        };
        fetch(`${import.meta.env.VITE_API_URL}/Login`,requestOptions)
            .then(res=>res.json())
            .then(res=>{
                if(!res.ID){
                setLoginError(true)
                console.log('login details:',res)
                }
                else{
                    console.log('login details:',res)
                    setLoginError(false)
                    localStorage.setItem('user', JSON.stringify(res));
                    location.reload()
                }
            }
            )
            .catch(e=>{
                console.log('This is the error: ',e)
            })
            setLoading(false);
        
   // },4000)
}

    return (
        <>
        <div className='main-top-div'>
            <h1>Welcome to the Todo List App</h1>
        <div className='main-centre-div'>
            <form>
                <h3>signIn</h3>
                <Input color='secondary'  required={true} className='input' placeholder='Username' name='username' onChange={(e) => handleChangeFunction(e)} />
                <Input color='primary' required={true} className='input' type='password' placeholder='Password' name='password' onChange={(e) => handleChangeFunction(e)} />
                <button className='submit-button' type='submit' onClick={submit}>
                    {
                        loading?
                    <CircularProgress size={20}/>
                    :
                    'Submit'
                }
                </button>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px',gap:'5px'}}>
                    <p style={{fontWeight:'100'}}>Don't have an account?</p>
                    <Link className='link' to={'/signup'}>Sign up here</Link>
                    </div>
            </form>
        </div>
                    {
                        loginError &&
                        <p style={{color:'red'}}>Wrong credentials, please login with the correct credentials</p>
                    }
        </div>
        </>
    )
}

export default SignIn;