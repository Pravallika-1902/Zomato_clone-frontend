import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from  './pages/Login'
import Register from './pages/Register'
import Payment from './pages/Payment'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <Register />
      <Payment />
    </div>
  )
}

export default App