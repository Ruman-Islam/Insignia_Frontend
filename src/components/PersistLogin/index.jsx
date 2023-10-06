import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import Loader from "../common/Loader";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, [auth?.accessToken, refresh]);

  //   useEffect(() => {
  //     console.log(`isLoading: ${isLoading}`);
  //     console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
  //   }, [isLoading]);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
