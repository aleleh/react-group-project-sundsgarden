import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes() {
  const userId = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/Modal");
    }
  }, [userId, navigate]);

  return <Outlet />;
}

export default ProtectedRoutes;
