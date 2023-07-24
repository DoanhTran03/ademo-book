import {FaGreaterThan,FaLessThan} from "react-icons/fa" 
const AutoSlider = () => {
  return (
    <div className="autoSlider">
        <span className="back-icon"><FaLessThan/></span>
        <span className="next-icon"><FaGreaterThan/></span>
    </div>
  )
}

export default AutoSlider