import { useInventoryContext } from '../../../context/InventoryContext.tsx';
import useBook from '../../../hooks/useBook';
import BookCard from './BookCard.tsx';

const BookGrid = () => {
    const {books , handleDelete} = useInventoryContext();
    const onDelete = (id: string) => {
        handleDelete(id);
    }
  return (
    <div className="bookGrid">
        {books.map(book => <BookCard onDelete={(id) => onDelete(id)} key={book.id} book={book}></BookCard>)}
    </div>
  )
}

export default BookGrid