import React, { useState, useEffect } from "react";
import axios from "axios";
import Buttons from "./components/Buttons";
import Quote from "./components/Quote";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getNewQuotes();
  }, []);

  function getNewQuotes() {
    axios
      .get(`https://api.quotable.io/random`)
      .then((res) => {
        const posts = res.data;
        setQuote(posts);
      })
      .catch((error) => {
        setError("an error occurred while trying to fetch quotes");
      });
  }

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <Quote quote={quote.content} author={quote.author} />
          <Buttons click={getNewQuotes} content={quote.content} />
        </>
      )}
    </div>
  );
}

export default App;
