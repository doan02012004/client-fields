import React from 'react'

import { useState } from "react";

const InforCheckoutField = () => {
    const fieldOrder = {
        name: "Sân bóng ABC",
        date: "20/03/2025",
        time: "18:00 - 20:00",
        price: 250000,
        image: "https://picsum.photos/id/25/1000/1000"
    };

    const paymentMethods = [
        { id: "credit_card", name: "Thẻ tín dụng", image: "https://via.placeholder.com/40" },
        { id: "bank_transfer", name: "Chuyển khoản ngân hàng", image: "https://via.placeholder.com/40" },
        { id: "momo", name: "Ví MoMo", image: "https://via.placeholder.com/40" }
    ];

    const banks = [
        { id: "vietcombank", name: "Vietcombank", image: "https://via.placeholder.com/40" },
        { id: "techcombank", name: "Techcombank", image: "https://via.placeholder.com/40" },
        { id: "tpbank", name: "TPBank", image: "https://via.placeholder.com/40" }
    ];

    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
    const [selectedBank, setSelectedBank] = useState("");
    
    return (
        <div className=" col-span-12 lg:col-span-8 xl:col-span-9 ">
            {/* Thông tin sân bóng đã order */}
            <div className="mb-8 flex  gap-4">
                <div className='size-52 rounded-md overflow-hidden'>
                <img src={fieldOrder.image} alt={fieldOrder.name} className="w-full h-full object-cover " />
                </div>
                <div className='space-y-4'>
                    <h2 className="text-xl font-bold tracking-wide">Thông tin đặt sân</h2>
                    <p><strong>Tên sân:</strong> {fieldOrder.name}</p>
                    <p><strong>Ngày:</strong> {fieldOrder.date}</p>
                    <p><strong>Khung giờ:</strong> {fieldOrder.time}</p>
                    <p><strong>Giá:</strong> {fieldOrder.price}đ</p>
                </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Phương thức thanh toán</h2>
                <div className="flex flex-wrap gap-4">
                    {paymentMethods.map((method) => (
                        <button
                            key={method.id}
                            className={`flex items-center gap-2 cursor-pointer  border rounded-md p-3 w-full sm:w-auto lg:p-4 transition-all ${paymentMethod === method.id ? "border-blue-500" : "border-gray-300"}`}
                            onClick={() => setPaymentMethod(method.id)}
                        >
                            <img src={method.image} alt={method.name} className="w-8 h-8" />
                            <span>{method.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chọn ngân hàng hoàn tiền */}
            <div>
                <h2 className="text-xl font-bold mb-4">Chọn ngân hàng hoàn tiền</h2>
                <div className="flex flex-wrap gap-4">
                    {banks.map((bank) => (
                        <button
                            key={bank.id}
                            className={`flex items-center gap-2 cursor-pointer  border rounded-md p-3 w-full sm:w-auto lg:p-4 transition-all ${selectedBank === bank.id ? "border-blue-500" : "border-gray-300"}`}
                            onClick={() => setSelectedBank(bank.id)}
                        >
                            <img src={bank.image} alt={bank.name} className="w-8 h-8" />
                            <span>{bank.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InforCheckoutField;
