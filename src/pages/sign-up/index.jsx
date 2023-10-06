import { Helmet } from "react-helmet";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useForm } from "react-hook-form";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import axios from "axios";

const SignUpScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/google/login",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${code}`,
          },
        }
      );

      console.log(res);
    },
    flow: "auth-code",
    onError: () => {},
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia - Sign up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="h-full lg:h-[92vh] flex flex-col items-center justify-center bg-sign__up__form__background bg-center bg-cover relative py-5">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md"></div>
        <div className="max-w-screen-xl w-full mx-auto p-content__padding h-full lg:h-[600px] relative">
          <div className="w-full h-full mx-auto bg-primary rounded-2xl flex flex-col-reverse lg:flex-row justify-between border border-brand__gray__border">
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
                    {/* Name validation */}
                    <div>
                      <div className="border-b border-brand__gray__border flex items-center justify-between">
                        <div className="w-full">
                          <input
                            type="text"
                            placeholder="Your name"
                            name="userName"
                            className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
                            {...register("userName", {
                              required: true,
                              maxLength: 30,
                              pattern: /^[A-Za-z ]+$/i,
                            })}
                          />
                        </div>
                      </div>
                      <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                        {errors?.userName?.type && (
                          <AiOutlineWarning size={14} />
                        )}
                        {errors?.userName?.type === "required" && (
                          <small className="py-0.5">Name is required</small>
                        )}
                        {errors?.userName?.type === "maxLength" && (
                          <small className="py-0.5">
                            Name cannot exceed 30 characters
                          </small>
                        )}
                        {errors?.userName?.type === "pattern" && (
                          <small className="py-0.5">
                            Alphabetical characters only
                          </small>
                        )}
                      </div>
                    </div>

                    <br />

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
                              pattern:
                                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z\d]).{6,}$/,
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
                          <AiOutlineWarning size={14} />
                        )}
                        {errors?.password?.type === "required" && (
                          <small className="py-0.5">Password is required</small>
                        )}
                        {errors?.password?.type === "pattern" && (
                          <small className="py-0.5">
                            Use at least 8 characters one uppercase letter one
                            lowercase letter one number and one symbol{" "}
                          </small>
                        )}
                      </div>
                    </div>

                    <div>
                      <Input
                        type="submit"
                        value="Sign up"
                        className="max-w-[150px] w-full mr-auto p-2 mt-8 text-center bg-white border border-brand__gray__border text-primary font-brand__font__semibold rounded-3xl cursor-pointer hover:bg-transparent hover:text-white duration-300 shadow-lg"
                      />
                    </div>
                  </form>
                  <div className="mt-8 text-center">
                    <span>
                      Already have an Account?{" "}
                      <HashLink className="hover:underline" to="/sign-in">
                        Sign In
                      </HashLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[60%] rounded-2xl bg-sign__up__form__background bg-center bg-cover relative h-full flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
              <div className="relative text-white text-brand__font__size__sm md:text-brand__font__size__lg uppercase text-center font-brand__font__family__fancy">
                <p className="py-10">
                  “Traveling – it leaves you speechless,
                  <br /> then turns you into <br /> a storyteller.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpScreen;
