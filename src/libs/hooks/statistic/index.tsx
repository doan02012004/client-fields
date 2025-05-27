import { QueryKey, useQuery } from "@tanstack/react-query"
import {  getMonthlyRevenueFn, getNewUsersStatisticFn, getPendingBookingsFn, getSuccessBookingsFn, getTopFieldsFn, getTopUsersFn, ParamsStatisticsType } from "../../data/statistic"


// Doanh thu theo tháng
export const useGetMonthlyRevenueQuery = (params: ParamsStatisticsType) => {
  const queryKey: QueryKey = ['revenue-field', params];
  return useQuery({ queryKey, queryFn: () => getMonthlyRevenueFn(params) });
};

// Đơn đặt sân thành công
export const useGetSuccessBookingsQuery = (params: ParamsStatisticsType) => {
  const queryKey: QueryKey = ['success-bookings', params];
  return useQuery({ queryKey, queryFn: () => getSuccessBookingsFn(params) });
};

// Đơn đặt sân mới
export const useGetPendingBookingsQuery = (params: ParamsStatisticsType) => {
  const queryKey: QueryKey = ['canceled-bookings', params];
  return useQuery({ queryKey, queryFn: () => getPendingBookingsFn(params) });
};

// Người dùng mới theo tháng
export const useGetNewUsersQuery = (params: ParamsStatisticsType) => {
  const queryKey: QueryKey = ['new-users', params];
  return useQuery({ queryKey, queryFn: () => getNewUsersStatisticFn(params) });
};

// Top 5 người dùng đặt sân nhiều nhất
export const useGetTopUsersQuery = () => {
  return useQuery({ queryKey: ['top-users'], queryFn: () => getTopUsersFn() });
};

// Top 5 sân được đặt nhiều nhất
export const useGetTopFieldsQuery = () => {
  return useQuery({ queryKey: ['top-fields'], queryFn: () => getTopFieldsFn() });
};
