import { HotBook } from "../../hotbooks";
interface Props {
  book: HotBook;
  position: string;
}
const BookCard = ({book, position}: Props) => {
  return (
    <article className={"bookCard bookCard--" + position}>
      <img src={book.cover}></img>
      <h3>{book.name}</h3>
      <p className="bookCard__author">{book.author}</p>
      <p className="bookCard__description">
        {book.description}
      </p>
    </article>
  );
};

export default BookCard;
