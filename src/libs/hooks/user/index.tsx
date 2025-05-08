import { QueryKey, useQuery } from "@tanstack/react-query"
import { getAllUserFn } from "../../data/user"
import { useAppContext } from "../../context"


const queryKey:QueryKey = ['users']
export const useGetAllUserQuery = (page=1,limit=5) => {
    const {user} = useAppContext()
    return useQuery({
        queryKey:[...queryKey,{page,limit}],
        queryFn: () => getAllUserFn({page,limit}),
        // enabled: !!user
    })
}