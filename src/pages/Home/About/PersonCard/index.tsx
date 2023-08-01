import "../../index.css"
import img from "../../../../assets/doanh-tran.webp"
import { Person } from "../person"

interface Props {
  person: Person;
}
const PersonCard = ({person}: Props) => {
  return (
    <div className="personCard">
      <img className="personCard__img" src={person.photo} alt="Member of a group" />
      <div className="personCard__content">
        <h2>{person.name}</h2>
        <h3>{person.major}</h3>
        <p>{`"${person.description}"`}</p>
      </div>
    </div>
  )
}

export default PersonCard