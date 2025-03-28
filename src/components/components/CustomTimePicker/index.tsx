import { useEffect, useState } from "react"

type CustomTimePickerProps = {
    wrapperClassname?: string,
    value?: number,
    disabled?: boolean
    onChange?: (value: number) => void
}
const listHours = Array.from({ length: 25 }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0')
}));

const listMinutes = [0, 15, 30, 45].map(min => ({
    value: min,
    label: min.toString().padStart(2, '0')
}));
interface Time {
    value: number, label: string
}
const CustomTimePicker = ({ wrapperClassname = 'w-full', disabled = false, value = 0, onChange }: CustomTimePickerProps) => {
    const [currentHours, setCurrentHours] = useState<Time>({ label: '00', value: 0 })
    const [currentMinutes, setCurrentMinutes] = useState<Time>({ label: '00', value: 0 })

    useEffect(() => {
        if (value <= 1440) {
            const hours = Math.floor(value / 60)
            setCurrentHours({
                value: hours,
                label: hours.toString().padStart(2, '0')
            })
            const minutes = value % 60
            setCurrentMinutes({
                value: minutes,
                label: minutes.toString().padStart(2, '0')
            })
        } else {
            if (onChange) {
                onChange(1440)
            }
        }

    }, [value])
    const generateMinutes = (hours: number, minutes: number) => {
        return hours * 60 + minutes
    }
    const onChangeHours = (hours: Time) => {
        if (onChange) {
            const minutesValue = generateMinutes(hours.value, currentMinutes.value)
            if(minutesValue > 1440){
                onChange(1440)
            }else{
                onChange(minutesValue)
            }
        }
        setCurrentHours(hours)
    }
    const onChangeMinutes = (minutes: Time) => {
        if (onChange) {
            const minutesValue = generateMinutes(currentHours.value, minutes.value)
            onChange(minutesValue)
        }
        setCurrentMinutes(minutes)
        
    }
    return (
        <div className={` relative group  ${wrapperClassname}`}>
            <div className={`flex items-center gap-1 p-2 text-xl ${disabled ? 'bg-gray-100' : "cursor-pointer"}`}>
                <span>{currentHours.label}</span>
                <span>:</span>
                <span>{currentMinutes.label}</span>
            </div>
            <div className={` hidden absolute z-30 top-full p-3 border bg-white border-gray-200 rounded ${!disabled && 'group-hover:block'}`}>
                <div className="flex gap-1">
                    <div>
                        <span className="text-gray-400 block">Giờ</span>
                        <div className="h-32 w-20 overflow-y-auto">
                            {listHours.map((hours) => (
                                <button type="button" onClick={() => onChangeHours(hours)} key={hours.value} className={`${currentHours.value == hours.value && 'bg-gray-200'} px-2 py-1 w-full cursor-pointer hover:bg-gray-200`}>{hours.label}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className="text-gray-400 block">Phút</span>
                        <div className="h-32 w-20 overflow-y-auto">
                            {listMinutes.map((minutes) => (
                                <button disabled={currentHours.value >=24} type="button" onClick={() => onChangeMinutes(minutes)} key={minutes.value} className={`${(currentMinutes.value == minutes.value|| currentHours.value >=24)? 'bg-gray-200': 'cursor-pointer'} px-2 py-1 w-full hover:bg-gray-200`}>{minutes.label}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomTimePicker