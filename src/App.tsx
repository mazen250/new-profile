import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Works from './pages/Works/Works'

function App() {

  return (
    <div className="App">
      <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works />} />
        </Routes>
     
    </div>
  )
}

export default App
