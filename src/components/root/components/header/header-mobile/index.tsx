import { HeartIcon, HomeIcon, MessageSquare, UserIcon } from "lucide-react"
import MenuMobileItem from "./components/menu-mobile-item"


const HeaderMobile = () => {
    return (
        <div className=" fixed z-30 px-3 pb-5 pt-3 bottom-0 inset-x-0 bg-white border-t border-t-gray-100 lg:hidden">
            <div className=" flex justify-between items-center w-3/4 mx-auto">
                <MenuMobileItem to="/" icon={<HomeIcon className="h-6 w-6" />} />
                <MenuMobileItem to="/cart" icon={<HeartIcon className="h-6 w-6" />} />
                <MenuMobileItem to="/contact" icon={<MessageSquare className="h-6 w-6" />} />
                <MenuMobileItem to="/customer/info" icon={<UserIcon className="h-6 w-6" />} />
            </div>
        </div>
    )
}

export default HeaderMobile