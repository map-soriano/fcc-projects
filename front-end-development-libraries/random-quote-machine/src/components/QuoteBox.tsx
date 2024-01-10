import { useState, useEffect } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);

  const NUM = Math.floor(Math.random() * 16);

  const generate = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[NUM].text);
        setAuthor(quote[NUM].author.split(",")[0]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <>
      <h1 id="text" className="text-center">
        {quote}
      </h1>
      <p id="author" className="text-right">
        - {author}
      </p>
      <a
        id="tweet-quote"
        className="btn btn-block btn-primary col-4"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
      <button className="btn btn-primary btn-block col-4">Post</button>
      <button
        id="new-quote"
        className="btn btn-block btn-primary col-4"
        onClick={generate}
      >
        New Quote
      </button>
    </>
  );
};

export default QuoteBox;
