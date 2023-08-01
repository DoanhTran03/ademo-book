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
    major: "Computer Science",
    photo: hai,
    description: "Code wizards, conjuring great digital dreams."
  },
  {
    name: "Doanh Tran",
    major: "Computer Science",
    photo: doanh,
    description: "Designing the future, one pixel at a time."
  },
  {
    name: "Kevin Truong",
    major: "Computer Science",
    photo: kevin,
    description: "Collaboration webbing, together we thrive."
    },
];
export default people;
