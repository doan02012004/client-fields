import { BranchPayloadType, BranchType } from "../../types/api.type";
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
