import React from 'react';
import './Quotes.css'

const QuotesItem = (props) => {
    return (
        <div >
            <p className='quotes'>{props.quote}</p>
            <p className='author'>- {props.author}</p>
        </div>
    )
}

export default QuotesItem
