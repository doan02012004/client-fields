import { CloseCircleOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";


const FailOrderPage = () => {
     const navigate = useNavigate()
    const handleRedirect = (url: string) => {
        navigate(url);
    };
  return (
       <div className="flex flex-col items-center justify-center py-20">
      <div className="text-red-500 text-6xl mb-4">
        <CloseCircleOutlined />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Đặt sân thất bại!</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleRedirect('/')}
          className="px-6 py-2 btn-secondary rounded-lg transition"
        >
          Về trang chủ
        </button>
        <button
          onClick={() => handleRedirect('/customer/order_list')}
          className="px-6 py-2  btn-gradient-primary text-white "
        >
          Quay lại
        </button>
      </div>
    </div>
  )
}

export default FailOrderPage