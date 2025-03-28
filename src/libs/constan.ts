import sortBy from 'lodash.sortby';
import { TimeWeek } from '../types/api.type';

export const maxImageBranch = 5
export const maxImageField = 5

export const rangeWeek = [
    {
        _id:'1',
        from:0,
        to:4,
        text:'Thứ 2 - Thứ 6'
    },
    {
        _id:'2',
        from:5,
        to:6,
        text:'Thứ 7 - Chủ nhật'
    },
] as TimeWeek[]

export const sortNumber = (arr:number[]=[]) => {
    return sortBy(arr)
}

export const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;