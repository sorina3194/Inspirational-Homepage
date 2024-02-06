import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  loadQuoteData,
  selectQuote,
  selectIsLoadingQuote,
} from "../Containers/quoteSlice";

const quoteContainer = {
  padding: "10px",
  textAlign: "center",
  color: "white",
  textShadow: "rgb(0, 0, 0) 1px 0px 5px",
  margin: "15px",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
  borderRadius: "10px",
};
const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector(selectQuote);
  const isLoading = useSelector(selectIsLoadingQuote);

  // useEffect(() => {
  //   dispatch(loadQuoteData());
  // }, [dispatch]);

  if (isLoading) return <div>Loading Quote</div>;
  if (!quote.content) return null;

  const content = quote.content;
  const author = quote.author;

  return (
    <div style={quoteContainer}>
      <h2>{content}</h2>
      <h5>{author}</h5>
    </div>
  );
};

export default Quote;
