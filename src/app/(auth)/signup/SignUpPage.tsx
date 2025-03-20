import { Link } from "react-router-dom"
import FormSignUp from "../../../components/auth/templates/FormSignUp"


const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center ">
    <div className="w-full ">
        <h2 className="mb-6 text-center text-2xl font-bold text-black">
            Đăng ký
        </h2>
        <FormSignUp />
        {/* Link Đăng ký */}
        <p className="my-4 text-center text-sm text-white">
            <Link to="/auth/login" className="font-semibold text-yellow-300 hover:text-yellow-400">
                Đăng nhập
            </Link>
        </p>
        <Link to={'/'} className="block text-blue-600 text-center underline">
            Quay lại trang chủ
        </Link>
    </div>
</div>
  )
}

export default SignUpPage