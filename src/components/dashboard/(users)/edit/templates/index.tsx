import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {TypeUpdateUser, updateUserSchema } from '../../../../../libs/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';

import { Button, message } from 'antd';
import { useGetUserByIdQuery, useUpdateUserByIdMutation } from '../../../../../libs/hooks/user';
import { formatDate } from '../../../../../libs/constan';

const EditUserAdminTemplates = () => {
    const { userId } = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TypeUpdateUser>({
        resolver: zodResolver(updateUserSchema)
    });
    const { data } = useGetUserByIdQuery(userId ?? '')
    const mutation = useUpdateUserByIdMutation()

    useEffect(() => {
        if (data && data.success) {
            const newData = {
                ...data.data,
                dateOfBirth: formatDate(data.data.dateOfBirth)
            }
            reset(newData)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const onSubmit = async (data: TypeUpdateUser) => {
        if (!userId) return message.error('Chưa tồn tại người dùng !')
        mutation.mutate({ data: data, userId: userId })
    };

   
    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="heading-3 text-center mb-6">Cập nhật người dùng</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='space-y-4 '>
                    {/* input info  */}
                    <div className="w-full space-y-4 ">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Họ tên</label>
                            <input
                                type="text"
                                {...register('name')}
                                disabled={mutation.isPending}
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
                                disabled={mutation.isPending}
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
                                disabled={mutation.isPending}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Giới tính</label>
                            <select
                                {...register('gender')}
                                disabled={mutation.isPending}
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
                                disabled={mutation.isPending}
                                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                        </div>

                        {/* Active */}
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-1">
                                <input
                                    type="radio"
                                    value="active"
                                    {...register('status')}
                                    disabled={mutation.isPending}
                                    className="text-blue-500"
                                />
                                <span>Hoạt động</span>
                            </label>

                            <label className="flex items-center space-x-1">
                                <input
                                    type="radio"
                                    value="inactive"
                                    {...register('status')}
                                    disabled={mutation.isPending}
                                    className="text-blue-500"
                                />
                                <span>Ngừng hoạt động</span>
                            </label>
                        </div>

                        {errors.status && (
                            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <div>
                        <Button
                            htmlType="submit"
                            loading={mutation.isPending}
                            className="w-full rounded-lg bg-white cursor-pointer border-gray-200 border px-4 py-6 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-100 active:bg-indigo-300"
                        >
                            Cập nhật
                        </Button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditUserAdminTemplates