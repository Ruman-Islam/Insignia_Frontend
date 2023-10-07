import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";
import Input from "../../components/UI/Input";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import axios from "../../api/axios";
import { RxCrossCircled } from "react-icons/rx";
import Layout from "../../components/common/Layout";
import Spinner from "../../components/common/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ForgetPasswordScreen = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);
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
      const { data } = await axios.post(
        "/auth/forgot/password",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setIsLoading(false);
      toast(data.message, {
        icon: <TiTick className="text-brand__success" size={25} />,
      });
      reset();
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
    <Layout title="Forgot password">
      <section className="md:h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-screen-xl w-full flex items-center justify-center mx-auto p-content__padding border h-full py-10">
          <div className="bg-white p-10 max-w-[450px] w-full shadow-lg border-t-4 border-primary rounded-md">
            <div className="w-full">
              <h1 className="text-brand__font__size__lg text-primary font-brand__font__bold">
                Forgot your password?
              </h1>
              <p className="text-brand__font__size__sm max-w-[325px] text-brand__detail__text leading-snug my-3">
                Please enter your email address and we&rsquo;ll send you a link
                to reset your password.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              {/* Email validation */}
              <div>
                <div className="border flex items-center justify-between">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="w-full p-3 outline-none"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </div>
                </div>
                <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                  {errors?.email?.type && <AiOutlineWarning size={14} />}
                  {errors?.email?.type === "required" && (
                    <small className="py-0.5">Email is required</small>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <small className="py-0.5">Input valid email</small>
                  )}
                </div>
              </div>

              <div className="w-full p-2 text-center mt-8 bg-primary border border-brand__gray__border text-white font-brand__font__semibold rounded-3xl cursor-pointer hover:bg-secondary duration-300 shadow-lg flex flex-col items-center justify-center">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <Input
                    type="submit"
                    value="Send Link"
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

export default ForgetPasswordScreen;
