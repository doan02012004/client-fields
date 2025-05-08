import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, TypeRegisterSchema } from "../../../../../libs/schemas/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterFn } from "../../../../../libs/data/auth";
import { Button, message } from "antd";


const AddUserAdminTemplates = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TypeRegisterSchema>({
        resolver: zodResolver(registerSchema)
    });
    const [loadingRegister, setLoadingRegister] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async (data: TypeRegisterSchema) => {
        setLoadingRegister(true)
        try {
            const res = await RegisterFn(data)
            if (res && res.success) {
                message.success('Thêm người dùng thành công !')
                navigate('/admin/users')
            }
        } catch (error) {
            message.error('Thêm người dùng thất bại')
            console.log(error)
        } finally {
            setLoadingRegister(false)
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-4  lg:gap-8 lg:flex-row">
                    {/* input info  */}
                    <div className="w-full space-y-4  lg:basis-1/2">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Họ tên</label>
                            <input
                                type="text"
                                {...register('name')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                {...register('email')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                            <input
                                type="tel"
                                {...register('phoneNumber')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Giới tính</label>
                            <select
                                {...register('gender')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            >
                                <option value="">-- Chọn giới tính --</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Ngày sinh</label>
                            <input
                                type="date"
                                {...register('dateOfBirth')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                        </div>
                    </div>

                    {/* input password  */}
                    <div className=" w-full space-y-4 lg:basis-1/2">
                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Mật khẩu</label>
                            <input
                                type="password"
                                {...register('password')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Nhập lại mật khẩu</label>
                            <input
                                type="password"
                                {...register('confirmPassword')}
                                disabled={loadingRegister}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        {/* Button */}
                        <div>
                            <Button
                                htmlType="submit"
                                loading={loadingRegister}
                                className="w-full rounded-lg bg-white cursor-pointer border-gray-200 border px-4 py-6 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-100 active:bg-indigo-300"
                            >
                                Thêm người dùng
                            </Button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AddUserAdminTemplates