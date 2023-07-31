import { Book, NewBook } from "../../../../hooks/useBook";

interface Props {
  onDelete: (id: string) => void;
  book: Book | NewBook;
}
const BookCard = ({book,onDelete}: Props) => {
  return (
    <article className={"bookCard"}>
      <img src={book.bookURL}></img>
      <h3>{book.title}</h3>
      <p className="bookCard__author">{book.author}</p>
      <p className="bookCard__description">
        {book.description}
      </p>
      <button className="bookCard__btn" onClick={() => onDelete(book.id)}>Delete Book</button>
    </article>
  );
};

export default BookCard;
