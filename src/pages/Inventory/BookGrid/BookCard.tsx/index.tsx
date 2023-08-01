import Modal from "../Modal.tsx";

interface Props {
  onDelete: (id: string) => void;
  book: any;
  id: string;
}
const BookCard = ({book,onDelete,id}: Props) => {
  return (
    <article className={"gridCard"}>
      <img src={book.bookURL}></img>
      <h3>{book.title}</h3>
      <p className="gridCard__author">{book.author}</p>
      <p className="gridCard__description">
        {book.description}
      </p>
      <Modal id={id}></Modal>
      <button className="gridCard__btn" onClick={() => onDelete(book.id)}>Delete Book</button>
    </article>
  );
};

export default BookCard;
