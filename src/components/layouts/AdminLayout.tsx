import { Outlet } from "react-router-dom"
import HeaderAdmin from "../dashboard/components/header/templates"
import FooterAdminTemplates from "../dashboard/components/footer/templates"


const AdminLayout = () => {
  return (
    <div className="bg-gray-200">
        <HeaderAdmin />
        <div className=" min-h-screen container ">
        <Outlet />
        </div>
        <FooterAdminTemplates />
    </div>
  )
}

export default AdminLayout