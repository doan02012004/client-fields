import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllUserFn, getUserByIdFn, removeUserByIdFn, updateUserByIdFn } from "../../data/user"
import { useAppContext } from "../../context"
import { TypeUpdateUser } from "../../schemas/auth"
import { useNavigate } from "react-router-dom"
import { message } from "antd"
import { CustomerInfoType } from "../../../components/root/customer/info/templates"


const queryKey: QueryKey = ['users']
export const useGetAllUserQuery = (page = 1, limit = 5) => {
    const { user } = useAppContext()
    return useQuery({
        queryKey: [...queryKey, { page, limit }],
        queryFn: () => getAllUserFn({ page, limit }),
        // enabled: !!user
    })
}

export const useGetUserByIdQuery = (userId: string) => {
    return useQuery({
        queryKey: [...queryKey, userId],
        queryFn: () => getUserByIdFn(userId),
        enabled: !!userId
    })
}

export const useUpdateUserByIdMutation = (isRedirect=true) => {
    const mutationKey: MutationKey = ['update-user']
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: mutationKey,
        mutationFn: (payload: { userId: string, data: TypeUpdateUser| CustomerInfoType }) => updateUserByIdFn(payload.userId, payload.data),
        onSuccess: () => {
            message.success('Cập nhật người dùng thành công !')
            if(isRedirect){
                navigate('/admin/users')
            }
            queryClient.invalidateQueries({ queryKey })
        },
        onError: (error) => {
            message.error('Cập nhật người dùng thất bại !')
            console.log('data-error', error)
        },
    })
}

export const useRemoveUserByIdMutation = () => {
    const mutationKey: MutationKey = ['remove-user']
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: mutationKey,
        mutationFn: (userId: string) => removeUserByIdFn(userId),
        onSuccess: () => {
            message.success('Xóa người dùng thành công !')
            queryClient.invalidateQueries({ queryKey })
        },
        onError: (error) => {
            message.error('Xóa người dùng thất bại !')
            console.log('data-error', error)
        },
    })
}