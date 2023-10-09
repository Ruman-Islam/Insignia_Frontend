import { Outlet } from "react-router-dom";
import Layout from "../../components/common/Layout";
import Image from "../../components/UI/Image";
import useContextData from "../../hooks/useContextData";
import { BiEdit } from "react-icons/bi";
import { BsFillPersonFill, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";

const ProfileScreen = () => {
  const { auth } = useContextData();
  const scrollWithOffset = useScrollWithOffset();

  return (
    <Layout title="Profile">
      <section className="h-full">
        <div className="max-w-screen-xl mx-auto p-content__padding h-full py-5">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <aside className="lg:max-w-[255px] w-full h-fit flex-1 bg-white shadow-md rounded-md p-5 lg:sticky lg:top-[116px]">
              <div className="flex items-center justify-between py-3">
                <Image
                  src={auth?.user?.photoUrl}
                  className="w-[96px] rounded-full"
                />
                <div className="text-primary flex items-center gap-x-1 pr-4 font-brand__font__semibold">
                  <BiEdit size={22} />
                  <span className="text-brand__font__size__md">Edit</span>
                </div>
              </div>

              <div className="py-3 flex flex-col gap-y-5 text-brand__detail__text font-brand__font__semibold">
                <HashLink
                  className="flex items-center gap-x-2 hover:text-primary duration-200"
                  to="/profile/personal-info#info"
                  scroll={(el) => scrollWithOffset(el, 135)}
                >
                  <BsFillPersonFill size={22} />
                  <span>Personal Info</span>
                </HashLink>
                <HashLink
                  className="flex items-center gap-x-2 hover:text-primary duration-200"
                  to="/profile/my-bookings"
                >
                  <BsFillBookmarkFill size={22} />
                  <span>My Bookings</span>
                </HashLink>
                <HashLink
                  className="flex items-center gap-x-2 hover:text-primary duration-200"
                  to="/profile/settings"
                >
                  <AiFillSetting size={22} />
                  <span>Settings</span>
                </HashLink>
              </div>
              <div></div>
            </aside>

            <div className="flex-1 w-full bg-white shadow-md rounded-md p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileScreen;
