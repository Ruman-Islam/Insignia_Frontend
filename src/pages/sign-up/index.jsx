import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { GoPeople } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "../../components/UI/Input";

const SignUpScreen = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia - Sign up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="h-full lg:h-[92vh] flex flex-col items-center justify-center bg-sign__up__form__background bg-center bg-cover relative py-5">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md"></div>
        <div className="max-w-screen-xl w-full mx-auto p-content__padding h-[600px] relative">
          <div className="w-full h-full mx-auto bg-brand__light__cyan rounded-2xl flex flex-col-reverse lg:flex-row justify-between border border-brand__gray__border">
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
                          placeholder="Your name"
                          name="hidden"
                          className="w-full bg-brand__light__cyan py-1.5 pr-1 placeholder:text-white outline-none "
                        />
                      </div>
                      <div>
                        <GoPeople size={22} />
                      </div>
                    </div>

                    <br />
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
                      <Input type="submit" value="Sign up" />
                    </div>
                  </form>
                  <div className="mt-8 text-center">
                    <span>
                      Already have an Account? <span>Sign In</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[60%] rounded-2xl bg-sign__up__form__background bg-center bg-cover relative h-full flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
              <div className="relative text-white text-brand__font__size__lg uppercase text-center font-brand__font__family__fancy">
                <p>
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
