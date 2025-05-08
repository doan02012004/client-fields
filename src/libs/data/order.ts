import { CheckoutResponse, OrderFieldResponseAdmin, OrderFieldResponseFieldDetail, StatusOrderField } from "../../types/api.type"
import instanceAxios from "../instance"

export type ParamsGetCheckout = {
    fieldId: string,
    date: string,
    dayNumber: number,
    timeId: string
}

export type CreateOrderPayLoad = {
    fieldId: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dates: any[],
    branchId: string,
    timeId: string,
    dayNumber: number,
    totalPrice: number,
    priceDeposit: number,
    paymentMethod: string,
    userId: string
}

export const getCheckout = async (params: ParamsGetCheckout): Promise<{ success: boolean, data: CheckoutResponse }> => {
    const res = await instanceAxios.get(`/order-field/checkout`, {
        params: params
    })
    return res.data
}

type CreateOrderResponse = {
    branchId: string,
    dayBookings: string[],
    dayNumber: number,
    deletedAt: null | string,
    fieldId: string,
    orderCode: string,
    paymentMethod:'vnpay',
    priceDeposit: number,
    statusBooking:'unpaid',
    timeId: string,
    totalPrice: number,
    userId: string,
    _id: string,
}
export const CreateOrderFieldMutationFn = async (payload: CreateOrderPayLoad): Promise<{ success: boolean, data: CreateOrderResponse }> => {
    const res = await instanceAxios.post(`/order-field/create-order`, payload)
    return res.data
}


type PayloadCreatePaymentOrderField = {
    amount: number,
    orderCode: string
}
export const CreatePaymentOrderFieldMutationFn = async (payload: PayloadCreatePaymentOrderField): Promise<{ success: boolean, data: { paymentUrl: string } }> => {
    const res = await instanceAxios.post(`/order-field/create-payment`, payload)
    return res.data
}


export type ParamsGetAllOrderFieldAdmin = {
    page: number,   
    limit: number,
    statusBooking?: 'unpaid' | 'paid' | 'cancel',
    date?: string
}

export const getAllOrderFieldAdmin = async (params:ParamsGetAllOrderFieldAdmin): Promise<{success:boolean,data:OrderFieldResponseAdmin[],pagination:{total:number,page:number,limit:number,totalPage:number}}> => {
    const res = await instanceAxios.get(`/order-field/admin`, {
        params: params
    })
    return res.data
}

export const getOrderFieldByOrderId = async (id: string) => {
    const res = await instanceAxios.get(`/order-field/admin/detail/${id}`)
    return res.data
}

export const updateOrderFieldAdminById = async (id: string, status:StatusOrderField) => {
    const res = await instanceAxios.put(`/order-field/admin/update-status/${id}`, { statusBooking: status })
    return res.data
}

export type ParamsGetAllOrderFieldByUser = Omit<ParamsGetAllOrderFieldAdmin, 'date'>

export const getAllOrderFieldByUserFn = async (params:ParamsGetAllOrderFieldByUser): Promise<{success:boolean,data:OrderFieldResponseFieldDetail[],pagination:{total:number,page:number,limit:number,totalPage:number}}> => {
    const res = await instanceAxios.get(`/order-field/web`, {
        params: params
    })
    return res.data
}

export const getOrderFieldDetailWebFn = async (orderCode:string): Promise<{success:boolean,data:OrderFieldResponseFieldDetail}> => {
    const res = await instanceAxios.get(`/order-field/web/detail/${orderCode}`)
    return res.data
}
