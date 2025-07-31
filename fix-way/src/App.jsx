import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/Home/HomePage'
import Header from './layout/header/Header';
import About from './pages/About/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default App
