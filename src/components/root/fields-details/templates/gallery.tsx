
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import { BranchDetailsType } from "../../../../types/api.type";
import { useBranchDetail } from "../../../../libs/zustand/store";

const GallerysFields = ({ data }: { data: BranchDetailsType | null }) => {
  const { image, setImage } = useBranchDetail()


  const onSetImage = (url: string) => {
    setImage(url)
  }
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:sticky lg:top-16">
      {/* Ảnh chính */}
      <div className=" h-[430px] w-full relative shrink-0 md:h-[450px] lg:h-[470px] lg:w-[400px]">
        <img
          src={image || data?.item.images[0]}
          alt="Product Image"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* Slide ảnh */}
      <div className=" shrink-0 w-[320px] h-full relative xl:w-auto">
        <Swiper
          mousewheel={true}   
          slidesPerView={5}
          spaceBetween={20}
          // navigation={{
          //   nextEl: '.button-slide-gallery-details-next',
          //   prevEl: '.button-slide-gallery-details-prev'
          // }}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10,direction: 'horizontal' },
            640: { slidesPerView: 5, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
            1280: { slidesPerView: 4, spaceBetween: 20,  direction:"vertical"   }
          }}
          modules={[Navigation]}
          className="h-auto lg:h-[470px] z-10"
        >
          {
            data?.item?.images?.map((url, index) => (
              <SwiperSlide key={url} >
                <div
                  className={`size-24 relative cursor-pointer border-2 rounded-md overflow-hidden transition-all xl:size-24 ${(image === url || !image && index == 0) ? 'border' : 'border-gray-200 '}`}
                >
                  <img src={url} alt="Thumbnail" className="w-full h-full object-cover" onClick={() => onSetImage(url)} />
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
        {/* <button className=" button-slide-gallery-details-prev absolute z-20 transition-colors duration-300 size-8 top-0 left-1/2 -translate-x-1/2 cursor-pointer rounded-full shadow-md flex justify-center items-center bg-white hover:bg-black hover:text-white"><ChevronLeft /></button>
        <button className=" button-slide-gallery-details-next absolute z-20 transition-colors duration-300 size-8  bottom-0 left-1/2 -translate-x-1/2  cursor-pointer rounded-full shadow-md flex justify-center items-center bg-white hover:bg-black hover:text-white"><ChevronRight /></button> */}
      </div>
    </div>
  );
};

export default GallerysFields;
