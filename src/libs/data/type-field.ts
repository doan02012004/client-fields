import { TypeFieldPayload, TypeFieldResponse } from "../../types/api.type"
import instanceAxios from "../instance"

export const createTypeFieldMutationFn = async(data:TypeFieldPayload) => {
    const res = await instanceAxios.post('/type-fields',data)
    return res.data
}

export const getAllTypeFieldQueryFn = async():Promise<{success:boolean,data:TypeFieldResponse[]}> => {
    const res = await instanceAxios.get('/type-fields')
    return res.data
}