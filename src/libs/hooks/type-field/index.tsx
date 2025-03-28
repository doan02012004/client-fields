import { QueryKey, useQuery } from "@tanstack/react-query"
import { getAllTypeFieldQueryFn } from "../../data/type-field"


const queryKey: QueryKey = ['type-field']

export const useGetAllTypeFieldsQuery = () => {
    return useQuery({
        queryKey,
        queryFn: () => getAllTypeFieldQueryFn()
    })
} 