import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth"; 

export default function AdminLayout() {
  const { isLoggedIn } = useAuth();

  // Redirect to login if the user is not authenticated
  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <div className="admin-layout">
      {/* Shared Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Shared Footer */}
      {/* <Footer /> */}
    </div>
  );
};