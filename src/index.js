import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const names = ["aaaa", "bbbb", "cccc"];

function Greeting() {

  const newNames = names.map(name=>{
    return <h3>{name}</h3>
  })

  return( <section className="booklist">
    {newNames}
  </section>);
}

const Book = ({ img, title, author }) => {
  // here the children: must maintain unique name
  return (
    <article className="book">
      <img src={img} alt="images" />
      <h4>{title}</h4>
      <h5>{author}</h5>
    </article>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
