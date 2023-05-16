import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Header = ({ showModal, closeModal }) => {
  // Get the current location (URL path) and navigate function from the router
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current route is the "/modal" route
  const isModalRoute = location.pathname === "/modal";

  // Function to open the model by navigating to the "/modal" route
  // if the user is not already on that route
  const openModal = () => {
    if (!isModalRoute) {
      navigate("/modal");
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            {/* Link to the home page */}
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            {/* Link to the game page */}
            <Link className="links" to="/game">
              Game
            </Link>
          </li>
        </ul>
        {/* Button to open the modal when clicked */}
        <button onClick={openModal}>Sign up/Log in</button>
        {/* Render the modal component if showModal is true */}
        {showModal && <Modal closeModal={closeModal} />}
      </nav>
    </header>
  );
};

export default Header;
