
import { Outlet, useNavigate } from 'react-router-dom'
import SidebarCustomer from '../root/customer/components/sidebar-customer'
import { useAppContext } from '../../libs/context'
import { useEffect } from 'react'

const CustomerLayout = () => {
    const {user} = useAppContext()
    const navigate = useNavigate()
    useEffect(() => {
        if(!user){
            navigate('/auth/login',{replace:true})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    return (
        <div>
            <div className='container'>
                <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
                    <SidebarCustomer />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default CustomerLayout