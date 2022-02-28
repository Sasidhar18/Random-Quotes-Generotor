import React from 'react'
import Header from './Components/Header'
import Quotes from './Components/Quotes'

const App = () => {
  return (
    <>
    <Header/>
    <div className='app'>
      <Quotes />
    </div>
    </>
    
  )
}

export default App
