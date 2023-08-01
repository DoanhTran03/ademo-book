import useBook from "../hooks/useBook";

const BookGrid = () => {
  const {books , handleDelete} = useBook();

  console.log(books);
  return (
    <div>
      {books.map((book: any) => (
        <>
        <p key={book.id}>{book.title}</p> 
        <button onClick={() => handleDelete(book.id)}>Delete</button>
        </>
      ))}
    </div>
  );
};

export default BookGrid;


