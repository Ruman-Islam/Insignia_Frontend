import axios from "../api/axios";
import useContextData from "./useContextData";
import Cookies from "js-cookie";

const useRefreshToken = () => {
  const { setAuth } = useContextData();
  const token = Cookies.get("rT");

  const refresh = async () => {
    const {
      data: { data: data },
    } = await axios.post("/auth/refresh/token", { token });

    setAuth((prev) => {
      return { ...prev, user: data?.user, accessToken: data?.accessToken };
    });

    return data?.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
