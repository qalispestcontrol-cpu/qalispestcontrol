import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import WhatsApp from './components/WhatsApp'

export default function App(){
  return (
    <Box minH="100vh" display="flex" flexDir="column">
      <Header />
      <Box as="main" flex="1" py={8} px={4}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/quote" element={<Quote/>} />
        </Routes>
      </Box>
      <Footer />
      <WhatsApp />
    </Box>
  )
}
