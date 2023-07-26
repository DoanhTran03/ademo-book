import { Link, useNavigate } from "react-router-dom";
import "../index.css";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Mordern way to make words alive.</h1>
        <p>
          Discover new authors, genres, and personalized recommendations
          tailored just for you. Embrace the joy of reading with Ademo Book -
          where every page turns into an unforgettable journey.
        </p>
      </div>
      <button onClick={() => navigate("/inventory")}>
        <a>Start explore.</a>
      </button>
    </div>
  );
};

export default Hero;
