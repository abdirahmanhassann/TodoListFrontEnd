import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from './Routes/SignIn';
import SignUp from './Routes/Signup';
import Tasks from './Routes/Tasks';
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignIn/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/tasks" element={<Tasks/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;