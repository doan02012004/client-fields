
import { ImageResponseType } from "../../types/api.type"
import instanceAxios from "../instance"


export const uploadImage = async (file: File): Promise<ImageResponseType> => {
    const formData = new FormData()
    formData.append('image', file)
    const res = await instanceAxios.post(`/images/upload`, formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    return res.data
}