import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineWarning,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import Input from "../../components/UI/Input";
import toast from "react-hot-toast";
import axios from "../../api/axios";
import Layout from "../../components/common/Layout";
import Spinner from "../../components/common/Spinner";
import useContextData from "../../hooks/useContextData";
import Cookies from "js-cookie";

const ResetPasswordScreen = () => {
  const { token } = useParams();
  const { auth, setAuth } = useContextData();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // auth check
  useEffect(() => {
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, [auth.user, from, navigate]);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      formData.token = token;
      const { data } = await axios.post(
        "/auth/reset/password",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const responseData = data.data;
      Cookies.set("rT", responseData.refreshToken);
      delete responseData.refreshToken;
      setAuth(responseData);
      reset();
      toast(data.message, {
        icon: <TiTick className="text-brand__success" size={20} />,
      });
      navigate(from, { replace: true });
    } catch ({
      response: {
        data: { errorMessages },
      },
    }) {
      setIsLoading(false);
      toast(errorMessages[0]?.message, {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
    }
  };

  return (
    <Layout title="Reset password">
      <section className="md:h-[80vh]">
        <div className="max-w-screen-xl w-full flex items-center justify-center mx-auto p-content__padding border h-full py-10">
          <div className="bg-white p-10 max-w-[450px] w-full shadow-lg border-t-4 border-primary rounded-md">
            <div className="w-full">
              <h1 className="text-brand__font__size__lg text-primary font-brand__font__bold mb-3">
                Reset password
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              {/* Password validation */}
              <div>
                <div className="border flex items-center justify-between px-2">
                  <div className="w-full ">
                    <input
                      type={isVisible ? "text" : "password"}
                      placeholder="Enter your new password"
                      name="password"
                      className="w-full py-3 outline-none"
                      {...register("password", {
                        pattern: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
                      })}
                    />
                  </div>
                  <div className="cursor-pointer">
                    {isVisible ? (
                      <AiOutlineEye
                        onClick={() => setIsVisible(!isVisible)}
                        size={22}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() => setIsVisible(!isVisible)}
                        size={22}
                      />
                    )}
                  </div>
                </div>
                <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                  {errors?.password?.type && <AiOutlineWarning size={15} />}
                  {errors?.password?.type === "required" && (
                    <small className="py-0.5">Password is required</small>
                  )}
                  {errors?.password?.type === "pattern" && (
                    <small className="py-0.5">
                      <span className="block">At least 8 characters</span>
                      <span className="block">
                        Contains a special character
                      </span>
                    </small>
                  )}
                </div>
              </div>

              <div className="w-full p-2 text-center mt-8 bg-primary border border-brand__gray__border text-white font-brand__font__semibold rounded-3xl cursor-pointer hover:bg-secondary duration-300 shadow-lg flex flex-col items-center justify-center">
                {isLoading ? (
                  <Spinner styles="w-6 h-6 border-white" />
                ) : (
                  <Input
                    type="submit"
                    value="Reset"
                    className="w-full cursor-pointer"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResetPasswordScreen;
