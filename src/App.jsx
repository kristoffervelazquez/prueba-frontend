import React from 'react'
import MiniNavbar from './components/layout/MiniNavbar'
import Navbar from './components/layout/Navbar'
import MainContainer from './components/MainContainer'

const App = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <MiniNavbar />
        <div className='mt-3'>
          <MainContainer />
        </div>

      </div>
    </>
  )
}

export default App