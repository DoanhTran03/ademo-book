import {FaGreaterThan,FaLessThan} from "react-icons/fa" 
import BookCard from "../BookCard.tsx"
import "../../index.css"
import hotbooks from "../../hotbooks.ts"
const AutoSlider = () => {
  return (
    <div className="autoSlider">
        <span className="back-icon"><FaLessThan/></span>
        <span className="next-icon"><FaGreaterThan/></span>
        {hotbooks.map(book => <BookCard book={book} position="cur"></BookCard>)}
    </div>
  )
}

export default AutoSlider