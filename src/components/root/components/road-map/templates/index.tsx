
import { Link } from 'react-router-dom'

const RoadMapWebsite = () => {
  return (
    <section className='py-4'>
        <div className='container'>
            <div className='flex items-center gap-4'>
                <div>
                    <Link to={'/'} className='block text-sm text-black'>Trang chủ</Link>
                </div>
                -
                <div>
                  <p className='text-gray-500 text-sm'>Danh sách sân bóng</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RoadMapWebsite