import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import WhatsApp from './components/WhatsApp'
import { pageview } from './gtag'

function RouteChangeTracker(){
  const location = useLocation()
  React.useEffect(() => {
    // send page path to Google Tag on route change (safe — no-op if gtag missing)
    pageview(location.pathname + location.search)
  }, [location])
  return null
}

export default function App(){
  return (
    <Box minH="100vh" display="flex" flexDir="column">
      <Header />
      <RouteChangeTracker />
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
