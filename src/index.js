import React from "react";
import ReactDOM from "react-dom";
import './index.css'

function Greeting() {
  return (
    <section className='booklist'>
      <Book /> 
    </section>
  );
}

const author = 'Michael Knowles'

const Book = () => {
  const title ='Controlling MindsSpeechless';
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg" alt="book"></img> 
      <h4>{title}</h4>
      <h5>{author.toUpperCase()}</h5>
    </article>
  );
};
 
 
 

ReactDOM.render(<Greeting />, document.getElementById("root"));
