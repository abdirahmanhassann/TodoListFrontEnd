import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import Tasks from './Routes/Tasks';
import { createContext, useEffect, useState } from 'react';
function App() {
    const [isSignedIn,setIsSignedIn]=useState(false)
    useEffect(()=>{
    if(localStorage.getItem('user'))
    {
        setIsSignedIn(true)
    }
    else{
        setIsSignedIn(false)
    }
    },[])
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                isSignedIn?
                <Tasks/>
                :
                <SignIn/>                
                } />
              <Route path="/signup" element={<SignUp/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;