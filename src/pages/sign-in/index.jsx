import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import Input from "../../components/UI/Input";

const SignInScreen = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia - Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="h-full lg:h-[92vh] flex flex-col items-center justify-center relative bg-sign__in__form__background bg-center bg-cover py-5">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md"></div>
        <div className="max-w-screen-xl w-full mx-auto p-content__padding h-[600px] relative">
          <div className="w-full h-full mx-auto bg-brand__light__cyan rounded-2xl flex flex-col lg:flex-row justify-between border border-brand__gray__border">
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
                  <div className="flex justify-center items-center gap-x-2 bg-white p-2 w-full rounded-3xl">
                    <FcGoogle size={28} />
                    <span className="font-brand__font__semibold text-black">
                      Login with Google
                    </span>
                  </div>
                  <p className="text-center mt-2">or use your email account</p>
                </div>
                <br />
                <br />
                <div className="relative">
                  <form autoComplete="off">
                    <div className="border-b border-brand__gray__border flex items-center justify-between">
                      <div className="w-full">
                        <Input
                          type="text"
                          placeholder="Email"
                          name="hidden"
                          className="w-full bg-brand__light__cyan py-1.5 pr-1 placeholder:text-white outline-none "
                        />
                      </div>
                      <div>
                        <CiMail size={22} />
                      </div>
                    </div>

                    <br />

                    <div className="border-b border-brand__gray__border flex items-center justify-between">
                      <div className="w-full">
                        <Input
                          type="password"
                          placeholder="Password"
                          name="hidden"
                          className="w-full bg-brand__light__cyan py-1.5 pr-1 placeholder:text-white outline-none"
                        />
                      </div>
                      <div>
                        <AiOutlineEyeInvisible size={22} />
                      </div>
                    </div>

                    <div className="max-w-[150px] w-full mr-auto p-2 mt-8 text-center bg-white text-brand__light__cyan font-brand__font__semibold rounded-3xl">
                      <Input type="submit" value="Sign in" />
                    </div>
                  </form>
                  <div className="absolute bottom-[100px] right-0">
                    <span className="text-brand__font__size__xs">
                      Forgot your password?
                    </span>
                  </div>
                  <div className="mt-8 text-center">
                    <span>
                      Don&rsquo;t have an Account? <span>Sign up</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInScreen;
