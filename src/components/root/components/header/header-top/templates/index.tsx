import { useEffect, useState } from "react"
import HeaderActions from "../components/header-actions"
import HeaderLogo from "../components/header-logo"
import HeaderMenu from "../components/header-menu"
import HeaderSearch from "../components/header-search"


const Header = () => {
  const [visibleHeader, setVisibleHeader] = useState(true)
  const [currentView, setCurrentView] = useState<number>(0)
  useEffect(() => {
    const onHandleVisibleHeader = () => {
      const positionTop = document.body.getBoundingClientRect().top
      if (positionTop > currentView) {

        setVisibleHeader(true)
        return setCurrentView(positionTop)
      }

      if (positionTop < currentView) {
        setVisibleHeader(false)
        return setCurrentView(positionTop)
      }
    }
    document.addEventListener('scroll', onHandleVisibleHeader)

    return () => {
      document.removeEventListener('scroll', onHandleVisibleHeader)
    }
  }, [visibleHeader, currentView])
  return (
    <header className={`fixed top-0 ${visibleHeader ? 'translate-y-0' : '-translate-y-full'} z-40 bg-white w-full inset-x-0 transition-transform duration-300 ease-in-out `}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-4 gap-14'>
          <HeaderMenu />
          <HeaderLogo />
          <HeaderActions />
        </div>
      </div>

    </header>
  )
}

export default Header