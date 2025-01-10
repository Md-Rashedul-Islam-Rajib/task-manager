import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import UserLayout from "./layouts/UserLayout";
import Login from "./pages/Login";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";



function App() {
const { isAuthenticated, user } = useAppSelector((state: RootState) => state.auth);
  return (
    <>
      {isAuthenticated && user.role === "admin" ? (
        <AdminLayout />
      ) : isAuthenticated && user.role === "manager" ? (
        <ManagerLayout />
      ) : isAuthenticated && user.role === "user" ? (
        <UserLayout />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
