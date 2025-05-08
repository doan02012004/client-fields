
import { useState } from "react";
import { CheckoutResponse } from "../../../../types/api.type";
import { formatPrice } from "../../../../libs/constan";

const InforCheckoutField = ({infor}:{infor:CheckoutResponse}) => {


    const paymentMethods = [
        { id: "credit_card", name: "vnPay", image: "https://picsum.photos/id/40/200/200" },
        { id: "bank_transfer", name: "Zalo Pay", image: "https://picsum.photos/id/40/200/200" },
        { id: "momo", name: "Ví MoMo", image: "https://picsum.photos/id/40/200/200" }
    ];



    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
    const [selectedBank, setSelectedBank] = useState("");

    return (
        <div className=" col-span-12 lg:col-span-8 xl:col-span-9 ">
            {/* Thông tin sân bóng đã order */}
            <div className="mb-8 w-max">
                <h2 className="text-xl font-bold mb-4">Thông tin sân bóng</h2>
                <div className='px-4 py-3 border border-gray-100 rounded-lg shadow-md shadow-green-500/20'>
                    <h4 className='heading-4 mb-4'>{infor.item.branch.name}</h4>
                    <ul className=' space-y-3'>
                        <li className='flex  gap-2 md:items-center'>
                            <span className='text-gray-600 shrink-0 text-base block'>Sân đặt :</span>
                            <p>{infor.item.name}</p>
                        </li>
                        <li className='flex gap-2 md:items-center'>
                            <span className='text-gray-600 shrink-0 text-base  block'>Lịch đặt :</span>
                            <p  className=' w-64 md:w-auto'>{infor.timeText} / Ngày {infor.dateFomat}</p>
                        </li>
                        <li className='flex  gap-2 md:items-center'>
                            <span className='text-gray-600 shrink-0 text-base block'>Địa chỉ :</span>
                            <p className=' w-64 md:w-auto'>{infor.item.branch.address_text}</p>
                        </li>
                        <li className='flex  gap-2 md:items-center'>
                            <span className='text-gray-600 shrink-0 text-base block'>Giá sân :</span>
                            <p className=' block text-red-500 font-medium'>{formatPrice(infor.price)}</p>
                        </li>
                        <li className='flex  gap-2 md:items-center'>
                            <span className='text-gray-600 shrink-0 text-base block'>Tiền cọc sân :</span>
                            <p className=' block text-red-500 font-medium'>{formatPrice(infor.priceDeposit)}</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Phương thức thanh toán</h2>
                <div className="flex flex-wrap gap-8">
                    {paymentMethods.map((method) => (
                        <button
                            key={method.id}
                            className={`flex items-center gap-2 cursor-pointer  border rounded-md p-3 w-full sm:w-auto lg:p-4 transition-all ${paymentMethod === method.id ? "border-blue-500" : "border-gray-300"}`}
                            onClick={() => setPaymentMethod(method.id)}
                        >
                            <img src={method.image} alt={method.name} className="size-12" />
                            <span>{method.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InforCheckoutField;
