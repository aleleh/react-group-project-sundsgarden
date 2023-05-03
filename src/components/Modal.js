
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigate = useNavigate();

  const handleExit = () => {
    setIsModalVisible(false);
    navigate('/');
  };

  return (
    <div>
      {isModalVisible && (
        <>
          <button onClick={handleExit} className="exit-btn">Exit</button>
          <Signup />
          <Login />
        </>
      )}
    </div>
  );
}

export default Modal;
