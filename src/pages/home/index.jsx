// import { lazy, Suspense } from "react";
import Banner from "./components/Banner";
import { Helmet } from "react-helmet";
import Foreigner from "./components/Foreigner";
import Window from "./components/Window";
import PopularDestination from "./components/PopularDestination";
import VideoGallery from "./components/VideoGallery";
import Faq from "./components/FAQ";
import Packages from "./components/Packages";
import PhotoGallery from "./components/PhotoGallery";
import Testimonial from "./components/Testimonial";

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

      <Window />

      <PopularDestination />

      <VideoGallery />

      <Packages />

      <Testimonial />

      <PhotoGallery />

      <Faq />
    </>
  );
};

export default HomeScreen;
