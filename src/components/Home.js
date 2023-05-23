import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/game">
      <button className="btn big"> <span>PLAY GAME!</span></button>
      </Link>
    </div>
  );
};

export default Home;
