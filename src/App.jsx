import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import User from './Components/User/User';
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/:id' element={<User/>}/>
      </Routes>
    </>
  )
}

export default App;
