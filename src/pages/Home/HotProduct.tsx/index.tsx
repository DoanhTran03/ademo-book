import "../index.css"
import AutoSlider from "./AutoSlider"

const HotProduct = () => {
  return (
    <div id="hot books" className="hotProduct">
        <div className="hotProduct__heading">
          <div className="left-line"></div>
            <p>Recommended books</p>
          <div className="right-line"></div>
        </div>
        <AutoSlider></AutoSlider>
    </div>
  )
}

export default HotProduct