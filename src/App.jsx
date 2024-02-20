import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import About from "./Components/About";
import Features from "./Components/Features";
import Footer from './Components/Footer';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Pricing from './Components/Pricing';
import SignUp from './Components/SignUp';
import HomePage from './Pages/HomePage';
import Login from './Components/Login';

import AdminPanel from './Components/AdminPanel';
import Profile from './Pages/User';
import Setting from './Pages/Setting';
import User from './Pages/User';
import ProgressBar from './Components/ProgressBar';



function App() {
  return (
    <>
    

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/adminPanel' element={<AdminPanel/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/ProgressBar' element={<ProgressBar/>}/>
        
        </Routes>
        
        </BrowserRouter>
       
        </>
  );
}

export default App;
