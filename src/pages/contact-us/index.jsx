import { RiProfileLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsCardText } from "react-icons/bs";
import Input from "../../components/UI/Input";
import TextArea from "../../components/UI/TextArea";

const ContactUsScreen = () => {
  return (
    <section className="lg:h-[92vh] flex flex-col justify-center">
      <div className="max-w-screen-xl w-full mx-auto p-content__padding flex flex-col justify-center items-center">
        <div className="w-full h-[400px] border">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.041193892314!2d90.39749967600932!3d23.78154738757875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1695626580145!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
          />
        </div>

        <div className="bg-white w-full flex flex-col md:flex-row gap-5  justify-between items-center lg:h-[40vh]">
          <div className="flex-1">
            <div className="max-w-[500px] mx-auto p-content__padding">
              <div>
                <h5 className="text-brand__font__size__xl font-brand__font__semibold font-brand__font__family__fancy">
                  MEET US
                </h5>
                <p className="text-brand__font__size__sm">
                  A simple but effective use of flat design for the contact us
                  page. There is a short introduction, an address and a contact
                  us form to allow the website to receive message. The map
                  header works great as well as a concept.
                </p>
              </div>
              <br />
              <div>
                <h5 className="underline">Location</h5>
                <h6>Random Location, 51/3. Dhaka</h6>
                <h6>example@gmail.com</h6>
                <h6>01758947856</h6>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="max-w-[450px] w-full mx-auto px-5 pt-10 pb-2 bg-brand__ash border lg:absolute left-0 right-0 -bottom-44 shadow-lg">
              <div className="mb-4">
                <h3 className="text-brand__font__size__lg leading-tight">
                  Contact form
                </h3>
              </div>

              <div>
                <form>
                  <div className="font-brand__font__semibold text-brand__font__size__sm">
                    <div className="relative text-gray-600">
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded py-3 pl-4 pr-9 border outline-none mb-2 placeholder:text-brand__font__size__sm"
                      />

                      <RiProfileLine
                        className="absolute top-3 right-2"
                        size={20}
                      />
                    </div>
                    <div className="relative text-gray-600">
                      <Input
                        type="text"
                        placeholder="Your phone or email"
                        className="w-full rounded py-3 pl-4 pr-9 border outline-none mb-2 placeholder:text-brand__font__size__sm"
                      />
                      <TfiEmail className="absolute top-3 right-2" size={18} />
                    </div>

                    <div className="relative text-gray-600">
                      <TextArea
                        type="text"
                        rows="6"
                        placeholder="Please write your question"
                        className="w-full rounded py-3 pl-4 pr-9 border outline-none mb-2 placeholder:text-brand__font__size__sm resize-none"
                      />
                      <BsCardText
                        className="absolute top-3 right-2"
                        size={20}
                      />
                    </div>
                    <Input
                      type="submit"
                      value="Submit"
                      className="w-full rounded bg-brand__orange text-white p-2 cursor-pointer hover:bg-brand__cyan duration-300 text-brand__font__size__md"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsScreen;
