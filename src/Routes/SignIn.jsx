/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import '../App.css'
import { Input } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
//import { Button } from '../../node_modules/@mui/material/index';
function SignIn() {
    let [signIn, setsignIn] = useState({
        username:'',
        password:''
    })

    useEffect(() => {
        window. scrollTo({ top: 0, left: 0});
    }, []);

    function handleChangeFunction(e) {
        setsignIn((i) => {
            return {
                ...i,
                [e.target.name] : [e.target.value]
            }
        }
        )
        console.log(signIn)
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
                <h3>signIn</h3>
                <Input color='secondary' className='input' placeholder='Username' name='username' onChange={(e) => handleChangeFunction(e)} />
                <Input color='primary'  className='input' placeholder='Password' name='password' onChange={(e) => handleChangeFunction(e)} />
                <button className='submit-button' onClick={submit}>Submit</button>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px',gap:'5px'}}>
                    <p style={{fontWeight:'100'}}>Don't have an account?</p>
                    <Link className='link' to={'/signup'}>Sign up here</Link>
                    </div>
                
            </form>
        </div>
        </div>
        </>
    )
}

export default SignIn;