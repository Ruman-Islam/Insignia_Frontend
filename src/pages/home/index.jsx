// import { lazy, Suspense } from "react";
import Banner from "./components/Banner";
import { Helmet } from "react-helmet";
import Foreigner from "./components/Foreigner";

// const Banner = lazy(() => import("./components/Banner"));

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <Suspense fallback={<h1>Loading</h1>}>
        <Banner />
      </Suspense> */}

      <Banner />

      <Foreigner />
    </>
  );
};

export default HomeScreen;
