import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    navigate("/", {
      state: { from: location },
    });
  }

  return children;
};

export default ProtectedRoute;
