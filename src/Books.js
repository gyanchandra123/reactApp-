const Books = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="images" />
      <h4>{title}</h4> 
      <h5>{author}</h5>
      <h5>{author}</h5>
    </article>
  );
};

export default Books;
