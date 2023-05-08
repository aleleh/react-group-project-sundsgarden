import {Link} from "react-router-dom";
import Header from './Header';
import Button from './Button';

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <h1>Typing Game</h1>
        <Button>
          <Link to="/Game" className="button">Click here to start the game</Link>
        </Button>
        </div>
    </>
  );
};

export default Home;