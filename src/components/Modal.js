
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BiXCircle } from "react-icons/bi";

function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigate = useNavigate();

  const handleExit = () => {
    setIsModalVisible(false);
    navigate('/');
  };

  return (
    <div className="modal">
      {isModalVisible && (
        <>
          <button onClick={handleExit} className="exit-btn"><BiXCircle /></button>
          <Login />
        </>
      )}
    </div>
  );
}

export default Modal;
