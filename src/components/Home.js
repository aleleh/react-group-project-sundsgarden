import Game from "./Game";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link className="links" to="/Game">Start Game</Link>
    </div>
  );
};

export default Home;
