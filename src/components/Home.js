import {Link} from "react-router-dom";
import Header from './Header';
import Button from './Button';

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <Button>
        <Link to="/Game" className="button">GAME OVER</Link>
        </Button>
        <Button>
        <Link to="/Game" className="button">TYPING GAME</Link>
        </Button>
        </div>
    </>
  );
};

export default Home;