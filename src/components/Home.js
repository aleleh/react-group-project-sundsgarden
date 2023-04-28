import Header from './Header';
import Button from './Button';

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <h1>Typing Game</h1>
        <Button>
          <a className="button" href="#">Click here to start the game</a>
        </Button>
        </div>
    </>
  );
};

export default Home;