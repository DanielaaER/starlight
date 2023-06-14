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
import Sell from "./components/sell/Sell"
import Products from "./components/products/products"
import PaymentMethod from "./components/paymentMethod/PaymentMethod"
import CheckOut from "./components/checkout/checkout"

import WishList from "./common/wishlist/Wishlist"

import ProductDetail from "./components/product/product"
import TrackingComponent from "./components/tracking/tracking"
import PedidoRealizado from "./components/finishOrder/finishOrfder"


function App() {



  return (
    <>
      {/* {
      (localStorage.getItem("token")) ? (
          <Router>
          <Header CartItem />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/account' element={<Account />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/account' element={<Account />} />
            <Route path='/sell' element={<Sell />} />
            <Route path='/products' element={<Products />} />
            <Route path='/payment-method' element={<PaymentMethod />} />

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
            <Route path='/products' element={<Products />} />
          </Routes>
          <Footer />
        </Router>
        )
      }  */}
      <Router>
        <Header CartItem />
        <Routes>
        {/*   <Route path='/' /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/verify' element={<Verify />} />
          <Route path='/verifyMail' element={<VerifyMail />} />
          <Route path='/verifyCode' element={<VerifyCode />} />
          <Route path='/forgot' element={<Forgot />} />

          
          <Route path='/' element={<Home />}/>
            <Route path='/sell' element={<Sell />} />
            <Route path='/products' element={<Products />} />
            <Route path='/payment-method' element={<PaymentMethod />} />
            <Route path='/checkOut' element={<CheckOut />} />

          <Route path='/forgot' element={<Forgot />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/tracking" element={<TrackingComponent />} />

            <Route path='/favorrites' element={<WishList />} />
          <Route path='/finishOrder' element={<PedidoRealizado />} />


        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
