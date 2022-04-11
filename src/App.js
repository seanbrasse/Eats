import React from 'react'
import './App.css'
import './components/Navbar/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Previous from './pages/Previous'
import Spending from './pages/Spending'
import Navbar from './components/Navbar/Navbar'
import Search from './pages/Search'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/previous" element={<Previous />} />
          <Route path="/spending" element={<Spending />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
