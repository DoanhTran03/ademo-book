import { Book, NewBook } from "../../../../hooks/useBook";

interface Props {
  book: Book | NewBook;
}
const BookCard = ({book}: Props) => {
  return (
    <article className={"bookCard"}>
      <img src={book.bookURL}></img>
      <h3>{book.author}</h3>
      <p className="bookCard__author">{book.author}</p>
      <p className="bookCard__description">
        {book.description}
      </p>
    </article>
  );
};

export default BookCard;
