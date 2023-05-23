import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/game" className="no-underline">
        <button className="btn big">PLAY GAME!</button>
      </Link>
    </div>
  );
};

export default Home;
