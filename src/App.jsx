import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import ProfileScreen from "./pages/profile";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import NotFoundScreen from "./pages/not-found";
import Header from "./components/Header";
import ScrollToTop from "./hooks/UseAutoScrollToTop";
import Footer from "./components/Footer";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        {publicRoutes.map(({ path, name, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
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
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
