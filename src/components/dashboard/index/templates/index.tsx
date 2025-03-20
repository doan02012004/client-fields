import { useState } from "react";

const DashboardTemplates = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  

  return (
    <div className="py-6 space-y-6">
      {/* Bộ lọc ngày tháng năm */}
      <div className="flex items-center gap-4">
        <label className="text-lg font-medium">Từ ngày:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-4 py-2"
        />
        <label className="text-lg font-medium">Đến ngày:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-4 py-2"
        />
      </div>

      {/* Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 bg-blue-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Số sân bóng</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Doanh thu</h3>
          <p className="text-2xl font-bold">50.000.000đ</p>
        </div>
        <div className="p-4 bg-yellow-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Đơn đặt sân mới</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="p-4 bg-red-500 text-white rounded shadow">
          <h3 className="text-lg font-semibold">Số người dùng mới</h3>
          <p className="text-2xl font-bold">15</p>
        </div>
      </div>

       {/* Tables */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Top 10 người đặt sân nhiều nhất */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Top 10 người đặt sân nhiều nhất</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">Tên người dùng</th>
                <th className="border p-2">Số lượt đặt</th>
                <th className="border p-2">Tổng số tiền</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">Người dùng {index + 1}</td>
                  <td className="border p-2">{Math.floor(Math.random() * 20)}</td>
                  <td className="border p-2">{Math.floor(Math.random() * 5000000)}đ</td>
                </tr>
              ))}
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
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">Sân {index + 1}</td>
                  <td className="border p-2">Cơ sở {index + 1}</td>
                  <td className="border p-2">{Math.floor(Math.random() * 50)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplates;