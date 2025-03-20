import React from 'react'
import { Link } from 'react-router-dom'

const NavLinkHeaderAdmin = () => {
  return (
    <nav>
    <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">
            <Link to="/admin">Thống kê</Link>
        </li>
        <li className="hover:underline cursor-pointer">
            <Link to="/admin/fields">Sân bóng</Link>
        </li>
        <li className="hover:underline cursor-pointer">
            <Link to="/admin/users">Người dùng</Link>
        </li>
    </ul>
</nav>
  )
}

export default NavLinkHeaderAdmin