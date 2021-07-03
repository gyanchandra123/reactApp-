import React from "react";
import ReactDOM from "react-dom";
import './index.css'

function Greeting() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author/>
    </article>
  );
};
 
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg" alt="book"></img> 
    
const Title = () => <h4> Controlling MindsSpeechless </h4>
const Author = () => <h4>Michael Knowles</h4>
 

ReactDOM.render(<Greeting />, document.getElementById("root"));
