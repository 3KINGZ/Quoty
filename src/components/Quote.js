import React from "react";
import openingQuote from "../images/quote.svg";
import closingQuote from "../images/quote 2.svg";
import "./Quote.css";

function Quote({ quote, author }) {
  return (
    <div className="quote-container">
      <img src={openingQuote} alt="opening-quote-icon" />
      <h2 className="quote">{quote}</h2>
      <img src={closingQuote} alt="opening-quote-icon" />
      <h3 className="author">-{author}</h3>
    </div>
  );
}

export default Quote;
