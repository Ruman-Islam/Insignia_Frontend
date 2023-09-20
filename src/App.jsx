import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import ProfileScreen from "./pages/profile";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import NotFoundScreen from "./pages/not-found";
import Header from "./components/Header";
import ScrollToTop from "./hooks/UseAutoScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        {publicRoutes.map(({ path, name, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />}>
            {privateRoutes.map(({ path, name, Component }) => (
              <Route
                key={name}
                path={path}
                index={name === "personal-info"}
                element={<Component />}
              />
            ))}
          </Route>
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
