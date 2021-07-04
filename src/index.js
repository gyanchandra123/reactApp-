import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id:1,
    title: "Controlling MindsSpeechless",
    img: "https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg",
    author: "Michael Knowles",
  },
  {
    id:2,
    title: "The 48 Laws of Power",
    img: "https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._AC_SX184_.jpg",
    author: "Robert Greene",
  },
];

function Greeting() {
  return (
    <section className="booklist"> 
     { books.map(book => <Book key={book.id} {...book}/>)} 
    </section>
  );
}

const clickHandler =(event)=>{ 
  console.log(event.target); // this represent the html<element> that we click on.
}

const clickHandler2 =(data)=>{ 
  console.log('pass data',data); // this represent the html<element> that we click on.
}

const directExecuting=(e)=>{
  console.log('direct executing')

}

const Book = ({img,title,author}) => {  
  return (
    <article className="book">
      <img src={img} alt="images" onClick={()=>console.log('inline event handling')}/>
      <h4 onClick={directExecuting()}>{title}</h4> {/* this will call the function directly without click */}
      <h5 onClick={clickHandler}>{author}</h5> {/* will execute the function on click only */}
      <h5 onClick={()=>clickHandler2('hi')}>{author}</h5> 
      {/* if we have to pass any data to the event handler, pass a function inside JSx instead of directly calling the
      function name. */}   
    </article>
          

  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));

 