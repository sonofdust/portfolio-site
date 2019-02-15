import React from "react";

const PortfolioPage = props => (
  <div>
    <h1>A thing I have done.</h1>
    <p>This is what I have done: {props.match.params.id} </p>
  </div>
);
export default PortfolioPage;
