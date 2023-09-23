import HomeScreen from "../pages/home";
import PackageDetailScreen from "../pages/package-detail";
import SignInScreen from "../pages/sign-in";
import SignUpScreen from "../pages/sign-up";

export const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  {
    path: "/package-detail/:id",
    name: "package-detail",
    Component: PackageDetailScreen,
  },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
  { path: "/sign-up", name: "sign-up", Component: SignUpScreen },
];
