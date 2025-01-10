import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import UserLayout from "./layouts/UserLayout";
import { Login } from "./pages/Login";

function App() {
  const user = {
    role: "admin",
  };
  return (
    <>
      {user.role === "admin" ? (
        <AdminLayout />
      ) : user.role === "manager" ? (
        <ManagerLayout />
      ) : user.role === "user" ? (
        <UserLayout />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
