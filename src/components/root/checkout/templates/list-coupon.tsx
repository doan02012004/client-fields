import { X } from "lucide-react"
import BackgroundOpacity from "../../components/backgroud-opacity"
import { useAppContext } from "../../../../libs/context"


const ListCouponCheckout = () => {

    const { setOpenListCouponCheckout } = useAppContext()
    const onCloseListCoupon = () => {
        setOpenListCouponCheckout(false)
    }
    return (
        <>
            <div className="fixed z-50 bg-white p-6 rounded-lg left-1/2 top-1/2 -translate-1/2">
                {/* title  */}
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="heading-5 text-gray-600 ">vDoan-Soccer khuyến mãi</h5>
                    <X size={20} className=" cursor-pointer" onClick={() => onCloseListCoupon()} />
                </div>
                {/* form  */}
                <div className="flex gap-4 items-center mb-4">
                    <input type="text" className="px-3 py-2 border border-gray-200 text-sm w-48 rounded focus:outline-blue-500 lg:w-80" placeholder="Nhập mã giảm giá..." />
                    <button className="btn-primary-green px-4 py-2 rounded">Áp dụng</button>
                </div>
                {/* list coupon  */}
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="heading-5 text-gray-600 ">Mã giảm giá</h5>
                    <p className="text-gray-400 text-xs">Áp dụng tối đa: 1</p>
                </div>
                <div className="h-96 overflow-y-auto space-y-5">
                    <div className="rounded-lg overflow-hidden flex  border border-gray-200 shadow-sm shadow-gray-400 ">
                        <div className="h-32 bg-green-500 flex justify-center items-center px-6 *:text-white">
                            <div>
                                <h4 className="heading-4">vDoan</h4>
                                <h5 className="heading-5">soccer</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between px-4 py-2 min-w-48">
                            <div>
                                <h5 className="heading-5 mb-1">Giảm 10k</h5>
                                <p className=" whitespace-nowrap mb-1">Tối thiểu 0đ</p>
                            </div>
                            <button className="btn-gradient-primary w-full px-3 py-1 whitespace-nowrap">Áp dụng</button>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden flex  border border-gray-200 shadow-sm shadow-gray-40">
                        <div className="h-32 bg-green-500 flex justify-center items-center px-6 *:text-white">
                            <div>
                                <h4 className="heading-4">vDoan</h4>
                                <h5 className="heading-5">soccer</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between px-4 py-2 min-w-48">
                            <div>
                                <h5 className="heading-5 mb-1">Giảm 10k</h5>
                                <p className=" whitespace-nowrap mb-1">Tối thiểu 0đ</p>
                            </div>
                            <button className="btn-gradient-primary w-full px-3 py-1 whitespace-nowrap">Áp dụng</button>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden flex  border border-gray-200 shadow-sm shadow-gray-400">
                        <div className="h-32 bg-green-500 flex justify-center items-center px-6 *:text-white">
                            <div>
                                <h4 className="heading-4">vDoan</h4>
                                <h5 className="heading-5">soccer</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between px-4 py-2 min-w-48">
                            <div>
                                <h5 className="heading-5 mb-1">Giảm 10k</h5>
                                <p className=" whitespace-nowrap mb-1">Tối thiểu 0đ</p>
                            </div>
                            <button className="btn-gradient-primary w-full px-3 py-1 whitespace-nowrap">Áp dụng</button>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden flex border border-gray-200 shadow-sm shadow-gray-400">
                        <div className="h-32 bg-green-500 flex justify-center items-center px-6 *:text-white">
                            <div>
                                <h4 className="heading-4">vDoan</h4>
                                <h5 className="heading-5">soccer</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between px-4 py-2 min-w-48">
                            <div>
                                <h5 className="heading-5 mb-1">Giảm 10k</h5>
                                <p className=" whitespace-nowrap mb-1">Tối thiểu 0đ</p>
                            </div>
                            <button className="btn-gradient-primary w-full px-3 py-1 whitespace-nowrap">Áp dụng</button>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden flex border border-gray-200 shadow-sm shadow-gray-400">
                        <div className="h-32 bg-green-500 flex justify-center items-center px-6 *:text-white">
                            <div>
                                <h4 className="heading-4">vDoan</h4>
                                <h5 className="heading-5">soccer</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between px-4 py-2 min-w-48">
                            <div>
                                <h5 className="heading-5 mb-1">Giảm 10k</h5>
                                <p className=" whitespace-nowrap mb-1">Tối thiểu 0đ</p>
                            </div>
                            <button className="btn-gradient-primary w-full px-3 py-1 whitespace-nowrap">Áp dụng</button>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundOpacity />
        </>
    )
}

export default ListCouponCheckout