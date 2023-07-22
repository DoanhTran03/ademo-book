import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Authentication from './components/Authentication'
import './App.css'
import New from './components/New'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/Router'

function App() {

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
