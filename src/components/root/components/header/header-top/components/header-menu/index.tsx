
import { Link } from 'react-router-dom'


const HeaderMenu = () => {
    return (
        <div className={` w-72 px-4 pt-5  bg-white hidden  lg:translate-x-0 lg:transition-none lg:block xl:px-0 md:pt-2 lg:w-auto`}>
            <ul className='flex flex-col  gap-6 lg:items-center lg:flex-row'>
                <li className="group relative uppercase font-semibold text-xs">
                    <Link to={"/"} className="relative text-gray-700 transition hover:text-black">
                        Trang chủ
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                {/* <li className="group relative uppercase font-semibold text-xs">
                    <Link to={"/list-fields"} className="relative text-gray-700 transition hover:text-black">
                        Sân bóng
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li> */}
                <li className="group relative uppercase font-semibold text-xs">
                    <Link to={"/"} className="relative text-gray-700 transition hover:text-black">
                        Bài viết
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li className="group relative uppercase font-semibold text-xs">
                    <Link to={"/"} className="relative text-gray-700 transition hover:text-black">
                        Liên hệ
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenu