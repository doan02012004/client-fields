import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateFieldMutationFn, DeleteFieldMutationFn, getAllFieldQueryFn, getAllOrderFieldByDateFn, ParamsGetAllFields, UpdateFieldMutationFn } from "../../data/field";
import { useNavigate } from "react-router-dom";
import { FieldPostPayloadType } from "../../../types/api.type";
import { message } from "antd";


const queryKey: QueryKey = ['fields']

export const useGetAllFieldsQuery = (params:ParamsGetAllFields) => {
    return useQuery({
        queryKey: [...queryKey, params],
        queryFn: () => getAllFieldQueryFn(params)
    })
}

export const useCreateFieldMutation = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const mutationKey: MutationKey = ['create_field']
    return useMutation({
        mutationKey,
        mutationFn: (data: FieldPostPayloadType) => CreateFieldMutationFn(data),
        onSuccess: () => {
            message.success('Tạo sân bóng thành công !')
            navigate('/admin/fields')
            queryClient.invalidateQueries({ queryKey })
        },
        onError: (error) => {
            message.error('Tạo sân bóng thất bại !')
            console.log('data-error', error)
        },
    })
}

export const useUpdateFieldMutation = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const mutationKey: MutationKey = ['update_field']
    return useMutation({
        mutationKey,
        mutationFn: ({id,data}:{id:string,data: FieldPostPayloadType}) => UpdateFieldMutationFn(id,data),
        onSuccess: () => {
            message.success('Cập nhật sân bóng thành công !')
            navigate('/admin/fields')
            queryClient.invalidateQueries({ queryKey })
        },
        onError: (error) => {
            message.error('Cập nhật sân bóng thất bại !')
            console.log('data-error', error)
        },
    })
}

export const useGetAllOrderFieldByDateQuery = ({branchId,date}:{branchId:string, date:string}) => {
    const queryKey:QueryKey = ['field-detail-orders',{branchId,date}]
    return useQuery({
        queryKey,
        queryFn: () => getAllOrderFieldByDateFn(branchId,date)
    })
}

export const useRemoveFieldMutation = () => {
    const queryClient = useQueryClient()
    const mutationKey: MutationKey = ['remove_field']
    return useMutation({
        mutationKey,
        mutationFn: (id:string) => DeleteFieldMutationFn(id),
        onSuccess: () => {
            message.success('Xóa sân bóng thành công !')
            queryClient.invalidateQueries({ queryKey })
        },
        onError: (error) => {
            message.error('Xóa sân bóng thất bại !')
            console.log('data-error', error)
        },
    })
}
