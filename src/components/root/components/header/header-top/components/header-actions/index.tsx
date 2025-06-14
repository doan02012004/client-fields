import { HeartIcon, ListIcon, MenuIcon, SearchIcon, User } from "lucide-react"
import { useAppContext } from "../../../../../../../libs/context"
import { useNavigate } from "react-router-dom";
import { LogoutFn } from "../../../../../../../libs/data/auth";
import { message } from "antd";


const HeaderActions = () => {
    const { setOpenMenuHeader, setOpenTodayField, user,setAccessToken,setUser,orderFields } = useAppContext()
    const navigate = useNavigate()
    const onHandleUser = () => {
        if (!user) {
            navigate('/auth/login')
        }
    }

    const onLogout = async() => {
        try {
            const res = await LogoutFn()
            if(res && res.success){
                setAccessToken(null)
                setUser(null)
                window.location.reload()
            }
        } catch (error) {
            message.error("Đăng xuất thất bại")
            console.log("error-logout",error)
        }
    }
    return (
        <div className='flex items-center gap-8 lg:gap-6'>
            <span className="  text-gray-700 transition-colors cursor-pointer hidden  duration-300 hover:text-black lg:block">
                <SearchIcon />
            </span>
            <span className="  text-gray-700 transition-colors cursor-pointer hidden  duration-300 hover:text-black lg:block">
                <HeartIcon />
            </span>
            <div className="relative group">
                <span
                    onClick={() => onHandleUser()}
                    className="relative text-gray-700 transition-colors cursor-pointer hidden duration-300 hover:text-black lg:block"
                >
                    <User />
                </span>
                {user && (
                    <div className="absolute hidden right-0 z-10 group-hover:block">
                        <ul className="py-2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            {
                                user.role === 'admin' && (
                                    <li onClick={() => navigate('/admin')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Quản trị Admin
                                    </li>
                                )
                            }
                            <li onClick={() => navigate('/customer/info')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Thông tin tài khoản
                            </li>
                            <li onClick={() => navigate('/customer/order_list')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Lịch sử đặt sân
                            </li>
                            
                            <li onClick={()=> onLogout()} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                                Đăng xuất
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div onClick={() => setOpenTodayField(true)} className=" relative text-gray-700 transition-colors cursor-pointer  duration-300 hover:text-black">
                <ListIcon />
                <span className=" absolute -top-2 -right-3 size-5 rounded-full bg-yellow-300 text-black text-xs font-bold flex justify-center items-center">
                   {orderFields?.length ?? 0}
                </span>
            </div>
            <span onClick={() => setOpenMenuHeader(true)} className=" text-gray-700 transition-colors cursor-pointer  duration-300 hover:text-black lg:hidden">
                <MenuIcon />
            </span>
            {/* <button className='px-4 py-2  cursor-pointer transition-colors duration-300 rounded-md border text-white border-black bg-black hover:bg-white hover:text-black'>Đăng nhập</button> */}
        </div>
    )
}

export default HeaderActions