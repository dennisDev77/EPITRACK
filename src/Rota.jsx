import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

//import the components
import Login from './pages/Login/LoginForm'
import Sign_Up from './pages/Login/Sign_Up'
import Home from './pages/Home/Home'

export default function Rota(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/signup' element={<Sign_Up/>}/>
            </Routes>
         </BrowserRouter> 
        </>
    )
}