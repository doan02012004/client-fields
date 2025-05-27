
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../../../libs/context'
import { X } from 'lucide-react'
import BackgroundOpacity from '../../backgroud-opacity'

const MenuMobile = () => {
    const { openMenuHeader, setOpenMenuHeader } = useAppContext()
    return (
        <div className='lg:hidden'>
            <div className={`fixed inset-y-0 z-50 w-72 px-4 pt-5 right-0 h-full bg-white ${openMenuHeader ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-transform duration-300 ease-in-out lg:static lg:p-0 lg:inset-auto lg:h-auto lg:translate-x-0 lg:transition-none lg:opacity-100 lg:w-auto`}>
                <div className='flex justify-between items-center mb-6 lg:hidden'>
                    <h3 className='font-bold text-xl'>Menu</h3>
                    <X size={30} onClick={() => setOpenMenuHeader(false)} className=' cursor-pointer text-gray-600 hover:text-black' />
                </div>
                <ul className='flex flex-col  gap-6 mb-20 lg:items-center lg:flex-row'>
                    <li className="group relative uppercase font-semibold text-sm">
                        <Link to={"/"} className="relative text-gray-700 transition hover:text-black">
                            Trang chủ
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    {/* <li className="group relative uppercase font-semibold text-sm">
                        <Link to={"/list-fields"} className="relative text-gray-700 transition hover:text-black">
                            Sân bóng
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li> */}
                    <li className="group relative uppercase font-semibold text-sm">
                        <Link to={"/"} className="relative text-gray-700 transition hover:text-black">
                            Bài viết
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="group relative uppercase font-semibold text-sm">
                        <Link to={"/"} className="relative text-gray-700 transition hover:text-black">
                            Liên hệ
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
                <button className='w-full btn-primary py-2 uppercase'>Đăng Xuất</button>
            </div>
            <div className=" lg:hidden">
                {openMenuHeader && (
                    <BackgroundOpacity />
                )}
            </div>
        </div>

    )
}

export default MenuMobile