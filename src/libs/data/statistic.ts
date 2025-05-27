import instanceAxios from "../instance"

export type ParamsStatisticsType = {
    month: number,
    year: number
}

export const getMonthlyRevenueFn = async (params: ParamsStatisticsType): Promise<{ success: boolean, data: { totalRevenue: number, totalDeposit: number, count: number } }> => {
    const res = await instanceAxios.get('/statistics/revenue', {
        params: params
    })

    return res.data
}

export const getSuccessBookingsFn = async (params: ParamsStatisticsType): Promise<{ success: boolean, data: { successBookings: number } }> => {
    const res = await instanceAxios.get('/statistics/success-bookings', {
        params: params
    })

    return res.data
}

export const getPendingBookingsFn = async (params: ParamsStatisticsType): Promise<{ success: boolean, data: { pendingBookings: number } }> => {
    const res = await instanceAxios.get('/statistics/pending-bookings', {
        params: params
    })
    return res.data
}

export const getNewUsersStatisticFn = async (params: ParamsStatisticsType): Promise<{ success: boolean, data: { month: number, year: number, newUsers: number } }> => {
    const res = await instanceAxios.get('/statistics/new-users', {
        params: params
    })
    return res.data
}


export type TopUserStatisticType = {
    bookingCount: number,
    userId: string,
    name: string,
    email: string,
    phoneNumber: string
}
export const getTopUsersFn = async (): Promise<{ success: boolean, data:TopUserStatisticType[] }> => {
    const res = await instanceAxios.get('/statistics/top-users')
    return res.data
}

export type TopFieldStatisticType = {
  bookingCount: number;
  fieldId: string;
  fieldName: string;
  branchName: string;
  branchImages: string[];
};
export const getTopFieldsFn = async (): Promise<{ success: boolean, data:TopFieldStatisticType[] }> => {
    const res = await instanceAxios.get('/statistics/top-fields')
    return res.data
}