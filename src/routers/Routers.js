import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Pricing from '../pages/Pricing'
import Features from '../pages/Features'
import Solutions from '../pages/Solutions'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='pricing' element={<Pricing/>} />
            <Route path='features' element={<Features/>} />
            <Route path='solutions' element={<Solutions/>} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
        </Routes>
    );
}

export default Routers