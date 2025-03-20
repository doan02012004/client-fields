
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className={`bg-[url('/assets/images/messi_auth.jpg')] bg-center bg-cover bg-no-repeat min-h-screen w-full relative`}>
            <div className='absolute top-1/2 -translate-y-1/2 bg-white/20 left-1/2 -translate-x-1/2 backdrop-blur-md  min-h-96 px-6 py-4 w-[350px] md:min-w-96 border-[2px] border-white rounded-md md:left-auto md:translate-x-0 md:right-20 lg:right-30'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout