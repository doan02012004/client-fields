import { X } from "lucide-react"
import BackgroundOpacity from "../../backgroud-opacity"
import { useAppContext } from "../../../../../libs/context"
import TodayFieldItem from "../components/today-field-item"


const TodayField = () => {
    const { openTodayField, setOpenTodayField } = useAppContext()
    return (
        <div>
            <div className={`fixed z-50 right-0 inset-y-0  w-80 bg-white p-3 transition-all duration-300 sm:p-4 sm:w-96 ${openTodayField ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className='flex justify-between items-center pb-3 border-b border-gray-200 mb-6 '>
                    <h3 className='font-bold text-xl'>Lịch sân hôm nay</h3>
                    <X size={30} onClick={() => setOpenTodayField(false)} className=' cursor-pointer text-gray-600 hover:text-black' />
                </div>
                <div className=" relative h-full">
                    <div className=" overflow-y-auto space-y-4  h-[calc(100%-150px)]">
                        <TodayFieldItem />
                        <TodayFieldItem />
                        <TodayFieldItem />
                    </div>
                    <div className=" absolute bottom-20 inset-x-0">
                        <button className="btn-primary w-full text-center py-3">Xem tất cả</button>
                    </div>
                </div>
            </div>
            {openTodayField && (
                <BackgroundOpacity />
            )}
        </div>
    )
}

export default TodayField