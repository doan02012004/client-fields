import instanceAxios from "../instance"


export type CommentFieldResponse = {
    _id: string,
    branchId: string,
    fieldId: { _id: string, name: string },
    userId: { _id: string, name: string },
    orderFieldId: string,
    content: string,
    isPublic: boolean,
    likes:string[],
    rating: number,
    createdAt:string
}
export const getCommentsByBranchIdFn = async (branchId: string): Promise<{ success: boolean, message: string, data: CommentFieldResponse[] }> => {
    const res = await instanceAxios.get(`/comment-fields/web/${branchId}`)
    return res.data
}

export type PayloadCreateCommentType = {
    branchId: string,
    userId: string,
    fieldId: string,
    orderFieldId: string,
    content: string,
    rating: number
}
export const createCommentFieldFn = async (payload: PayloadCreateCommentType): Promise<{ success: boolean, message: string }> => {
    const res = await instanceAxios.post(`/comment-fields/create`, payload)
    return res.data
}

export const toggleLikeCommentFieldFn = async (commentId:string): Promise<{ success: boolean, liked:boolean }> => {
    const res = await instanceAxios.put(`/comment-fields/toggle-like/${commentId}`)
    return res.data
}