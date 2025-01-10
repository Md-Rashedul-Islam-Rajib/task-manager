import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import ManagerLayout from "@/layouts/ManagerLayout";
import UserLayout from "@/layouts/UserLayout";
import { Login } from "@/pages/Login";
import Register from "@/pages/Register";
import { Routes, Route } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<UserLayout />} />
      <Route path="/manager" element={<ManagerLayout />}></Route>
    </Routes>
  );
};

export default AppRoutes;
