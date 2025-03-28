import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CreateBranchMutationFn, getAllBranchQueryFn, UpdateBranchByIdMutationFn } from "../../data/branch"
import { BranchPayloadType } from "../../../types/api.type"
import { useNavigate } from "react-router-dom"
import { message } from "antd"

const queryKey:QueryKey = ['branch']

export const useCreateBranchMutation = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutationKey:MutationKey = ['create_branch']
    return useMutation({
        mutationKey,
        mutationFn: (data:BranchPayloadType) =>  CreateBranchMutationFn(data),
        onSuccess: () => {
           navigate('/admin/branchs')
           queryClient.invalidateQueries({queryKey})
        },
        onError: (error) => {
            console.log('data-error',error)
        },
    })
}

export const useGetAllBranchQuery = () => {
    return useQuery({
        queryKey,
        queryFn: () => getAllBranchQueryFn()
    })
}


export const useUpdateBranchMutation = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutationKey:MutationKey = ['update_branch']
    return useMutation({
        mutationKey,
        mutationFn: ({id,data}:{id:string,data:BranchPayloadType}) =>  UpdateBranchByIdMutationFn(id,data),
        onSuccess: () => {
            message.success('Cập nhật thành công !')
           navigate('/admin/branchs')
           queryClient.invalidateQueries({queryKey})
        },
        onError: (error) => {
            message.error('Cập nhật thất bại !')
            console.log('data-error',error)
        },
    })
}
