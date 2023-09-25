import { BiHome } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { GrGallery, GrContactInfo } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { BsFillTagsFill } from "react-icons/bs";

export const navItems = [
  { title: "home", route: "/", Icon: BiHome },
  { title: "packages", route: "/#package-section", Icon: GoPackage },
  { title: "gallery", route: "/#photo-gallery", Icon: GrGallery },
  { title: "about us", route: "/about-us", Icon: GrContactInfo },
  { title: "contact us", route: "/contact-us", Icon: IoMdContacts },
];

export const dropdownNavItems = [
  { title: "foreigner", route: "/" },
  { title: "bangladesh", route: "/" },
  { title: "india", route: "/" },
  { title: "nepal", route: "/" },
];

export const userMenuDropdownLinks = [
  { title: "Profile", route: "/", Icon: CgProfile },
  { title: "My Booking", route: "/", Icon: BsFillTagsFill },
  { title: "Sign out", route: "/", Icon: CgLogOut },
];
