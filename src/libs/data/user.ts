import { CustomerInfoType } from "../../components/root/customer/info/templates"
import { UserType } from "../../types/auth"
import instanceAxios from "../instance"
import { TypeUpdateUser } from "../schemas/auth"

export type ParamsGetAllUserType = {
    page?:number,
    limit?:number
}

export const getAllUserFn = async(params:ParamsGetAllUserType):Promise<{success:boolean,data:UserType[],pagination:{total:number,page:number,totalPages:number}}> => { 
    const res = await instanceAxios.get('/users',{
        params
    })

    return res.data
}


export const getUserByIdFn = async(userId:string):Promise<{success:boolean,data:UserType}> =>{
    const res = await instanceAxios.get(`/users/detail/${userId}`)
    return res.data
}

export const updateUserByIdFn = async(userId:string,data:TypeUpdateUser|CustomerInfoType):Promise<{success:boolean,data:UserType}> => {
    const res = await instanceAxios.put(`/users/update/${userId}`,data)
    return res.data
}

export const removeUserByIdFn = async(userId:string) :Promise<{success:boolean,data:UserType}> => {
    const res = await instanceAxios.delete(`/users/remove/${userId}`)
    return res.data
}