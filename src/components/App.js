import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Game from "./Game";
import ProtectedRoutes from "./ProtectedRoutes";
import Modal from "./Modal";
import { useState } from "react";


function App() {
  // Create a state variable (showModal) to track if the modal is open
  // Set the initial value to false (modal is closed)
  const [showModal, setShowModal] = useState(false);

  // Create a function (closeModal) to change the showModal state to false
  const closeModal = () => setShowModal(false);

  // Create a function (openModal) to change the showModal state to true
  const openModal = () => setShowModal(true);

  return (
    <BrowserRouter>
      <div>
        <Header openModal={openModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoutes showModal={showModal} closeModal={closeModal} />}>
            <Route path="/Game" element={<Game />} />
          </Route>
          <Route path="/Modal" element={<Modal closeModal={closeModal} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
