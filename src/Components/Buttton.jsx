import React from 'react'
import './Quotes.css'

const Buttton = (props) => {
    return (
     <>
     <button className='random-button' style={{backgroundColor: props.color}} onClick={props.onClickHandler} >Generate Quote</button>
     </>
    )
}

export default Buttton
