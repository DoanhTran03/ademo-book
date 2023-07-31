import { useEffect, useState } from "react";
import useBook from "../../../../hooks/useBook";

const SortArea = () => {
  const [type, setType] = useState("default");
  const [order, setOrder] = useState("default");
  const { books,setBooks} = useBook();
  
  useEffect(() => {
    let sortedBooks = [...books];
    sortedBooks.sort((a, b) => {
      return a.author.localeCompare(b.author);
    });
    setBooks(sortedBooks);
  }, [type]);

  return (
    <div className="sortArea">
      <form className="sortArea__type">
        <h2>Type</h2>
        <div className="">
          <input
            name="type"
            id="default-type"
            type="radio"
            value="default"
            onClick={() => setType("default")}
          />
          <label htmlFor="default-type">by default</label>
        </div>
        <div className="">
          <input
            onClick={() => setType("by book name")}
            name="type"
            id="book-name-radio"
            type="radio"
            value="by book name"
          />
          <label htmlFor="book-name-radio">book name</label>
        </div>
        <div className="">
          <input
            onClick={() => setType("by author name")}
            name="type"
            id="author-name-radio"
            type="radio"
            value="by author name"
          />
          <label htmlFor="author-name-radio">author name</label>
        </div>
      </form>
      <form className="sortArea__order">
        <h2>Order</h2>
        <div className="">
          <input
            onClick={() => setOrder("default")}
            name="order"
            id="ascending-radio"
            type="radio"
            value="default"
          />
          <label htmlFor="ascending-radio">by default</label>
        </div>
        <div className="">
          <input
            onClick={() => setOrder("ascending")}
            name="order"
            id="ascending-radio"
            type="radio"
            value="ascending"
          />
          <label htmlFor="ascending-radio">ascending</label>
        </div>
        <div className="">
          <input
            onClick={() => setOrder("decending")}
            name="order"
            id="decending-radio"
            type="radio"
            value="decending"
          />
          <label htmlFor="decending-radio">decending</label>
        </div>
      </form>
    </div>
  );
};

export default SortArea;
