import { Link } from "react-router-dom"
import FormLogin from "../../../components/auth/templates/FormLogin"


const LoginPage = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-full ">
                <h2 className="mb-6 text-center text-2xl font-bold text-black">
                    Đăng nhập
                </h2>
                <FormLogin />
                {/* Link Đăng ký */}
                <p className="my-4 text-center text-sm text-white">
                    Chưa có tài khoản?{" "}
                    <Link to="/auth/signup" className="font-semibold block text-yellow-300 hover:text-yellow-400">
                        Đăng ký ngay
                    </Link>
                </p>
                <Link to={'/'} className="block text-blue-600 text-center underline">
            Quay lại trang chủ
        </Link>
            </div>
        </div>
    )
}

export default LoginPage