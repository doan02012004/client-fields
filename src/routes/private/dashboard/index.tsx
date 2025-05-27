import { Navigate } from "react-router-dom"
import { useAppContext } from "../../../libs/context"
import { message } from "antd"

type PrivateAdminPageProps = {
    children:React.ReactNode
}

const PrivateAdminPage = ({children}:PrivateAdminPageProps) => {
    let check = true
    const {user} = useAppContext()
    if(!user || user.role !== 'admin'){
        check = false
        message.error('Bạn không có quyền truy cập')
    }
  return check? children : <Navigate to={'/'} />
}

export default PrivateAdminPage