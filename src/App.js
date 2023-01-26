import Home from './Home';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{ useEffect } from 'react';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useStateValue } from './StateProvider';

const promise=loadStripe("pk_test_51MSvfsSI106sUGXsfHmLplp5b3XGZumX8pUzfhg9aylaMNHs5ztBe3kfVQoEmGA0QCDxb0pFb9lKml0UtMKozmIq00VzgGXT9v");

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
          auth.onAuthStateChanged(authUser=>{
              console.log('The User is>>>',authUser);
              if(authUser){
                dispatch({
                  type:'SET_USER',
                  user:authUser
                })
              }
              else{
                dispatch({
                  type:'SET_USER',
                  user:null
                })
              }
            })
  },[])
  return (
<Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path = "/login" element={<Login />} />
          <Route path='/payment' element={[<Header/>,
            <Elements stripe={promise}>
                <Payment />
            </Elements>
          ]}/>
         
        </Routes>
      </div>
    </Router>
  )
}

export default App;
