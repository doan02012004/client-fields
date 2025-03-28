import { Headphones } from 'lucide-react'

import { Link } from 'react-router-dom'

const ActionsFieldBlog = () => {
    return (
        <div className='col-span-12  h-max  space-y-4 xl:sticky xl:top-16 xl:col-span-2'>
           <Link to={'/fields-details/hello'} className='block'>
           <button className='btn-primary-green w-full py-3 '>Đặt sân ngay</button>
           </Link>
            <button className='btn-secondary w-full py-3 flex items-center gap-2  justify-center'><Headphones />Liên hệ</button>
        </div>
    )
}

export default ActionsFieldBlog