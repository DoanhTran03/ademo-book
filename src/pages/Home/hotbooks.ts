import bookstorycover from "../../assets/hotbooks/book-story.webp";
import differentwintercover from "../../assets/hotbooks/different-winter.webp";
import harrypottercover from "../../assets/hotbooks/harry-potter.webp";
import mordernspacecover from "../../assets/hotbooks/morden-space.webp";

export interface HotBook {
  name: string;
  author: string;
  cover: string;
  description: string;
}

const hotbooks = [
  {
    name: "book story",
    author: "Jean Lumier",
    cover: bookstorycover,
    description:
      "A literary journey of imagination and emotion, where pages come alive, characters befriend readers, and words weave a spellbinding narrative that transcends time, leaving hearts forever enriched",
  },
  {
    name: "different winter",
    author: "Mia Jackson",
    cover: differentwintercover,
    description:
      "A poignant tale of unlikely friendships forged amidst a winter's enchanting beauty, where individuals from diverse backgrounds discover shared warmth in the coldest of seasons, redefining life's meaning",
  },
  {
    name: "harry potter",
    author: "J.K.Rowling",
    cover: harrypottercover,
    description:
      "A captivating saga of a young wizard's extraordinary journey, friendship, and bravery against dark forces. Uncover a magical world where courage, love, and destiny intertwine in epic proportions",
  },
  {
    name: "mordern space",
    author: "Francisco Spencer",
    cover: mordernspacecover,
    description:
      "A futuristic odyssey exploring uncharted galaxies, where advanced technology and human spirit collide. Follow intrepid explorers on a thrilling quest for knowledge and self-discovery across the cosmos",
  },
];
export default hotbooks;
