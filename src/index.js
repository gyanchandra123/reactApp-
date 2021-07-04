import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./book";
import Book from "./Books";

function Greeting() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
