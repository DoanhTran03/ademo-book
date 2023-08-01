import "../index.css"
import PersonCard from "./PersonCard"
import members from "./person"
const About = () => {
  return (
    <div className="about">
      <h2 className="about__heading">About us</h2>
      <div className="about__members">{members.map((member, index) => <PersonCard person={member} key={index}></PersonCard>)}</div>
    </div>
  )
}

export default About