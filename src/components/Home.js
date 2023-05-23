import Game from "./Game";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/Game" className="btn big">PLAY GAME!</Link>
    </div>
  );
};

export default Home;
