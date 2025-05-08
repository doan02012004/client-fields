
import { UseFormRegister } from 'react-hook-form'
import CustomTimePicker from '../../../../../components/CustomTimePicker'
import { FieldPostPayloadType } from '../../../../../../types/api.type'
type RangeTimeItemFormFieldProps = {
    disabledFirst?:boolean,
    disabledLatest?:boolean,
    startTime?:number,
    endTime?:number,
    register:UseFormRegister<FieldPostPayloadType>,
    index?:number
}
const RangeTimeItemFormField = ({startTime=0,endTime=0,register,index=0}:RangeTimeItemFormFieldProps) => {
  return (
    <div className="w-full">
    <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
            <span className="font-semibold">Từ: </span>
            <CustomTimePicker wrapperClassname='border border-gray-200' disabled={true}  value={startTime} onChange={(value) => console.log(value)} />
        </div>
        <div className="flex items-center gap-3">
            <span className="font-semibold">Đến: </span>
            <CustomTimePicker wrapperClassname='border border-gray-200' disabled={true} value={endTime} onChange={(value) => console.log(value)} />
        </div>
        <div className="flex items-center gap-2">
            <label htmlFor="" className="block font-semibold shrink-0 ">Dạng chữ</label>
            <div className="w-full">
                <input {...register(`rangeTimes.${index}.text`)} disabled className="px-3 py-2 border text-sm border-gray-300 w-full" />
            </div>
        </div>
    </div>
    {/* {errors && errors.timeActive && errors.timeActive.startTime && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.startTime.message}</p>)}
{errors && errors.timeActive && errors.timeActive.endTime && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.endTime.message}</p>)}
{errors && errors.timeActive && errors.timeActive.title && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.title.message}</p>)} */}
</div>
  )
}

export default RangeTimeItemFormField