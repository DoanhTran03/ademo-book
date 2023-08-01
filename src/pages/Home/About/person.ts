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
    description: "Code wizards, conjuring digital dreams."
  },
  {
    name: "Doanh Tran",
    major: "Computer Science - Software Engineering",
    photo: doanh,
    description: "Designing the future, one pixel at a time."
  },
  {
    name: "harry potter",
    major: "J.K.Rowling",
    photo: kevin,
    description: "Collaboration webbing greatness, together we thrive."
    },
];
export default people;
