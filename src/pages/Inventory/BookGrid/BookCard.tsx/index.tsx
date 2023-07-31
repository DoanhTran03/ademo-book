import { Book, NewBook } from "../../../../hooks/useBook";

interface Props {
  onDelete: (id: string) => void;
  book: Book | NewBook;
}
const BookCard = ({book,onDelete}: Props) => {
  return (
    <article className={"gridCard"}>
      <img src={book.bookURL}></img>
      <h3>{book.title}</h3>
      <p className="gridCard__author">{book.author}</p>
      <p className="gridCard__description">
        {book.description}
      </p>
      <button className="gridCard__btn" onClick={() => onDelete(book.id)}>Delete Book</button>
    </article>
  );
};

export default BookCard;
