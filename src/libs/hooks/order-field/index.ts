import {  MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CreateOrderFieldMutationFn, CreateOrderPayLoad, getAllOrderFieldAdmin, getAllOrderFieldByUserFn, getCheckout, getOrdersSidebarWebFn, ParamsGetAllOrderFieldAdmin, ParamsGetAllOrderFieldByUser, ParamsGetCheckout } from "../../data/order"
import { useAppContext } from "../../context"

const queryKey: QueryKey = ['checkout']

export const useGetCheckoutOrderFieldQuery = (params:ParamsGetCheckout) => {
    return useQuery({
        queryKey:[...queryKey,params],
        queryFn: () => getCheckout(params),
        retry:false
    })
}

export const useCreateOrderFieldMutation = () => {
    const mutationKey:MutationKey = ['create-order-field']
    // const navigate = useNavigate()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey:mutationKey,
        mutationFn: (payload:CreateOrderPayLoad) => CreateOrderFieldMutationFn(payload),
        onSuccess: () => {
            // message.success('Cập nhật thành công !')
        //    navigate('/admin/branchs')
           queryClient.invalidateQueries({queryKey})
        },
        onError: (error) => {
            // message.error('Cập nhật thất bại !')
            console.log('data-error',error)
        },
    })
}

export const useGetAllOrderFieldAdminQuery = (params:ParamsGetAllOrderFieldAdmin) => {
    const queryKey:QueryKey = ['order-field-admin',params]
    return useQuery({
        queryKey,
        queryFn: () => getAllOrderFieldAdmin(params)
    })
}

export const useGetAllOrderFieldQuery = (params:ParamsGetAllOrderFieldByUser) => {
    const {user} = useAppContext()
    const queryKey:QueryKey = ['order-field-user',params]
    return useQuery({
        queryKey,
        queryFn: () => getAllOrderFieldByUserFn(params),
        enabled: !!user
    })
}

export const useGetAllOrderFieldSidebarQuery = () => {
    const {user} = useAppContext()
    const queryKey:QueryKey = ['order-field-user-side-bar']
    return useQuery({
        queryKey,
        queryFn: () => getOrdersSidebarWebFn(),
        enabled: !!user
    })
}


