import { Select } from "antd";
import { useGetMonthlyRevenueQuery, useGetNewUsersQuery, useGetPendingBookingsQuery, useGetSuccessBookingsQuery, useGetTopFieldsQuery, useGetTopUsersQuery } from "../../../../libs/hooks/statistic";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { formatPrice } from "../../../../libs/constan";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;
const DashboardTemplates = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlMonth = Number(searchParams.get('month'));
  const urlYear = Number(searchParams.get('year'));

  const [month, setMonth] = useState<number>(urlMonth || new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(urlYear || new Date().getFullYear());

  const { data: resultRevenue } = useGetMonthlyRevenueQuery({ month, year });
  const { data: resultSuccessBookings } = useGetSuccessBookingsQuery({ month, year })
  const { data: resultPendingBookings } = useGetPendingBookingsQuery({ month, year })
  const { data: resultNewUsers } = useGetNewUsersQuery({ month, year })
  const { data: resultTopUsers, isLoading: loadingTopUsers } = useGetTopUsersQuery()
  const { data: resultTopFields, isLoading: loadingTopFields } = useGetTopFieldsQuery()
  // Tính toán các tháng hiện tại và 6 tháng gần nhất
  const getLast7Months = () => {
    const months = [];
    const currentMonth = dayjs(); // Tháng hiện tại
    for (let i = 5; i >= 0; i--) {
      const month = currentMonth.subtract(i, 'month');
      months.push({
        value: month.month() + 1, // Lấy tháng (1-12)
        label: `Tháng ${month.month() + 1} - ${month.year()}`, // Định dạng tháng/năm
      });
    }
    return months;
  };

  const handleMonthChange = (value: string) => {
    const [selectedMonth, selectedYear] = value.split('/');
    setMonth(Number(selectedMonth));
    setYear(Number(selectedYear));

    // Cập nhật URL mà không cần nhấn nút Lọc
    navigate(`?month=${selectedMonth}&year=${selectedYear}`);
  };
  useEffect(() => {
    if (urlMonth) setMonth(urlMonth);
    if (urlYear) setYear(urlYear);
  }, [urlMonth, urlYear]);


  return (
    <div className="py-6 space-y-6">
      {/* Bộ lọc ngày tháng năm */}
      <div className="flex items-center gap-4">
        <label className="text-lg font-medium">Chọn tháng:</label>
        <Select
          value={`${month}/${year}`}
          onChange={handleMonthChange}
          style={{ width: 150 }}
        >
          {getLast7Months().map(({ value, label }) => (
            <Option key={value} value={`${value}/${year}`}>
              {label}
            </Option>
          ))}
        </Select>
      </div>
      {/* Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 bg-green-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Doanh thu</h3>
          <p className="text-2xl font-bold">{(resultRevenue && resultRevenue.success) ? formatPrice(resultRevenue.data.totalRevenue) : '0đ'}</p>
        </div>
        <div className="p-4 bg-blue-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Đơn hoàn thành</h3>
          <p className="text-2xl font-bold">{(resultSuccessBookings && resultSuccessBookings.success) ? `${resultSuccessBookings.data.successBookings} đơn` : '0 đơn'}</p>
        </div>
        <div className="p-4 bg-yellow-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Đơn đặt sân mới</h3>
          <p className="text-2xl font-bold">{(resultPendingBookings && resultPendingBookings.success) ? `${resultPendingBookings.data.pendingBookings} đơn` : '0 đơn'}</p>
        </div>
        <div className="p-4 bg-red-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Số người dùng mới</h3>
          <p className="text-2xl font-bold">{(resultNewUsers && resultNewUsers.success) ? `${resultNewUsers.data.newUsers} người` : '0 người'}</p>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Top 10 người đặt sân nhiều nhất */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Top 5 người đặt sân nhiều nhất</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">Tên người dùng</th>
                <th className="border p-2">Số điện thoại</th>
                <th className="border p-2">Số lượt đặt</th>
              </tr>
            </thead>
            <tbody>
              {loadingTopUsers ? (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    <LoadingOutlined />
                  </td>
                </tr>
              ) : (
                resultTopUsers?.success &&
                resultTopUsers.data.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.phoneNumber}</td>
                    <td className="border p-2">{item.bookingCount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Top 5 sân được đặt nhiều nhất */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Top 5 sân được đặt nhiều nhất</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">Tên sân</th>
                <th className="border p-2">Cơ sở sân</th>
                <th className="border p-2">Số lượt đặt</th>
              </tr>
            </thead>
            <tbody>
              {loadingTopFields ? (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    <LoadingOutlined />
                  </td>
                </tr>
              ) : (
                resultTopFields?.success &&
                resultTopFields.data.map((item, index) => (
                  <tr key={item.fieldId} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.fieldName}</td>
                    <td className="border p-2">{item.branchName}</td>
                    <td className="border p-2">{item.bookingCount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplates;