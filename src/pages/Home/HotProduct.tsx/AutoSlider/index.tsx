import {FaGreaterThan,FaLessThan} from "react-icons/fa" 
import BookCard from "../BookCard.tsx"
import "../../index.css"
import hotbooks from "../../hotbooks.ts"
import { useEffect, useState } from "react"
const AutoSlider = () => {
  const [curIndex, setCurIndex] = useState(0);
  const lastIndex = (curIndex - 1 + hotbooks.length)%hotbooks.length;
  const mapPosition = (index: number) => {
    if (index == curIndex) return "cur"
    else if (index == lastIndex) return "last"
    else return "next"
  }
  useEffect(()=>{
    const timeout = setTimeout(()=> {
      setCurIndex((curIndex - 1 + hotbooks.length)%hotbooks.length);
    },2000)
    return () => clearTimeout(timeout)
  },[curIndex])
  return (
    <div className="autoSlider">
        <span className="back-icon" onClick={() => setCurIndex(curIndex => {return (curIndex - 1 + hotbooks.length)%hotbooks.length})}><FaLessThan/></span>
        <span className="next-icon" onClick={() => setCurIndex(curIndex => {return (curIndex + 1)%hotbooks.length})}><FaGreaterThan/></span>
        {hotbooks.map((book,index) => <BookCard key={book.name} book={book} position={mapPosition(index)}></BookCard>)}
    </div>
  )
}

export default AutoSlider