import { useState } from 'react';
import { Table, Select, Pagination } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetAllOrderFieldAdminQuery } from '../../../../../../libs/hooks/order-field';
import { TimeInfoType } from '../../../../../../types/api.type';
import { dayInWeek, formatPrice, generateStatus } from '../../../../../../libs/constan';


const { Option } = Select;


const ListOrderFieldAdminTemplates = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const [pageSize, setPageSize] = useState(5);
  const { data, isLoading, isError } = useGetAllOrderFieldAdminQuery({ limit: pageSize, page: currentPage })




  const orders = data?.data || [];
  const customeOrders = orders.map((order) => ({
    ...order,
    key: order._id,
  }));


  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };


  const columns = [
    {
      title: 'Mã đơn đặt sân',
      dataIndex: 'orderCode',
      key: 'orderCode',
      render: (orderCode: string,record) => <Link to={`/admin/order-fields/detail/${record._id}`} className=' hover:underline'>{orderCode}</Link>,
    },
    {
      title: 'Khách hàng',
      dataIndex: 'userId',
      key: 'userId',
      render: (user: { _id: string, name: string }) => <Link to={`/admin/users/${user._id}`} className='block text-black hover:underline'>{user.name}</Link>,

    },
    {
      title: 'Tên sân',
      dataIndex: 'branchId',
      key: 'branchId',
      render: (branch: { _id: string, name: string }, record) => (
        <div className='flex items-center gap-2'>
          <Link to={`/admin/fields/${branch._id}`} className='block text-black hover:underline'>{branch.name}</Link>
          -
          <Link to={`/admin/fields/${record.fieldId._id}`} className='block text-black hover:underline'>{record.fieldId.name}</Link>
        </div>
      ),
    },
    {
      title: 'Khung giờ',
      dataIndex: 'timeId',
      key: 'timeId',
      render: (timeId: TimeInfoType) => <span className=' hover:underline'>{timeId.text}</span>,
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'dayBookings',
      key: 'dayBookings',
      render: (dayBookings: string[], record) => (
        <p>
          <span>
            {dayInWeek[record.dayNumber]}
          </span> <br />
          <span>
            {dayBookings[0]}
          </span>
        </p>
      )
    },
    {
      title: 'Giá sân',
      dataIndex: 'priceDeposit',
      key: 'priceDeposit',
      render: (priceDeposit: number, record) => (
        <div>
          <p>Tiền cọc : <span className='text-red-500 font-medium'>{formatPrice(priceDeposit)}</span></p>
          <p>Giá sân : <span className='text-red-500 font-medium'>{formatPrice(record.totalPrice)}</span></p>
        </div>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'statusBooking',
      key: 'statusBooking',
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded ${generateStatus(status).className} bg-opacity-20`}
        >
          {generateStatus(status).text}
        </span>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Danh sách đơn đặt sân
      </h1>

      {/* Bộ lọc */}
      <div className="flex flex-wrap items-center gap-4 mb-6">

        <Select
          defaultValue="all"
          onChange={(value) => console.log('valueFilter', value)}
          className="w-full sm:w-auto"
        >
          <Option value="all">Tất cả trạng thái</Option>
          <Option value="Đã xác nhận">Đã xác nhận</Option>
          <Option value="Chờ xác nhận">Chờ xác nhận</Option>
        </Select>
      </div>

      {/* Bảng danh sách */}
      <Table
        dataSource={customeOrders}
        columns={columns}
        pagination={false}
        className="bg-white"
      />

      {/* Phân trang */}
      <div className="flex justify-end mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={ data?.pagination?.total || 0}
          onChange={(page) =>handlePageChange(page)}
        />
      </div>
    </div>
  );
};

export default ListOrderFieldAdminTemplates;