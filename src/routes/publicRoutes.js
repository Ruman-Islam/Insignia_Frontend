import PackagesListScreen from "../pages/Packages";
import AboutUsScreen from "../pages/about-us";
import ContactUsScreen from "../pages/contact-us";
import GalleryScreen from "../pages/gallery";
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
  {
    path: "/contact-us",
    name: "contact-us",
    Component: ContactUsScreen,
  },
  {
    path: "/about-us",
    name: "about-us",
    Component: AboutUsScreen,
  },
  {
    path: "/tour-list",
    name: "tour-list",
    Component: PackagesListScreen,
  },
  {
    path: "/gallery",
    name: "gallery",
    Component: GalleryScreen,
  },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
  { path: "/sign-up", name: "sign-up", Component: SignUpScreen },
];
