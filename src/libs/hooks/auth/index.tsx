import { useQuery } from "@tanstack/react-query"
import { useAppContext } from "../../context"
import { getMeQueryFn } from "../../data/auth"

export const useGetMeQueryFn = () => {
    const {user} = useAppContext()
    return useQuery({
        queryKey: ['getMe'],
        queryFn: () => getMeQueryFn(),
        enabled: !!user,
    })
}