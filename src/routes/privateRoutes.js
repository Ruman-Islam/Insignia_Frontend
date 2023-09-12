import PersonalInfo from "../pages/profile/components/PersonalInfo";

export const privateRoutes = [
  { name: "personal-info", Component: PersonalInfo },
  { path: "personal-info", name: "personal-info", Component: PersonalInfo },
];
