import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OrderFieldItem from "../components/order-item";
import { useGetAllOrderFieldQuery } from "../../../../../libs/hooks/order-field";
import {  OrderFieldResponseFieldDetail } from "../../../../../types/api.type";
import { convertToDateString, dayInWeek, formatPrice, generateStatus } from "../../../../../libs/constan";
import { Pagination } from "antd";


const mockOrders = [
    {
      id: "IVM8333696",
      date: "12/12/2024 22:51:05",
      status: "Đã hủy đơn hàng",
      products: [
        "1x Áo sơ mi Lụa Muse, Đen",
        "1x Áo sơ mi Lụa Muse, Đen",
        "1x Áo blazer Tweed Glow dáng ngắn, Đỏ",
      ],
      total: 3170000,
    },
    {
      id: "IVM8333582",
      date: "12/12/2024 21:58:40",
      status: "Đã hủy đơn hàng",
      products: [
        "1x Áo sơ mi Lụa Muse, Đen",
        "1x Áo sơ mi Lụa Muse, Đen",
        "1x Áo blazer Tweed Glow dáng ngắn, Đỏ",
      ],
      total: 3170000,
    },
    {
      id: "IVM8333573",
      date: "12/12/2024 21:56:06",
      status: "Đã hủy đơn hàng",
      products: [
        "1x Áo sơ mi Lụa Muse, Đen",
        "1x Áo blazer Tweed Glow dáng ngắn, Đỏ",
      ],
      total: 2330000,
    },
    {
      id: "IVM7847435",
      date: "27/07/2024 00:04:39",
      status: "Đã hủy đơn hàng",
      products: ["1x Áo thun polo kẻ viền, Xanh cổ vịt đậm"],
      total: 450000,
    },
  ];
  
const CustomerOrderFieldTemplates = () => {
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [limit,setLimit] = useState(6)
  const [searchParams,] = useSearchParams()
  const page = searchParams.get('page') || 1
  const {data} = useGetAllOrderFieldQuery({limit:limit,page:Number(page)})
  const [orderList, setOrderList] = useState<OrderFieldResponseFieldDetail[]>([])

  useEffect(() => {
    if(data && data.success){
      setOrderList(data.data)
    }
  },[data])

  return (
    <div className=" px-4 py-8">
    <div className="flex items-center justify-between mb-6">
      <h1 className="font-semibold text-lg uppercase  lg:text-xl lg:font-bold xl:text-2xl">Đơn đặt sân</h1>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <label htmlFor="statusFilter" className="text-gray-700">
          Trạng thái đơn hàng:
        </label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-1 py-1 lg:px-3 "
        >
          <option>Tất cả</option>
          <option>Đã hủy đơn hàng</option>
          <option>Đang xử lý</option>
          <option>Đã giao</option>
        </select>
      </div>
    </div>

    <table className="w-full table-auto border-collapse text-sm hidden mb-4 lg:block">
      <thead>
        <tr className="border-b border-gray-200 font-semibold text-left *:px-4 *:whitespace-nowrap">
          <th className="py-2">MÃ ĐƠN ĐẶT SÂN</th>
          <th className="py-2">NGÀY</th>
          <th className="py-2">TRẠNG THÁI</th>
          <th className="py-2">SÂN ĐẶT</th>
          <th className="py-2 text-right">TỔNG TIỀN</th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((order) => (
            <tr key={order._id} className="border-b border-gray-200 *:px-4">
              <td className="py-3 text-blue-600 font-medium hover:underline">
                <Link to={`/customer/order_detail/${order.orderCode}`}>{order.orderCode}</Link>
              </td>
              <td className="py-3">{dayInWeek[order.dayNumber]}, Ngày {convertToDateString(order.dayBookings[0])}</td>
              <td className="py-3 flex items-center gap-1 text-gray-600">
                <span className="text-lg">🔄</span>
                {generateStatus(order.statusBooking).text}
              </td>
              <td className="py-3">
               <p>* {order.branchId.name}</p>
               <p>* {order.fieldId.name}</p>
               <p>* {order.timeId.text}</p>
              </td>
              <td className="py-3 text-right font-semibold">
                {formatPrice(order.totalPrice)}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    
   <div className=" mb-4 lg:hidden">
   {mockOrders.map((order) => (
        <OrderFieldItem key={order.id} order={order} />
    ))}
   </div>
    {/* Pagination (demo) */}
   <div className="flex justify-center items-center">
   <Pagination 
   
   />
   </div>
  </div>
  )
}

export default CustomerOrderFieldTemplates