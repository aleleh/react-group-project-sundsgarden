import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function ProtectedRoutes({ showModal, closeModal }) {
  const userId = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/Modal");
    }
  }, [userId, navigate]);

  return (
    <>
      <Outlet />
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default ProtectedRoutes;
