
import { message } from "antd"
import { BranchType, ListTimeItemType, SelectDateType, SelectFieldType, TimeInfoType } from "../../../../../types/api.type"


type TimeFieldDetailsProps = {
    listDate: SelectDateType[],
    listTime: ListTimeItemType[],
    branch: BranchType | undefined,
    timeInfo: TimeInfoType | undefined,
    selectedField: SelectFieldType | null,
    setSelectedDate: (date: SelectDateType) => void,
    setSelectedTime: (timeId: string) => void,
    setOpenListDateField: (open:boolean) => void
}

const TimeFieldDetails = ({ listDate,listTime, setSelectedDate, setSelectedTime,setOpenListDateField,selectedField }: TimeFieldDetailsProps) => {

    const onSetSelectedDate = (item: SelectDateType) => {
        if(!selectedField) return message.error('Vui lòng chọn sân trước !')
        setSelectedDate(item)
    }
    const onSetStartTime = (item: ListTimeItemType) => {
        if(!selectedField) return message.error('Vui lòng chọn sân trước !')
        setSelectedTime(item._id??'')
    }

    const onOpenListDateField = () => {
        setOpenListDateField(true)
    }

    const customClassNameButtonDate = (item:SelectDateType) => {
        let currentClassName = 'relative px-8 pt-6 pb-4 border rounded-lg text-base drop-shadow-primary-xs '
        if(item.disabled){
            currentClassName += 'bg-gray-200 border-gray-300'
        }else{
            currentClassName +='cursor-pointer '
            if(item.selected){
                 currentClassName += 'border-green-600'
                }else{
                currentClassName += 'border-gray-300'
            }
        }
        return currentClassName
    }

    const customClassNameButtonTime = (item:ListTimeItemType) => {
        let currentClassName = 'relative px-8 pt-6 pb-4 border rounded-lg text-base drop-shadow-primary-xs '
        if(item.disabled){
            currentClassName += 'bg-gray-200 border-gray-300'
        }else{
            currentClassName +='cursor-pointer '
            if(item.selected){
                 currentClassName += 'border-green-600'
                }else{
                currentClassName += 'border-gray-300'
            }
        }
        return currentClassName
    }
    return (
        <>
            <div className="mb-6 flex flex-col gap-4  ">
                <label className="block font-medium text-base mb-1 w-full lg:w-28 shrink-0">Ngày đặt :</label>
                <div className="pl-3  lg:pl-0">
                    <div className='flex flex-wrap gap-4 mb-3 '>
                        {
                            listDate.map((item) => (
                                <button disabled={item.disabled} onClick={() => onSetSelectedDate(item)} key={item.date} className={customClassNameButtonDate(item)}>
                                    {item.date}
                                    <span className="absolute top-0.5 left-2 text-xs text-gray-500">{item.textDayInWeek}</span>
                                </button>
                            ))
                        }
                    </div>
                    <p onClick={() => onOpenListDateField()} className="text-gray-500 cursor-pointer underline hover:text-black">Xem lịch đặt sân</p>
                </div>
            </div>
            <div className="mb-6 flex flex-col ">
                <label className="block font-medium text-base mb-3 w-full lg:w-28 shrink-0">Giờ sân :</label>
                <div>
                <div className='flex flex-wrap gap-4 mb-3 '>
                        {
                            listTime.map((item) => (
                                <button disabled={item?.disabled} onClick={() => onSetStartTime(item)} key={item._id} className={customClassNameButtonTime(item)}>
                                    {item.text}
                                </button>
                            ))
                        }
                    </div>
                    {/* {timeInfo && timeInfo.text && (
                        <p className="text-gray-500 text-sm">Thành giờ: <span className="text-xl font-bold text-black">{timeInfo.text}</span></p>
                    )} */}
                </div>
            </div>
        </>
    )
}

export default TimeFieldDetails