import React from 'react'
import MiniNavbar from './components/layout/MiniNavbar'
import Navbar from './components/layout/Navbar'
import MainContainer from './components/MainContainer'
import { ServiciosProvider } from './context/ServiciosProvider'

const App = () => {
  return (
    <ServiciosProvider>
      <Navbar />

      <div className='container '>
        <MiniNavbar />
        <div className='mt-3'>
          <MainContainer />
        </div>

      </div>
    </ServiciosProvider>
  )
}

export default App