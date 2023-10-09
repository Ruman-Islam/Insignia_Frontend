import toast from "react-hot-toast";
// import axios from "../api/axios";
import useContextData from "./useContextData";
import { RxCrossCircled } from "react-icons/rx";
// import { TiTick } from "react-icons/ti";
import Cookies from "js-cookie";

const useLogout = () => {
  const { setAuth } = useContextData();

  const logout = async () => {
    setAuth({});
    try {
      // const { data } = await axios.get("/auth/logout", {
      //   withCredentials: true,
      // });

      // toast(data.message, {
      //   icon: <TiTick className="text-brand__success" size={25} />,
      // });
      Cookies.remove("rT");
    } catch ({
      response: {
        data: { errorMessages },
      },
    }) {
      toast(errorMessages[0]?.message, {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
    }
  };

  return logout;
};

export default useLogout;
