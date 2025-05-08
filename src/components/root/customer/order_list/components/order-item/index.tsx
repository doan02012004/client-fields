import { Link } from "react-router-dom";
import {  OrderFieldResponseFieldDetail } from "../../../../../../types/api.type";

const OrderFieldItem = ({ order }:{order:OrderFieldResponseFieldDetail}) => {
    return (
      <div className="border-b border-gray-200 py-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <Link to={`/customer/order_detail/${order.orderCode}`} className="text-black underline">
            {order.orderCode}
          </Link>
          <span>{order.orderCode}</span>
        </div>
  
        <div className="text-sm text-gray-800 space-y-1">
            <p>Sân hoàng thành - Sân 1</p>
            <p>Thứ hai, ngày 30-04-2025</p>
            <p>17h30 - 19h00</p>
        </div>
  
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-black">{order.totalPrice} ₫</span>
          <span className="flex items-center gap-1 text-gray-600">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M20 4l-8 8-8-8" />
            </svg>
            {order.statusBooking}
          </span>
        </div>
      </div>
    );
  };

  export default OrderFieldItem