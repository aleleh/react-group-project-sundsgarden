import Signup from "./Signup";
import Login from "./Login";
import { MdClose } from "react-icons/md";

function Modal({children, closeModal}) {
  return (
    <div className="overlay">
      <div className="content">
        <Signup />
        <Login />
        <MdClose className="close" onClick={closeModal} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
