import { Link } from "react-router-dom";
import {  OrderFieldResponseFieldDetail } from "../../../../../../types/api.type";
import { convertToDateString, dayInWeek, formatPrice, generateStatus } from "../../../../../../libs/constan";

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
            <p>{order.branchId.name} - {order.fieldId.name}</p>
            <p>{dayInWeek[order.dayNumber]} , ngày {convertToDateString(order.dayBookings[0])}</p>
            <p>{order.timeId.text}</p>
        </div>
  
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-black">{formatPrice(order.totalPrice)} ₫</span>
          <span className="flex items-center gap-1 text-gray-600">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M20 4l-8 8-8-8" />
            </svg>
            {generateStatus(order.statusBooking).text}
          </span>
        </div>
      </div>
    );
  };

  export default OrderFieldItem