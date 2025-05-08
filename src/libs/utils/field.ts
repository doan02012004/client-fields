import sortBy from 'lodash.sortby';
import { RangePrice, RangeTime, TimeWeek } from '../../types/api.type';
import { generateId } from '../constan';

export const generateTextByMinutes = (minutes: number) => {
    const textHours = Math.floor(minutes / 60);
    let textMinutes
    if (minutes > 0) {
        textMinutes = minutes - textHours * 60
    } else {
        textMinutes = 0
    }
    return `${textHours.toString().padStart(2, '0')}h${textMinutes.toString().padStart(2, '0')}`
}

export const generateRangeTimes = (arrTime: number[] = []): RangeTime[] => {

    const defaultArray = [0, ...arrTime, 1440]
    const newRangeNumber = sortBy(defaultArray)
    const rangeTimes = [] as RangeTime[]
    for (let i = 0; i < newRangeNumber.length - 1; i++) {
        rangeTimes.push({
            _id: generateId(),
            startTime: newRangeNumber[i],
            endTime: newRangeNumber[i + 1],
            text: `${generateTextByMinutes(newRangeNumber[i])} - ${generateTextByMinutes(newRangeNumber[i + 1])}`
        })
    }

    return rangeTimes
}

export const generateRangePrices = (arrayWeek: TimeWeek[], rangeTimes: RangeTime[], currentRangePrices: RangePrice[]):RangePrice[] => {
    const rangePrices = [] as RangePrice[]
    for (const week of arrayWeek) {
        for (const rangeTime of rangeTimes) {
            const findRangePrice = currentRangePrices.find((item) =>
                item.startTime == rangeTime.startTime
                && item.endTime == rangeTime.endTime
                && item.dayInWeek.length == week.values.length)
            if (findRangePrice) {
                rangePrices.push(findRangePrice)
            } else {
                rangePrices.push({
                    _id: generateId(),
                    name: rangeTime.text,
                    startTime: rangeTime.startTime,
                    endTime:rangeTime.endTime,
                    dayInWeek: week.values,
                    fieldId: '',
                    price: 0,
                    title: rangeTime.text,
                })
            }
        }
    }

    return rangePrices
}