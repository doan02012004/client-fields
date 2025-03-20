import { HeartIcon, ListIcon, MenuIcon, User } from "lucide-react"
import { useAppContext } from "../../../../../../../libs/context"


const HeaderActions = () => {
    const {setOpenMenuHeader,setOpenTodayField} = useAppContext()
    return (
        <div className='flex items-center gap-8 lg:gap-6'>
            <span className="  text-gray-700 transition-colors cursor-pointer hidden  duration-300 hover:text-black lg:block">
                <HeartIcon />
            </span>
            <span className="  text-gray-700 transition-colors cursor-pointer hidden  duration-300 hover:text-black lg:block">
                <User />
            </span>
            <div onClick={() => setOpenTodayField(true)} className=" relative text-gray-700 transition-colors cursor-pointer  duration-300 hover:text-black">
                <ListIcon />
                <span className=" absolute -top-2 -right-3 size-5 rounded-full bg-yellow-300 text-black text-xs font-bold flex justify-center items-center">
                    2
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