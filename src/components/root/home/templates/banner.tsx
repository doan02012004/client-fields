import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const listBanners = [
    {
        url:'/assets/images/sanbong3.jpg',
        content:'Chào mừng bạn đến với Play Pitch'
    },
    {
        url:'/assets/images/sanbong2.jpg',
         content:'Mặt sân bóng chất lượng cao, trải nghiệm tuyệt vời'
    }
]

const BannerHomePage = () => {
    return (
        <section className='container mb-20'>
            <Swiper pagination={true}
             modules={[Pagination,Autoplay]}
             autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              className='h-[450px] md:h-[470px] xl:h-[570px]' >
               {listBanners.map((item) => (
                <SwiperSlide key={item.url} className='h-full w-full'>
                   <div className='h-full w-full relative'>
                     <div className={` h-full w-full cursor-pointer`}>
                        <img src={item.url} alt="" className=' object-cover w-full h-full' />
                    </div>
                    <div className='absolute inset-0'>
                        <div className='absolute left-1/2 -translate-x-1/2 top-6 bg-black/70 px-5 py-2 rounded-xl'>
                         <h2 className='text-white text-base md:text-lg font-semibold'>{item.content}</h2>
                        </div>
                    </div>
                   </div>
                </SwiperSlide>
               ))}
            </Swiper>
        </section>
    )
}

export default BannerHomePage