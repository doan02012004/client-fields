
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className={`bg-gray-200 flex justify-center items-center min-h-screen w-full px-3 py-8 lg:p-0 `}>
            <div className=' bg-white  min-h-96 px-6 py-4 w-full  lg:max-w-2xl md:min-w-96 border-[2px] border-white rounded-md'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout