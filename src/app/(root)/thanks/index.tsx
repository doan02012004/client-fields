
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ThankOrderFieldPage = () => {
    const navigate = useNavigate()
    const handleRedirect = (url: string) => {
        navigate(url);
    };
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-green-500 text-6xl mb-4">
        <CheckCircleOutlined />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Đặt sân thành công!</h1>
      <p className="text-gray-600 text-center mb-6">
        Cảm ơn bạn đã đặt sân bóng tại hệ thống của chúng tôi. <br />
        Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin trong thời gian sớm nhất.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => handleRedirect('/')}
          className="px-6 py-2 btn-secondary  rounded-lg hover:bg-blue-600 transition"
        >
          Về trang chủ
        </button>
        <button
          onClick={() => handleRedirect('/customer/order_list')}
          className="px-6 py-2  btn-gradient-primary text-white rounded-lg"
        >
          Xem đơn đặt sân
        </button>
      </div>
    </div>
  );
};

export default ThankOrderFieldPage;