import { ChevronDown, LockIcon, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

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
    const menuRef = useRef<HTMLUListElement | null>(null)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        if (menuRef.current) {
            console.log('height', menuRef.current.scrollHeight)
            setHeight(menuRef.current.scrollHeight)
        }
    }, [menuRef])

   
    return (
        <section>
            <div className="border rounded border-gray-200 p-4 shadow">
                <div className="flex items-center justify-between pb-5 border-b border-b-gray-200">
                    <div className="flex items-center gap-4">
                        <User className="text-gray-400" />
                        <h5 className="heading-4 text-gray-600">Bùi Văn Đoàn</h5>
                    </div>
                    <ChevronDown className=" lg:hidden" />
                </div>
                <ul ref={menuRef} className="py-2 space-y-6">
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