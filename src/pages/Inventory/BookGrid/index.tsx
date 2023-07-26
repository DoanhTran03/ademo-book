import useBook from '../../../hooks/useBook';
import BookCard from './BookCard.tsx';

const BookGrid = () => {
    const {books , handleDelete} = useBook();
    console.log(books);
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