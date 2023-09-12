import HomeScreen from "../pages/home";
import SignInScreen from "../pages/sign-in";
import SignUpScreen from "../pages/sign-up";

export const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
  { path: "/sign-up", name: "sign-up", Component: SignUpScreen },
];
