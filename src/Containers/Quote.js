import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  loadQuoteData,
  selectQuote,
  selectIsLoadingQuote,
} from "../Containers/quoteSlice";

import "./quote.css"

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector(selectQuote);
  const isLoading = useSelector(selectIsLoadingQuote);

  useEffect(() => {
    dispatch(loadQuoteData());
  }, [dispatch]);

  if (isLoading) return <div>Loading Quote</div>;
  if (!quote.content) return null;

  const content = quote.content;
  const author = quote.author;

  return (
    <section className="quoteSection">
      <div className='quote'>
        <p className="content">{content}</p>
        <p className="author">{author}</p>
      </div>
    </section>
  );
};

export default Quote;
