import React, { useState, useEffect } from "react"
import "./App.css"
import { gql, useQuery } from "@apollo/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Cart from "./common/Cart/Cart"
import Account from "./common/Account/Account"
import Footer from "./common/footer/Footer"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Verify from "./components/login/verify"
import Forgot from "./components/login/forgot"
import VerifyCode from "./components/login/verifyCode"
import VerifyMail from "./components/login/verifyMail"
import Home from "./components/home/home"




function App() {

  

  return (
    <>
      {
      (false) ? (
          <Router>
          <Header CartItem />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/account' element={<Account />} />
            <Route path='/verify' element={<Verify />} />
          </Routes>
          <Footer />
        </Router>
  
        ) : (
        <Router>
          <Header CartItem />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/verifyMail' element={<VerifyMail />} />
            <Route path='/verifyCode' element={<VerifyCode />} />
            <Route path='/forgot' element={<Forgot />} />
          </Routes>
          <Footer />
        </Router>
        )
      } 
{/*       <Router>
        <Header CartItem />
        <Routes>
          <Route path='/' />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/verifyMail' element={<VerifyMail />} />
          <Route path='/verifyCode' element={<VerifyCode />} />
          <Route path='/forgot' element={<Forgot />} />
        </Routes>
        <Footer />
      </Router> */}
    </>
  )
}

export default App
