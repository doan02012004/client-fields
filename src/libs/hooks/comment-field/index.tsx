import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getCommentsByBranchIdFn, toggleLikeCommentFieldFn } from "../../data/comment-field"
import { message } from "antd"
import { useNavigate } from "react-router-dom"

const queryKey:QueryKey = ['comment-fields']

export const useGetCommentsByBranchIdQuery = (branchId='') => {
    return useQuery({
        queryKey:[...queryKey,branchId],
        queryFn: () => getCommentsByBranchIdFn(branchId),
        enabled: !!branchId
    })
}

export const useToggleLikeCommentsByCommentIdMuation = () => {
    const queryClient = useQueryClient()
    const mutationKey: MutationKey = ['toggle-like']
    const navigate = useNavigate()
    return useMutation({
        mutationKey,
        mutationFn: (commentId:string) => toggleLikeCommentFieldFn(commentId),
         onSuccess: () => {
            queryClient.invalidateQueries({ queryKey })
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error:any) => {
            if(error.status===401){
              return  navigate('/auth/login')
            }
            message.error('Đã xảy ra lỗi !')
            console.log('data-error', error)
        },
    })
} 