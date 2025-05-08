import { BranchDetailsType, BranchPayloadType, BranchType, CheckBookingPayload, CheckBookingResponseType } from "../../types/api.type";
import { queryGetBranchBySlugType } from "../hooks/branch";
import instanceAxios from "../instance";

export const CreateBranchMutationFn = async(data:BranchPayloadType) => {
    const res = await instanceAxios.post(`/branchs`,data)
    return res.data
}

export const getAllBranchQueryFn = async():Promise<{success:boolean,branchs:BranchType[]}> => {
    const res = await instanceAxios.get('/branchs')
    return res.data
}

export const getBranchByIdQueryFn = async(id:string) => {
    const res = await instanceAxios.get(`/branchs/details/${id}`)
    return res.data
}

export const UpdateBranchByIdMutationFn = async(id:string,data:BranchPayloadType) => {
    const res = await instanceAxios.put(`/branchs/update/${id}`,data)
    return res.data
}

export const getBranchBySlugWebQueryFn = async(query:queryGetBranchBySlugType):Promise<{success:boolean,data:BranchDetailsType}> => {
    const res = await instanceAxios.get(`/branchs/details/web/${query.slug}`,{
        params:query
    })
    return res.data
}


export const CheckBookingFieldMutationFn = async(data:CheckBookingPayload):Promise<{success:string,data:CheckBookingResponseType}> => {
    const res = await instanceAxios.post(`/branchs/check-booking`,data)
    return res.data
}