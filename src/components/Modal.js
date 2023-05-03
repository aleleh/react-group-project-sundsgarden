import Signup from "./Signup";
import Login from "./Login";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleExit = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {isModalVisible && (
        <>
          <button onClick={handleExit} className="exit-btn">
            Exit
          </button>
          <Signup />
          <Login />
        </>
      )}
    </div>
  );
}

export default Modal;
