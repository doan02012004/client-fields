import { ChevronDown, LockIcon, User } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import useIsMobile from "../../../../../libs/hooks/useIsMobile"
import { useAppContext } from "../../../../../libs/context"

const menu = [
    {
        label:"Thông tin tài khoản",
        link:'/customer/info',
        icon:<LockIcon size={16} />
    },
    {
        label:"Lịch sử đặt sân",
        link:'/customer/order_list',
        icon:<LockIcon size={16} />
    },
    {
        label:"Hỗ trợ",
        link:'/customer/support',
        icon:<LockIcon size={16} />
    },
]

const SidebarCustomer = () => {
    const {user} = useAppContext()
    const [openMenu,setOpenMenu]  = useState(false)
    const isMobile = useIsMobile()


    const onHandleOpenMenu = (isMobile:boolean) => {
        if(!isMobile) return
        setOpenMenu(!openMenu)
    }

    return (
        <section>
            <div className="border rounded bg-white border-gray-200 px-4 pt-4 shadow">
                <div className="flex items-center justify-between pb-5 border-b border-b-gray-200">
                    <div onClick={() => onHandleOpenMenu(isMobile)} className="flex items-center gap-4 w-full cursor-pointer lg:cursor-auto">
                        <User className="text-gray-400" />
                        <h5 className="heading-5 lg:heading-4 text-gray-600">{user? user.name: "PlayPitch"}</h5>
                    </div>
                    <ChevronDown onClick={() => onHandleOpenMenu(isMobile)} className={`${openMenu && "rotate-180"} transition-all duration-300 cursor-pointer lg:cursor-auto lg:hidden`} />
                </div>
                <ul className={`
                space-y-6 overflow-hidden transition-all duration-300 
                ${isMobile ? `${openMenu ? `py-3 h-44`: 'py-0 h-0'}`
                : `h-auto py-3`}
                      `} >
                    {
                        menu.map((item) => (

                            <li key={item.label}><NavLink to={item.link}  className={({ isActive }) =>
                                `flex items-center gap-3 font-medium transition-colors whitespace-nowrap ${
                                  isActive ? "text-black font-semibold" : "text-gray-600 hover:text-gray-800"
                                }`
                              }>{item.icon} {item.label}</NavLink></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default SidebarCustomer