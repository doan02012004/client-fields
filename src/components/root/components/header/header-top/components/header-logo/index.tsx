import { Link } from "react-router-dom"


const HeaderLogo = () => {
  return (
    <div className=" shrink-0">
      <Link to={'/'}>
        <h1 className='font-extrabold text-2xl/normal'>
          PlayPitch
        </h1>
      </Link>
    </div>
  )
}

export default HeaderLogo