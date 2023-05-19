import {Link} from "react-router-dom";
import Header from './Header';
import Button from './Button';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <Button>
        <Link to="/Game" className="button">TYPING GAME </Link>
        </Button>
        <Button>
        <Link to="/Game" className="button">GAME OVER</Link>
        </Button>
        </div>
        <Footer />
    </>
  );
};

export default Home;