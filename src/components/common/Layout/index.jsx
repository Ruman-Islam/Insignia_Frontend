/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";
import useRefreshToken from "../../../hooks/useRefreshToken";
import useAuth from "../../../hooks/useAuth";

const Layout = ({ children, title }) => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      }
    };

    !auth?.accessToken && verifyRefreshToken();
  }, [auth?.accessToken, refresh]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? "Insignia | " + title : "Insignia"}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
