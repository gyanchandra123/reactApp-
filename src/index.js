import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    title: "Controlling MindsSpeechless",
    img: "https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg",
    author: "Michael Knowles",
  },
  {
    title: "The 48 Laws of Power",
    img: "https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._AC_SX184_.jpg",
    author: "Robert Greene",
  },
];

function Greeting() {
  return (
    <section className="booklist"> 
     { books.map(book => <Book books={book}/>)} 
    </section>
  );
}

const Book = (props) => { 
  console.log(props)
  const {img,title,author}= props.books;
  return (
    <article className="book">
      <img src={img} alt="images" />
      <h4>{title}</h4>
      <h5>{author}</h5>   
    </article>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));

//wrong way:

/* import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  title: "Controlling MindsSpeechless",
  img: "https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg",
  author: "Michael Knowles",
};

const secondBook = {
  title: "The 48 Laws of Power",
  img: "https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._AC_SX184_.jpg",
  author: "Robert Greene",
};

function Greeting() {
  return (
    <section className="booklist">
      <Book firstObj={firstBook} />
      <Book secondObj={secondBook} />
    </section>
  );
}

const Book = (props) => {
  const {firstObj, secondObj} = props;
  return (
    <article className="book">
      <img src={firstObj.img || secondObj.img} alt="images" />
      <h4>{firstObj.title || secondObj.title}</h4>
      <h5>{firstObj.author || secondObj.author}</h5>
    </article>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root")); */
