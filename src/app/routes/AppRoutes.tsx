import AdminLayout from "@/layouts/AdminLayout";
import ManagerLayout from "@/layouts/ManagerLayout";
import UserLayout from "@/layouts/UserLayout";
import Login from "@/pages/Login";

import Register from "@/pages/Register";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Routes, Route, Navigate } from "react-router";

const AppRoutes = () => {
  const { isAuthenticated, user } = useAppSelector((state: RootState) => state.auth);


const getRedirect = () => {
    switch (user?.role) {
      case "admin":
        return '/admin';
      case 'manager':
        return '/manager';
      case 'user': 
        return '/user';
      default:
        return '/login'
    }
  }
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Role-Based Protected Routes */}
      {isAuthenticated && user?.role === "admin" && (
        <Route path="/admin" element={<AdminLayout />} />
      )}
      {isAuthenticated && user?.role === "manager" && (
        <Route path="/manager" element={<ManagerLayout />} />
      )}
      {isAuthenticated && user?.role === "user" && (
        <Route path="/user" element={<UserLayout />} />
      )}
      //handling routes dynamically
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={getRedirect()} replace />
          ) : (
            <Navigate to={"/login"} replace />
          )
        }
      />
      {/* Catch-All Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
