import { useState } from "react";
import { videoGalleryData } from "../../../../constants/common";

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videoGalleryData[0]);

  return (
    <section className="py-16">
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto p-content__padding">
          <iframe
            className="rounded-3xl aspect-video w-full h-full"
            src={`${currentVideo}?controls=0&rel=0`}
            allow="autoplay"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div>
          <h3 className="py-4 text-brand__font__size__lg font-brand__font__semibold">
            Travelers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {videoGalleryData?.slice(0, 4).map((item, index) => {
              return (
                <div
                  onClick={() => setCurrentVideo(item)}
                  key={index}
                  className="relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black before:bg-opacity-0 cursor-pointer"
                >
                  <iframe
                    className="rounded-xl aspect-video w-full h-full"
                    src={`${item}?controls=0&rel=0`}
                    allowfullscreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="py-4 text-brand__font__size__lg font-brand__font__semibold">
            Destination
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {videoGalleryData?.slice(0, 4).map((item, index) => {
              return (
                <div
                  onClick={() => setCurrentVideo(item)}
                  key={index}
                  className="relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black before:bg-opacity-0 cursor-pointer"
                >
                  <iframe
                    className="rounded-xl aspect-video w-full h-full"
                    src={`${item}?controls=0&rel=0`}
                    allowfullscreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
