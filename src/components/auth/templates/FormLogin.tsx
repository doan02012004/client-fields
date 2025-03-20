import InputTextAuth from "../components/InputAuth"


const FormLogin = () => {
    return (
        <form className="space-y-4">
            {/* Email */}
            <InputTextAuth
                label='Email'
                type='email'
                placeholder='Nhập email của bạn'
            />

            <InputTextAuth
                label='Password'
                type='password'
                placeholder='Nhập mật khẩu của bạn'
            />

            {/* Button */}
            <div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-white px-4 py-3 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-100 active:bg-indigo-300"
                >
                    Đăng nhập
                </button>
            </div>
        </form>
    )
}

export default FormLogin