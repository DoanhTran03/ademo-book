import doanh from "../../../assets/doanh-tran.webp"
import hai from "../../../assets/hai-nguyen.webp"
import kevin from "../../../assets/kevin-truong.webp"

export interface Person {
  name: string;
  major: string;
  photo: string;
  description: string;
}

const people = [
  {
    name: "Hai Nguyen",
    major: "Computer Science - Software Engineering",
    photo: hai,
    description:
      "Hello, I'm an ambitious software engineering student passionate about developing innovative solutions that solve real-world problems. With a solid foundation in programming languages like Python, Java, and C++, I'm eager to collaborate on projects that push the boundaries of technology and make a positive impact on society.",
  },
  {
    name: "Doanh Tran",
    major: "Computer Science - Software Engineering",
    photo: doanh,
    description:
      "Hey there, I'm a software engineering student with a keen interest in exploring the latest advancements in the tech world. From building web applications to diving into machine learning algorithms, I enjoy immersing myself in diverse coding challenges and always look forward to learning new skills to stay at the forefront of technology.",
  },
  {
    name: "harry potter",
    major: "J.K.Rowling",
    photo: kevin,
    description:
      "Greetings! I'm a software engineering student who thrives on turning complex problems into elegant software solutions. My experience in agile development and version control, combined with a genuine curiosity for emerging tech trends, fuels my desire to create efficient and user-friendly applications. I'm constantly seeking opportunities to contribute to open-source projects and collaborate with fellow tech enthusiasts.",
  },
];
export default people;
