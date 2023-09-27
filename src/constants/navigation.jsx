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
  { title: "bangladesh", route: "/tour-list?country=bangladesh" },
  { title: "india", route: "/tour-list?country=india" },
  { title: "nepal", route: "/tour-list?country=nepal" },
  { title: "foreigner", route: "/tour-list?country=foreigner" },
];

export const userMenuDropdownLinks = [
  { title: "Profile", route: "/", Icon: CgProfile },
  { title: "My Booking", route: "/", Icon: BsFillTagsFill },
  { title: "Sign out", route: "/", Icon: CgLogOut },
];
