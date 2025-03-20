import React from 'react'
import { Link } from 'react-router-dom'

type MenuMobileItemProps = {
    to: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any,
}
const MenuMobileItem = ({ to, icon }: MenuMobileItemProps) => {
    return (
        <Link to={to} className=" cursor-pointer items-center text-gray-600 transition hover:text-black">
            {icon}
        </Link>
    )
}

export default MenuMobileItem