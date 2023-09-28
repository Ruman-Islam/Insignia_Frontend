import Image from "../../../../components/UI/Image";
import { photoGalleryData } from "../../../../constants/common";

const PhotoGallery = () => {
  return (
    <section className="pb-20 mt-16 bg-photo__gallery__background bg-center bg-cover bg-fixed relative">
      <div className="absolute top-0 left-0 right-0 bottom-0  backdrop-blur-sm"></div>
      <div className="max-w-screen-xl mx-auto p-content__padding relative">
        <div className="py-5 lg:py-10 w-full text-white">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b pr-3 w-fit">
            Photos from Travelers
          </h2>
          <h3 className="text-brand__font__size__md mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cupiditate iure!
          </h3>
        </div>

        <div
          id="photo-gallery"
          className="p-4 border rounded-xl shadow-md bg-white"
        >
          <div className="columns-1 gap-5 lg:gap-3 md:columns-2 lg:columns-3 xl:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-3">
            {photoGalleryData.map((item, i) => (
              <Image
                key={i}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
