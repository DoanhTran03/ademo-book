import { HotBook } from "../../hotbooks";
import cover from "../../../../assets/hotbooks/book-story.webp";
interface Props {
  book: HotBook;
  position: string;
}
const BookCard = () => {
  return (
    <article className="bookCard">
      <img src={cover}></img>
      <h3>Book Story</h3>
      <p className="bookCard__author">Author name</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        commodi dolore aspernatur ipsum laudantium maxime, praesentium itaque,
        placeat sit eveniet alias necessitatibus possimus distinctio ad dolor
        soluta labore rerum ea?
      </p>
    </article>
  );
};

export default BookCard;
