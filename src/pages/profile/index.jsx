import { Outlet } from "react-router-dom";

const ProfileScreen = () => {
  return (
    <div>
      <div>
        sidebar
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileScreen;
