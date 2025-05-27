
import { Outlet } from 'react-router-dom'
import Header from '../root/components/header/header-top/templates'
import HeaderMobile from '../root/components/header/header-mobile'
import Footer from '../root/components/footer/templates'
import MenuMobile from '../root/components/header/menu-mobile'
import TodayField from '../root/components/today-field/templates'


const RootLayout = () => {
    return (
        <div className='mb-16 bg-gray-100 lg:mb-0'>
            <Header />
            <div className='pt-20 lg:pt-[100px]'>
                <Outlet />
            </div>
            <HeaderMobile />
            <MenuMobile />
            <TodayField />
            <Footer />

        </div>
    )
}

export default RootLayout