import { useForm } from "react-hook-form"
import InputTextAuth from "../components/InputAuth"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, TypeLoginSchema } from "../../../libs/schemas/auth"
import { message } from "antd"
import { LoginFn } from "../../../libs/data/auth"
import { useAppContext } from "../../../libs/context"


const FormLogin = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<TypeLoginSchema>({
        resolver: zodResolver(loginSchema) ,
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const {setAccessToken,setUser} = useAppContext()

    const onSubmit = async(data: TypeLoginSchema) => {
       try {
        const result = await LoginFn(data)
        if (result) {
            console.log(result)
            setAccessToken(result.accessToken)
            setUser(result.user)
            message.success("Đăng nhập thành công")
            window.location.href = '/'
        }
       } catch (error) {
        console.log(error)
        message.error("Đăng nhập không thành công")
       }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <InputTextAuth
                label='Email'
                type='email'
                placeholder='Nhập email của bạn'
                register={register}
                error={errors?.email}
                field="email"
            />

            <InputTextAuth
                register={register}
                label='Password'
                type='password'
                placeholder='Nhập mật khẩu của bạn'
                error={errors?.password}
                field="password"
            />

            {/* Button */}
            <div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-white border border-gray-200 cursor-pointer px-4 py-3 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-100 active:bg-indigo-300"
                >
                    Đăng nhập
                </button>
            </div>
        </form>
    )
}

export default FormLogin