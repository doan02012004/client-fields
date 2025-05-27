import { X } from "lucide-react"
import BackgroundOpacity from "../../backgroud-opacity"
import { useAppContext } from "../../../../../libs/context"
import TodayFieldItem from "../components/today-field-item"
import { useGetAllOrderFieldSidebarQuery } from "../../../../../libs/hooks/order-field"
import { useEffect } from "react"

import { useNavigate } from "react-router-dom"


const TodayField = () => {
    const { openTodayField, setOpenTodayField, user,orderFields, setOrderFields } = useAppContext()
    const navigate = useNavigate()
    const { data } = useGetAllOrderFieldSidebarQuery()

    useEffect(() => {
        if (data && data.success) {
            setOrderFields(data.data)
        }
    }, [data])

    const onRedirect = () => {
        let url = ''
        if (user) {
            url = '/customer/order_list'
        } else {
            url = '/auth/login'
        }
        navigate(url)
    }
    return (
        <div>
            <div className={`fixed z-50 right-0 inset-y-0  w-80 bg-white p-3 transition-all duration-300 sm:p-4 sm:w-96 ${openTodayField ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className='flex justify-between items-center pb-3 border-b border-gray-200 mb-6 '>
                    <h3 className='font-bold text-xl'>Lịch sân hôm nay</h3>
                    <X size={30} onClick={() => setOpenTodayField(false)} className=' cursor-pointer text-gray-600 hover:text-black' />
                </div>
                <div className=" relative h-full">
                    <div className=" overflow-y-auto space-y-4  h-[calc(100%-150px)]">
                        {
                            user ? (
                                <>
                                    {orderFields.length > 0 ? (
                                        <>
                                            {orderFields.map((item) => (
                                                <TodayFieldItem key={item._id} item={item} />
                                            ))}
                                        </>
                                    ) : (
                                        <p className="text-center">Chưa có lịch đặt sân nào</p>
                                    )}
                                </>
                            ) : (
                                <p className="text-center">Vui lòng đăng nhập !</p>
                            )
                        }

                    </div>
                    <div className=" absolute bottom-20 inset-x-0">
                        <button onClick={() => onRedirect()} className="btn-primary w-full text-center py-3">{user ? 'Xem tất cả' : 'Đăng nhập'}</button>
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