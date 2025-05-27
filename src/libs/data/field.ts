import { FieldPostPayloadType, FieldResponeType, OrderFieldResponseFieldDetail } from "../../types/api.type"
import instanceAxios from "../instance"

export const CreateFieldMutationFn = async (data:FieldPostPayloadType) => {
    const res = await instanceAxios.post('/fields',data)
    return res.data
}


export interface ParamsGetAllFields {
    page?: number
    limit?: number
}
export const getAllFieldQueryFn = async(params:ParamsGetAllFields):Promise<{success:boolean,data:FieldResponeType[],pagination:{page:number,totalPages:number,total:number}}> => {
    const res = await instanceAxios.get('/fields',{
        params: {
            page: params.page || 1,
            limit: params.limit || 10
        }
    })
    return res.data
}

export const getFieldByIdQueryFn = async(id:string):Promise<{success:boolean,data:FieldResponeType}> => {
    const res = await instanceAxios.get(`/fields/details/${id}`)
    return res.data
}

export const UpdateFieldMutationFn = async (id:string,data:FieldPostPayloadType) => {
    const res = await instanceAxios.put(`/fields/update/${id}`,data)
    return res.data
}

export const getAllOrderFieldByDateFn = async(branchId:string,date:string): Promise<{success:boolean,data:OrderFieldResponseFieldDetail[]}> => {
    const res = await instanceAxios.get('/fields/date-booking',{
        params:{
            branchId,
            date
        }
    })
    return res.data
}

export const DeleteFieldMutationFn = async (id:string) => {
    const res = await instanceAxios.delete(`/fields/remove/${id}`)
    return res.data
}
