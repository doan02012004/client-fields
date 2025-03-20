import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerysFields = () => {
  const [selectedImage, setSelectedImage] = useState('https://picsum.photos/id/30/500/470');

  return (
    <div className="flex flex-col items-center gap-4 lg:sticky lg:top-16">
      {/* Ảnh chính */}
      <div className="w-full h-96 relative md:h-[450px] lg:h-[470px]">
        <img
          src={selectedImage}
          alt="Product Image"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* Slide ảnh */}
      <div className=" h-max max-w-sm relative sm:max-w-md md:max-w-xl lg:max-w-sm xl:max-w-lg ">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          navigation={{
            nextEl:'.button-slide-gallery-details-next',
            prevEl:'.button-slide-gallery-details-prev'          
          }}
          breakpoints={{
            320: { slidesPerView: 4, spaceBetween: 10 },
            640: { slidesPerView: 5, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
            1280: { slidesPerView: 5, spaceBetween: 20 }
          }}
          modules={[Navigation]}
          className="w-full z-10"
        >
          <SwiperSlide >
            <div
              className={`size-full relative cursor-pointer border-2 rounded-md overflow-hidden transition-all `}
            >
              <img src={'https://picsum.photos/id/30/100/100'} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className={`size-full relative cursor-pointer border-2 rounded-md overflow-hidden transition-all `}
            >
              <img src={'https://picsum.photos/id/30/100/100'} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className={`size-full relative cursor-pointer border-2 rounded-md overflow-hidden transition-all `}
            >
              <img src={'https://picsum.photos/id/30/100/100'} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className={`size-full relative cursor-pointer border-2 rounded-md overflow-hidden transition-all `}
            >
              <img src={'https://picsum.photos/id/30/100/100'} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className={`size-full relative cursor-pointer border-2 rounded-md overflow-hidden transition-all `}
            >
              <img src={'https://picsum.photos/id/30/100/100'} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className={`size-full relative cursor-pointer border-2 rounded-md overflow-hidden transition-all `}
            >
              <img src={'https://picsum.photos/id/30/100/100'} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
        <button className=" button-slide-gallery-details-prev absolute z-20 transition-colors duration-300 size-8 -left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full shadow-md flex justify-center items-center bg-white hover:bg-black hover:text-white"><ChevronLeft /></button>
        <button className=" button-slide-gallery-details-next absolute z-20 transition-colors duration-300 size-8 -right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full shadow-md flex justify-center items-center bg-white hover:bg-black hover:text-white"><ChevronRight /></button>
      </div>
    </div>
  );
};

export default GallerysFields;
