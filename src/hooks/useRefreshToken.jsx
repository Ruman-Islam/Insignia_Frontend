import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const {
      data: { data: data },
    } = await axios.get("/auth/refresh/token", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return { ...prev, user: data?.user, accessToken: data?.accessToken };
    });

    return data?.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
