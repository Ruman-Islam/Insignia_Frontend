// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../components/common/Layout";

const ProfileScreen = () => {
  // const axiosPrivate = useAxiosPrivate();
  // const navigate = useNavigate();
  // const location = useLocation();

  // Testing purpose
  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUsers = async () => {
  //     try {
  //       const response = await axiosPrivate.get("/user/test", {
  //         signal: controller.signal,
  //       });
  //       isMounted && console.log(response);
  //     } catch ({ response }) {
  //       if (response?.status === 403) {
  //         navigate("/sign-in", { state: { from: location }, replace: true });
  //       }
  //     }
  //   };
  //   getUsers();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, [axiosPrivate, location, navigate]);

  return (
    <Layout title="Profile">
      <section className="h-screen">
        <div className="max-w-screen-xl mx-auto p-content__padding border border-brand__navy__blue h-full">
          <div className="flex justify-between items-center">
            <button>sidebar</button>
            <Outlet />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileScreen;
