import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CreateBranchMutationFn, getAllBranchQueryFn, getBranchBySlugWebQueryFn, UpdateBranchByIdMutationFn } from "../../data/branch"
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

export const useGetAllBranchQuery = (params:{status?:boolean}) => {
    return useQuery({
        queryKey,
        queryFn: () => getAllBranchQueryFn(params)
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error:any) => {
            message.error(error.response.data.message)
            console.log('data-error',error)
        },
    })
}

export interface queryGetBranchBySlugType {
    slug:string,
    selectedFieldId:string|null,
    selectedDate?:string|null,
    selectedTimeId:string|null
}
export const useGetBranchBySlugQuery = (query:queryGetBranchBySlugType) => {
    const customQueryKey = [...queryKey,query]
    return useQuery({
        queryKey:customQueryKey,
        queryFn: () => getBranchBySlugWebQueryFn(query),
          retry: 3, // ✅ Retry tối đa 3 lần sau khi call lỗi
    })
}