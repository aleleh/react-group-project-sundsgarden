import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  // Creates a state variable to track if the modal is open
  // Sets initial value to false (modal is closed)
  const [showModal, setShowModal] = useState(false);
  // Function to close the modal
  const closeModal = () => setShowModal(false);
  // Function to open the modal
  const openModal = () => setShowModal(true);

  return (
    <nav>
      <ul>
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          {/* Button to open the modal when clicked */}
          <button onClick={openModal}>Sign up/Log in</button>
        </li>
      </ul>
      {/* Render the modal component if showModal is true */}
      {showModal && <Modal closeModal={closeModal} />}
    </nav>
  );
};

export default Header;
