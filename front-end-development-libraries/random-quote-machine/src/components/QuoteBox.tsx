// import { Fragment } from "react";

const QuoteBox = () => {
  return (
    <>
      <h1 id="text" className="text-center">
        Quote
      </h1>
      <p id="author" className="text-right">
        - Quote Author
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
