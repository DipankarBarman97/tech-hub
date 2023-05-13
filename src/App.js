import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Services from './Components/Services.jsx'
import Footer from './Components/Footer.jsx'

import './Styles/App.scss'
import './Styles/header.scss'
import './Styles/home.scss'
import './Styles/contact.scss'
import './Styles/footer.scss'
import './Styles/mediaquery.scss'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
