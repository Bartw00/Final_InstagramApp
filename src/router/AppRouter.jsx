import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/app",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/explore",
      element: (
        <ProtectedRoute>
          <Explore />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
