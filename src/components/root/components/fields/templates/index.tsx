import { HeartIcon } from "lucide-react"
import { Link } from "react-router-dom"


const FieldsItem = () => {
    return (
        <div className='h-max'>
            <div className=" h-[300px] lg:h-[350px] mb-2">
              <Link to={'/fields-details/hello'}>
              <img src="https://picsum.photos/id/400/400" alt="ảnh sản phẩm" className="object-cover w-full h-full" />
              </Link>
            </div>
            <p className="text-lg font-semibold">Sân bóng hoàng thành khung giờ 17h30 đến 19h30</p>
            <div className="flex gap-2 mb-2">
                <span className="w-max shrink-0">Địa chỉ:</span>
                <p>Thôn 1, Tiến Xuân, Thạch Thất, Hà Nội
                </p>
            </div>
            <div className="flex gap-2 mb-2">
                <span className="w-max shrink-0">Khung giờ:</span>
                <div className="flex items-center gap-1">
                    <span>9h30</span>
                    -
                    <span>9h30</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className=" flex items-center gap-3">
                    <span className="text-xl font-semibold">1.000.000đ</span>
                    <span className="text-base text-gray-400 line-through">1.200.00đ</span>
                </div>
                <div>
                    <HeartIcon className=" cursor-pointer text-gray-600 transition-colors duration-300 hover:text-black" />
                </div>
            </div>
        </div>
    )
}

export default FieldsItem