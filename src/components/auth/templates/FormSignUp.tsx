import InputTextAuth from "../components/InputAuth"


const FormSignUp = () => {
    return (
        <form className="space-y-4">
            {/* Email */}
            <InputTextAuth
                label='Email'
                type='email'
                placeholder='Nhập email của bạn'
            />

            <InputTextAuth
                label='Mật khẩu'
                type='password'
                placeholder='Nhập mật khẩu của bạn'
            />

            <InputTextAuth
                label='Nhập lại mật khẩu'
                type='password'
                placeholder='Nhập lại mật khẩu '
            />

            {/* Button */}
            <div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-white px-4 py-3 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-100 active:bg-indigo-300"
                >
                    Đăng ký
                </button>
            </div>
        </form>
    )
}

export default FormSignUp