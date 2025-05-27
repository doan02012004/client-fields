import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import OrderFieldItem from "../components/order-item";
import { useGetAllOrderFieldQuery } from "../../../../../libs/hooks/order-field";
import { OrderFieldResponseFieldDetail, StatusOrderField } from "../../../../../types/api.type";
import { convertToDateString, dayInWeek, formatPrice, generateStatus } from "../../../../../libs/constan";
import { Pagination, Select } from "antd";


interface PaginationOrderList {
  limit: number,
  page: number,
  total: number,
  totalPage: number

}

const CustomerOrderFieldTemplates = () => {
  const [statusFilter, setStatusFilter] = useState<StatusOrderField | 'all'>('all');
  const [limit, ] = useState(6)
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') || 1
  const status = searchParams.get('status') as StatusOrderField
  const { data } = useGetAllOrderFieldQuery({ limit: limit, page: Number(page), statusBooking: statusFilter })
  const [orderList, setOrderList] = useState<OrderFieldResponseFieldDetail[]>([])
  const [pagination, setPagination] = useState<PaginationOrderList>({
    total: 0,
    limit: 6,
    page: 1,
    totalPage: 1
  })

  useEffect(() => {
    if (data && data.success) {
      setOrderList(data.data)
      setPagination(data.pagination)
    }
  }, [data])

  useEffect(() => {
    if (status) {
      setStatusFilter(status)
    }
  }, [status])

  const onChangeStatusFilter = (value: StatusOrderField | 'all') => {
    setStatusFilter(value)
    searchParams.set('status', value)
    setSearchParams(searchParams)
  }

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className=" px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-semibold text-lg uppercase  lg:text-xl lg:font-bold xl:text-2xl">Đơn đặt sân</h1>
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <label htmlFor="statusFilter" className="text-gray-700">
            Trạng thái đơn đặt sân:
          </label>

          <Select
            placeholder="Chọn trạng thái"
            value={statusFilter}
            onChange={(value) => onChangeStatusFilter(value)}
            options={[
              {
                label: 'Tất cả', value: 'all'
              },
              {
                label: 'Chờ xác nhận', value: 'pending'
              },
              {
                label: 'Đã xác nhận', value: 'confirmed'
              },
              {
                label: 'Hoàn tiền', value: 'refund'
              },
            ]}
          />
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
        {orderList.map((order) => (
          <OrderFieldItem key={order._id} order={order} />
        ))}
      </div>
      {/* Pagination (demo) */}
      <div className="flex justify-center items-center">
        <Pagination
          current={pagination.page}
          pageSize={limit}
          total={pagination.total}
          onChange={(page) => handlePageChange(page)}

        />
      </div>
    </div>
  )
}

export default CustomerOrderFieldTemplates