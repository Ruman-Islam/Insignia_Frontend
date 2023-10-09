import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import axios from "../api/axios";
import { RxCrossCircled } from "react-icons/rx";

const useCustomGoogleLogin = () => {
  const handleGoogleLogin = async (code, setAuth, navigate, from) => {
    try {
      const { data } = await axios.get("/auth/google/login", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${code}`,
        },
      });

      const responseData = data.data;
      Cookies.set("rT", responseData.refreshToken);
      delete responseData.refreshToken;
      setAuth(responseData);
      toast(data.message, {
        icon: <TiTick className="text-brand__success" size={20} />,
      });
      navigate(from, { replace: true });
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast(message, {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
    }
  };

  return handleGoogleLogin;
};

export default useCustomGoogleLogin;
