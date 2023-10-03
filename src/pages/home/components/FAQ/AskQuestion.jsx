import Input from "../../../../components/UI/Input";
import TextArea from "../../../../components/UI/TextArea";
import { RiProfileLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsCardText } from "react-icons/bs";

const AskQuestion = () => {
  return (
    <div className="lg:max-w-[500px] w-full px-5 py-6 backdrop-blur-md rounded-xl border border-brand__gray__border">
      <div className="mb-4 text-white">
        <h3 className="text-brand__font__size__xl leading-tight">
          Any Question?
        </h3>
        <h3 className="text-brand__font__size__md">
          Don&apos;t worry, we can help.
        </h3>
      </div>

      <div>
        <form>
          <div className="font-brand__font__semibold text-brand__font__size__sm">
            <div className="relative text-gray-600">
              <Input
                type="text"
                placeholder="Your name"
                className="w-full rounded py-3 pl-4 pr-9 border-0 outline-none mb-2 placeholder:text-brand__font__size__sm"
              />

              <RiProfileLine className="absolute top-3 right-2" size={20} />
            </div>
            <div className="relative text-gray-600">
              <Input
                type="text"
                placeholder="Your phone or email"
                className="w-full rounded py-3 pl-4 pr-9 border-0 outline-none mb-2 placeholder:text-brand__font__size__sm"
              />
              <TfiEmail className="absolute top-3 right-2" size={18} />
            </div>

            <div className="relative text-gray-600">
              <TextArea
                type="text"
                rows="6"
                placeholder="Please write your question"
                className="w-full rounded py-3 pl-4 pr-9 border-0 outline-none mb-2 placeholder:text-brand__font__size__sm resize-none"
              />
              <BsCardText className="absolute top-3 right-2" size={20} />
            </div>
            <Input
              type="submit"
              value="Submit"
              className="w-full rounded bg-brand__orange text-white p-2 cursor-pointer hover:bg-primary duration-300 text-brand__font__size__md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
