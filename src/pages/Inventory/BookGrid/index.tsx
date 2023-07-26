import useBook from '../../../hooks/useBook';
import BookCard from './BookCard.tsx';

const BookGrid = () => {
    const {books , handleDelete} = useBook();
    console.log(books);
  return (
    <div className="bookGrid">
        {books.map(book => <BookCard key={book.id} book={book}></BookCard>)}
    </div>
  )
}

export default BookGrid