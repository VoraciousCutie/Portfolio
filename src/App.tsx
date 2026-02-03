

// Import site parts
import './App.css'
import ModalConsent from './components/ModalConsent'
import Navbar from './components/Navbar'

// Import pages
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Extra from './pages/Extra'

function App() {

  return (
    <>
      <ModalConsent/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </>
  )
}

export default App
