import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useGoogleLogin } from "@react-oauth/google";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { HashLink } from "react-router-hash-link";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "../../api/axios";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineWarning,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import Layout from "../../components/common/Layout";

const SignInScreen = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
    try {
      const { data } = await axios.post(
        "/auth/login",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast(data.message, {
        icon: <TiTick className="text-brand__success" size={25} />,
      });
      setAuth(data.data);
      reset();
      navigate(from, { replace: true });
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

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      try {
        const { data } = await axios.get("/auth/google/login", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${code}`,
          },
          withCredentials: true,
        });

        toast(data.message, {
          icon: <TiTick className="text-brand__success" size={25} />,
        });
        setAuth(data.data);
        reset();
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
    },
    flow: "auth-code",
    onError: () => {
      toast("Something went wrong!", {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
    },
  });

  return (
    <Layout title="Login">
      <section className="h-full lg:h-[92vh] flex flex-col items-center justify-center relative bg-sign__in__form__background bg-center bg-cover py-5">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md"></div>
        <div className="max-w-screen-xl w-full mx-auto p-content__padding h-[600px] relative">
          <div className="w-full h-full mx-auto bg-primary rounded-2xl flex flex-col lg:flex-row justify-between border border-brand__gray__border">
            <div className="basis-[60%] rounded-2xl bg-sign__in__form__background bg-center bg-cover relative h-full flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
              <div className="relative text-white text-brand__font__size__sm md:text-brand__font__size__lg uppercase text-center font-brand__font__family__fancy">
                <p>
                  travel is the only thing <br /> you buy that makes you <br />{" "}
                  richer
                </p>
              </div>
            </div>
            <div className="basis-[40%] w-full h-full flex flex-col justify-center items-center text-white py-5 p-content__padding">
              <div className="lg:max-w-[300px] w-full mx-auto">
                <div className="w-full">
                  <Button
                    onClick={googleLogin}
                    className="flex justify-center items-center gap-x-2 bg-white hover:bg-brand__bg__hover p-2 w-full rounded-3xl shadow-lg"
                  >
                    <FcGoogle size={28} />
                    <span className="font-brand__font__semibold text-black">
                      Login with Google
                    </span>
                  </Button>
                  <p className="text-center mt-2">or use your email account</p>
                </div>
                <br />
                <br />
                <div className="relative">
                  <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    {/* Email validation */}
                    <div>
                      <div className="border-b border-brand__gray__border flex items-center justify-between">
                        <div className="w-full">
                          <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
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

                    <br />

                    {/* Password validation */}
                    <div>
                      <div className="border-b border-brand__gray__border flex items-center justify-between">
                        <div className="w-full">
                          <input
                            type={isVisible ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
                            {...register("password", {
                              required: true,
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
                        {errors?.password?.type && (
                          <AiOutlineWarning size={15} />
                        )}
                        {errors?.password?.type === "required" && (
                          <small className="py-0.5">Password is required</small>
                        )}
                      </div>
                    </div>

                    <div>
                      <Input
                        type="submit"
                        value="Sign in"
                        className="max-w-[150px] w-full mr-auto p-2 mt-8 text-center bg-white border border-brand__gray__border text-primary font-brand__font__semibold rounded-3xl cursor-pointer hover:bg-transparent hover:text-white duration-300 shadow-lg"
                      />
                    </div>
                  </form>
                  <div className="absolute bottom-[100px] right-0">
                    <HashLink
                      to="/forget-password"
                      className="text-brand__font__size__xs hover:underline"
                    >
                      Forgot password?
                    </HashLink>
                  </div>
                  <div className="mt-8 text-center">
                    <span>
                      Don&rsquo;t have an Account?{" "}
                      <HashLink className="hover:underline" to="/sign-up">
                        Sign Up
                      </HashLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignInScreen;
