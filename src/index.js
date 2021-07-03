import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <FirstComp />
      <SecondComp />
    </div>
  );
}

const FirstComp = () => <h4>this is gyan and this is my first component</h4>;

const SecondComp = () => <h4>this is gyan and this is my Second component</h4>;

/* const Greeting = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      { id: "heading" },
      "creating functional component through arrow function"
    )
  );
}; */

ReactDOM.render(<Greeting />, document.getElementById("root"));
