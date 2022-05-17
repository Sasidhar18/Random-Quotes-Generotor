import React, { useEffect, useState } from 'react'
import axios from 'axios';
import QuotesItem from './QuotesItem';
import Buttton from './Buttton';
import './Quotes.css'

const Quotes = () => {
    const [quote, setQuote] = useState(
        {
            quote: 'Never ever do a fucking mistake again',
            author: 'Anonymous'
        }
    )
    const [color, setColor] = useState("lightgrey")
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        const FetchData = () => {
            axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
                .then((res) => {
                    setQuotes(res.data.quotes)
                }).catch((error) => console.log(error))
        }
        FetchData()
    }, [])

    const randomColor = () => {
        let colorPatterns = "1234567890ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += colorPatterns[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const ClickHandler = () => {
        const randomIndex = Math.floor(Math.random() * 100)
        setColor(randomColor())
        setQuote(quotes[randomIndex])
    }
    document.body.style.backgroundColor = color;
    return (
        <div className='quotes-box' style={{ color: "white", backgroundColor: color }}>
            <QuotesItem quote={quote.quote} author={quote.author} />
            <Buttton onClickHandler={ClickHandler} color={color} />
        </div>
    )
}

export default Quotes;