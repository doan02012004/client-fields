import sortBy from 'lodash.sortby';
import { TimeWeek } from '../types/api.type';
import dayjs from 'dayjs';
export const maxImageBranch = 5
export const maxImageField = 5

export const rangeWeek = [
    {
        _id: '1',
        values: [1, 2, 3, 4, 5],
        text: 'Thứ 2 - Thứ 6'
    },
    {
        _id: '2',
        values: [0, 6],
        text: 'Thứ 7 - Chủ nhật'
    },
] as TimeWeek[]

export const sortNumber = (arr: number[] = []) => {
    return sortBy(arr)
}

export const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const formatPrice = (number: number) => {
    return `${number.toLocaleString('vi-VN')}đ`
}

export const generateStatus = (status: string): { className: string, text: string } => {
    const dataRetur = {
        className: 'text-red-500',
        text: 'Không xác định'
    }
    switch (status) {
        case 'unpaid':
            dataRetur.className = 'text-red-500 bg-red-500/20';
            dataRetur.text = 'Chưa thanh toán';
            break;
        case 'pending':
            dataRetur.className = 'text-blue-500 bg-blue-500/20';
            dataRetur.text = 'Chờ xác nhận';
            break;
        case 'completed':
            dataRetur.className = 'text-green-600 bg-green-600/20';
            dataRetur.text = 'Hoàn thành';
            break;
        case 'cancelled':
            dataRetur.className = 'text-red-500 bg-red-500/20';
            dataRetur.text = 'Đã hủy';
            break;
        case 'refund':
            dataRetur.className = 'text-red-500 bg-red-500/20';
            dataRetur.text = 'Hoàn tiền';
            break;
        case 'refunded':
            dataRetur.className = 'text-red-500 bg-red-500/20';
            dataRetur.text = 'Đã hoàn tiền';
            break;
        case 'confirmed':
            dataRetur.className = 'text-green-500 bg-green-500/20';
            dataRetur.text = 'Đã xác nhận';
            break;
    }

    return dataRetur
};

export const generateNext7Days = () => {
    return Array.from({ length: 7 }, (_, i) => {
        const date = dayjs().add(i, 'day');
        return {
            text: `${dayInWeek[date.day()]}, ${date.format(' DD-MM-YYYY')}`, // ví dụ: Thứ hai, 29/04/2025
            value: date.format('YYYY-MM-DD'),      // dùng để query
        };
    });
};

export const dayInWeek = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy'
]

export const convertToDateString = (isoString: string): string => {
    return dayjs(isoString).format('DD-MM-YYYY')
  }

export  const formatDate = (isoDate:string) => {
    return new Date(isoDate).toISOString().split('T')[0]; // "2025-05-08"
  }