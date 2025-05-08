import { UserType } from "../../types/auth"
import instanceAxios from "../instance"

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