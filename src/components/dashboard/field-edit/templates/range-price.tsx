
import { useFormContext, useWatch } from 'react-hook-form'
import { FieldPostPayloadType } from '../../../../types/api.type'
import { generateRangePrices, generateRangeTimes } from '../../../../libs/utils/field'
import CustomTimePicker from '../../../components/CustomTimePicker'
import { useEffect, useState } from 'react'
import { message } from 'antd'
import { rangeWeek, sortNumber } from '../../../../libs/constan'
import { Trash } from 'lucide-react'
import RangeTimeItemFormField from '../../field-add/components/range-time-item'
import RangePriceItemFormField from '../../field-add/components/range-price-item'

const RangePriceFieldFormEdit = () => {
    const { register, formState: { errors, isDirty }, setValue, control } = useFormContext<FieldPostPayloadType>()
    const [currentTime, setCurrentTime] = useState(0)
    const [selectedTimes, setSelectedTimes] = useState<number[]>([])
    const [generalPrice, setGeneralPrice] = useState<number>(0)
    const rangeTimesWatch = useWatch({
        control,
        name: "rangeTimes",
    })
    const rangePricesWatch = useWatch({
        control,
        name: "rangePrices",
    })

    // tạo rangeTimes
    useEffect(() => {
        if (isDirty) {
            const rangeTimes = generateRangeTimes(selectedTimes)
            setValue('rangeTimes', rangeTimes, { shouldDirty: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTimes, isDirty])

    // tạo rangePrices
    useEffect(() => {
        if (isDirty) {
            const rangePrices = generateRangePrices(rangeWeek, rangeTimesWatch, rangePricesWatch)
            setValue('rangePrices', rangePrices, { shouldDirty: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rangeTimesWatch, isDirty])

    useEffect(() => {
        if (!isDirty) {
            const convertSelectTime = rangeTimesWatch.map((item) => item.endTime) as number[]
            const defaultSelectedTime = convertSelectTime.filter((item: number) => ![0, 1440].includes(item))
            setSelectedTimes(defaultSelectedTime)
        }
    }, [rangeTimesWatch, isDirty])

    const onAddRangeTime = () => {
        if (selectedTimes.includes(currentTime) || currentTime == 0 || currentTime == 1440) return message.error('Vui lòng chọn khung giờ khác')
        const newSelectedTimes = sortNumber([...selectedTimes, currentTime])
        if(!isDirty){
            const rangeTimes = generateRangeTimes(newSelectedTimes)
           setValue('rangeTimes',rangeTimes,{shouldDirty:true})
        }
        setSelectedTimes(newSelectedTimes)
    }

    const onRemoveSelectedTime = (item: number) => {
        const newSelectedTimes = selectedTimes.filter((number) => number !== item)
        if(!isDirty){
            const rangeTimes = generateRangeTimes(newSelectedTimes)
           setValue('rangeTimes',rangeTimes,{shouldDirty:true})
        }
        setSelectedTimes(newSelectedTimes)
    }
    const onSetGeneralPrice = () => {
        if (!generalPrice || isNaN(generalPrice) || generalPrice <= 0) return message.error('Vui lòng nhập số lớn hơn 0')
        const newRangePrices = rangePricesWatch.map((item) => ({ ...item, price: generalPrice }))
        setValue('rangePrices', newRangePrices,{shouldDirty:true})
    }
    return (
        <div className="container">
            <div className="bg-white py-4 px-6">
                <h6 className="text-lg font-semibold uppercase mb-6">Giá sân</h6>
                <div className="space-y-4 pl-5">
                    <div className="flex">
                        <label htmlFor="" className="block w-32 shrink-0 ">Khoảng giá</label>
                        <div className="w-full">
                            <div className=" space-y-5 mb-5">
                                <div className="flex items-center gap-4">
                                    <CustomTimePicker value={currentTime} onChange={(value) => setCurrentTime(value)} wrapperClassname='border' />
                                    <button onClick={() => onAddRangeTime()} type="button" className=" btn-primary px-4 py-2 text-sm cursor-pointer ">Thêm giờ sân</button>
                                </div>
                                {selectedTimes.length > 0 && (
                                    <div className='p-3 shadow shadow-gray-300'>
                                        <div className='flex flex-wrap gap-4'>
                                            {selectedTimes.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <CustomTimePicker wrapperClassname='bg-white' value={item} disabled={true} />
                                                    <Trash onClick={() => onRemoveSelectedTime(item)} size={18} className="text-gray-400 cursor-pointer hover:text-red-400" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {rangeTimesWatch.map((item, index) => (
                                    <RangeTimeItemFormField key={item._id} index={index} startTime={item.startTime} endTime={item.endTime} register={register} />
                                ))}

                            </div>
                            <div className='p-3 bg-gray-200'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGeneralPrice(Number(e.target.value))} placeholder='Giá sân....' className='bg-white p-2 border border-gray-500 rounded w-full' />
                                    <button type='button' onClick={() => onSetGeneralPrice()} className='btn-primary px-4 py-2 shrink-0'>Áp dụng</button>
                                </div>
                                {rangeWeek.map((item, index: number) => (
                                    <RangePriceItemFormField key={item._id} register={register} errors={errors} rangePrices={rangePricesWatch} item={item} indexWeek={index} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangePriceFieldFormEdit