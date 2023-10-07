import { lazy, Suspense } from "react";
import Spinner from "../../components/common/Spinner";
import Banner from "./components/Banner";
import Layout from "../../components/common/Layout";
// import Foreigner from "./components/Foreigner";
// import Window from "./components/Window";
// import PopularDestination from "./components/PopularDestination";
// import VideoGallery from "./components/VideoGallery";
// import Faq from "./components/FAQ";
// import Packages from "./components/Packages";
// import PhotoGallery from "./components/PhotoGallery";
// import Testimonial from "./components/Testimonial";

// const Banner = lazy(() => import("./components/Banner"));
const Foreigner = lazy(() => import("./components/Foreigner"));
const Window = lazy(() => import("./components/Window"));
const PopularDestination = lazy(() =>
  import("./components/PopularDestination")
);
const VideoGallery = lazy(() => import("./components/VideoGallery"));
const Faq = lazy(() => import("./components/FAQ"));
const Packages = lazy(() => import("./components/Packages"));
const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
const Testimonial = lazy(() => import("./components/Testimonial"));

const HomeScreen = () => {
  return (
    <Layout title="Home">
      {/* <Suspense fallback={<Spinner />}>
        <Banner />
      </Suspense> */}
      <Banner />

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <Foreigner />
      </Suspense>
      {/* <Foreigner /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <Window />
      </Suspense>
      {/* <Window /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <PopularDestination />
      </Suspense>
      {/* <PopularDestination /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <VideoGallery />
      </Suspense>
      {/* <VideoGallery /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <Faq />
      </Suspense>
      {/* <Faq /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <Packages />
      </Suspense>
      {/* <Packages /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <PhotoGallery />
      </Suspense>
      {/* <PhotoGallery /> */}

      <Suspense
        fallback={
          <Spinner className="h-screen flex flex-col justify-center items-center" />
        }
      >
        <Testimonial />
      </Suspense>
      {/* <Testimonial /> */}
    </Layout>
  );
};

export default HomeScreen;
