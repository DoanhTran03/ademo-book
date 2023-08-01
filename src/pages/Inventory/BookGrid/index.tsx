import { useInventoryContext } from '../../../context/InventoryContext.tsx';
import BookCard from './BookCard.tsx';

const BookGrid = () => {
    const {books , handleDelete} = useInventoryContext();
    const onDelete = (id: string) => {
        handleDelete(id);
    }
    console.log(books);
  return (
    <div className="bookGrid">
        {books.map((book: {id: string}, index: number) => <BookCard id={book.id} key={index} onDelete={(id) => onDelete(id)} book={book}></BookCard>)}
    </div>
  )
}

export default BookGrid