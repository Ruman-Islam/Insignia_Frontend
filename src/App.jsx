import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Layout from "./layout/Layout";
import ProfileScreen from "./pages/profile";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";

function App() {
  return (
    <Layout>
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
      </Routes>
    </Layout>
  );
}

export default App;
