import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FieldPostPayloadType, RangePrice, TimeWeek } from "../../../../../types/api.type"

type RangePriceItemFormFieldProps = {
    indexWeek: number,
    rangePrices: RangePrice[],
    item: TimeWeek,
    register:UseFormRegister<FieldPostPayloadType>,
    errors: FieldErrors<FieldPostPayloadType>
}

const RangePriceItemFormField = ({ register, rangePrices, item,errors }: RangePriceItemFormFieldProps) => {
    return (
        <div className='grid grid-cols-12'>
            <div className=" col-span-2 border flex justify-center items-center h-full bg-white p-3">
                {item.text}
            </div>
            <div className="col-span-10">
                {rangePrices.map((rangePrice,index) => {
                    if (rangePrice.startDayInWeek == item.from) {
                        return (
                            <div key={rangePrice._id} className="grid grid-cols-2 min-h-24">
                                <div className="border bg-white flex relative justify-center items-center">
                                    <span className=" absolute top-1 left-2 text-xs text-gray-500">Khung giờ</span>
                                    <span>{rangePrice.name}</span>
                                </div>
                                <div className={`border bg-white  flex relative justify-center items-center px-2`}>
                                    <span className="absolute top-1 left-2 text-xs text-gray-500">Giá sân</span>
                                    <div className={`border flex items-center xl:pr-3  ${errors && errors.rangePrices && errors.rangePrices[index] && 'border-red-500'}`}>
                                        <input {...register(`rangePrices.${index}.price`,{valueAsNumber:true})} className={`pl-2 pr-3 xl:pr-4 py-2 outline-0 w-full `} />
                                        <span className="border-l pl-2">đ</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default RangePriceItemFormField