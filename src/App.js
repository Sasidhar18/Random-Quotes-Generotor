import React from 'react'
import Header from './Components/Header'
import Quotes from './Components/Quotes'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <div className='app'>
      <Quotes />
    </div>
    <Footer/>
    </>
    
  )
}

export default App
