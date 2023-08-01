import "../../index.css"
import img from "../../../../assets/doanh-tran.webp"
const index = () => {
  return (
    <div className="personCard">
      <img className="personCard__img" src={img} alt="Member of a group" />
      <div className="personCard__content">
        <h2>Ngoc Doanh Tran</h2>
        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, alias."</p>
      </div>
    </div>
  )
}

export default index