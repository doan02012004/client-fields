import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const listBanners = [
    {
        url:'https://picsum.photos/id/20/1500/500'
    },
    {
        url:'https://picsum.photos/id/21/1500/500'
    },
    {
        url:'https://picsum.photos/id/22/1500/500'
    },
    {
        url:'https://picsum.photos/id/23/1500/500'
    },
    {
        url:'https://picsum.photos/id/24/1500/500'
    },
]

const BannerHomePage = () => {
    return (
        <section className='container mb-8'>
            <Swiper pagination={true}
             modules={[Pagination,Autoplay]}
             autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              className='h-[500px]' >
               {listBanners.map((item) => (
                <SwiperSlide className='h-full w-full'>
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