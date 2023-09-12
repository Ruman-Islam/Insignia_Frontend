import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  // const [user, loading,] = useAuthState(auth);
  // const token = localStorage.getItem("accessToken");
  const loading = false;
  const user = true;

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
