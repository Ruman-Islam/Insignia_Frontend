import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import axios from "../api/axios";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (
    formData,
    setAuth,
    navigate,
    from,
    reset,
    route
  ) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(route, JSON.stringify(formData));

      const responseData = data.data;
      Cookies.set("rT", responseData.refreshToken);
      delete responseData.refreshToken;
      reset();
      setAuth(responseData);
      toast(data.message, {
        icon: <TiTick className="text-brand__success" size={20} />,
      });
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast(message, {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading };
};

export default useLogin;
