import { Link } from "react-router-dom"


const HeaderLogo = () => {
  return (
    <div>
    <Link to={'/'}>
      <h1 className='font-extrabold text-2xl'>
       Logo
      </h1>
    </Link>
  </div>
  )
}

export default HeaderLogo