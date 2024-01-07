import { useState, useEffect } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);

  const num = Math.floor(Math.random() * 16);

  const generate = () => {
    // fetch("https://animechan.xyz/api/random")
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[num].text);
        setAuthor(quote[num].author);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    generate();
  }, []);

  console.log(quote);
  return (
    <>
      <h1 id="text" className="text-center">
        {quote}
      </h1>
      <p id="author" className="text-right">
        - {author}
      </p>
      <button id="tweet-quote" className="btn btn-block btn-primary col-4">
        Tweet
      </button>
      <button className="btn btn-primary btn-block col-4">Post</button>
      <button id="new-quote" className="btn btn-block btn-primary col-4">
        New Quote
      </button>
    </>
  );
};

export default QuoteBox;
