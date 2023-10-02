import Image from "../../../../components/UI/Image";
import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";
import { photoGalleryData } from "../../../../constants/common";

const PhotoGallery = () => {
  return (
    <section className="pb-2 bg-photo__gallery__background bg-center bg-cover bg-fixed relative">
      <div className="absolute top-0 left-0 right-0 bottom-0  backdrop-blur-sm"></div>
      <div className="max-w-screen-xl mx-auto p-content__padding relative">
        <div className="py-5 lg:py-10 w-full text-white text-center">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b">
            Photos from Travelers
          </h2>
          <h3 className="mt-1">
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
        <div className="mt-6 mb-5 w-fit mx-auto">
          <ViewMoreBtn
            route="/tour-list"
            className="text-white border hover:bg-brand__cyan hover:text-white hover:border-brand__cyan"
          >
            <span>view more</span>
          </ViewMoreBtn>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
