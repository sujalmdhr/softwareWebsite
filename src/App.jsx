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
import Setting from './Pages/Setting';
import User from './Pages/User';
import ProgressBar from './Components/ProgressBar';
import Menu from './Pages/Menu';
import { Provider } from 'react-redux'
import store from './app/store.js'



function App() {
  return (
    <>
    
    
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/adminPanel' element={<AdminPanel/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/progressBar' element={<ProgressBar/>}/>
        <Route path='/menu' element={<Menu/>}/>
        
        </Routes>
        
        </BrowserRouter>
     
       
        </>
  );
}

export default App;
