import { FieldPostPayloadType, FieldResponeType } from "../../types/api.type"
import instanceAxios from "../instance"

export const CreateFieldMutationFn = async (data:FieldPostPayloadType) => {
    const res = await instanceAxios.post('/fields',data)
    return res.data
}

export const getAllFieldQueryFn = async():Promise<{success:boolean,data:FieldResponeType[]}> => {
    const res = await instanceAxios.get('/fields')
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