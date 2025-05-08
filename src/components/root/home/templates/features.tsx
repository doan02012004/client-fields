import { CheckCircle, MapPin, Star } from 'lucide-react'
import React from 'react'

const FeaturedTemplate = () => {
    return (

        <section className="mb-20 container">
            <h2 className="text-2xl font-bold text-center mb-10">Tại sao chọn VDOAN-SOCCER?</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        icon: <MapPin className="w-8 h-8 text-green-600" />, title: "Hệ thống sân rộng khắp",
                        desc: "Kết nối hàng trăm sân bóng 5, 7 người quanh Hà Nội."
                    },
                    {
                        icon: <CheckCircle className="w-8 h-8 text-green-600" />, title: "Đặt lịch linh hoạt",
                        desc: "Chọn ngày giờ, thanh toán online và nhận thông báo tức thì."
                    },
                    {
                        icon: <Star className="w-8 h-8 text-green-600" />, title: "Ưu đãi hấp dẫn",
                        desc: "Giảm giá lần đầu đặt sân, combo thuê sân – bóng – nước."
                    },
                ].map((item, idx) => (
                    <div key={idx} className="text-center p-6 border border-gray-200 bg-white rounded-xl shadow-sm">
                        <div className="mb-4 flex justify-center">{item.icon}</div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default FeaturedTemplate