import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const listBanners = [
    {
        url:'/assets/images/sanbong3.jpg'
    },
    {
        url:'/assets/images/sanbong2.jpg'
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
                    <div className={`block h-full w-full cursor-pointer`}>
                        <img src={item.url} alt="" className=' object-cover w-full h-full' />
                    </div>
                </SwiperSlide>
               ))}
            </Swiper>
        </section>
    )
}

export default BannerHomePage