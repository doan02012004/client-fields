import { useEffect, useState } from 'react';
import { Table, Select, Pagination } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetAllOrderFieldAdminQuery } from '../../../../../../libs/hooks/order-field';
import { OrderFieldResponseAdmin, StatusOrderField, TimeInfoType } from '../../../../../../types/api.type';
import { dayInWeek, formatPrice, generateStatus } from '../../../../../../libs/constan';


const { Option } = Select;


const ListOrderFieldAdminTemplates = () => {
  const [statusOrder,setStatusOrder] = useState<StatusOrderField | 'all'>('all')
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const status = searchParams.get('status') as StatusOrderField | "all" || undefined
  const [pageSize, setPageSize] = useState(5);
  const { data } = useGetAllOrderFieldAdminQuery({ limit: pageSize, page: currentPage,statusBooking:status })

  useEffect(() => {
    if(status){
      setStatusOrder(status)
    }
  },[status])


  const orders = data?.data || [];
  const customeOrders = orders.map((order) => ({
    ...order,
    key: order._id,
  })) as OrderFieldResponseAdmin[];


  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  
    const onChangeStatusFilter = (value: StatusOrderField|'all') => {
      setStatusOrder(value)
      searchParams.set('status', value)
      setSearchParams(searchParams)
    }

  const columns = [
    {
      title: 'Mã đơn đặt sân',
      dataIndex: 'orderCode',
      key: 'orderCode',
      render: (orderCode: string,record:OrderFieldResponseAdmin) => <Link to={`/admin/order-fields/detail/${record._id}`} className=' hover:underline'>{orderCode}</Link>,
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
      render: (branch: { _id: string, name: string }, record:OrderFieldResponseAdmin) => (
        <div className='flex items-center gap-2'>
          <Link to={`/admin/branchs/edit/${branch._id}`} className='block text-black hover:underline'>{branch.name}</Link>
          -
          <Link to={`/admin/fields/edit/${record.fieldId._id}`} className='block text-black hover:underline'>{record.fieldId.name}</Link>
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
      render: (dayBookings: string[], record:OrderFieldResponseAdmin) => (
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
      render: (priceDeposit: number, record:OrderFieldResponseAdmin) => (
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
          value={statusOrder}
          onChange={(value) =>onChangeStatusFilter(value)}
          className="w-full sm:w-auto"
          options={[
             {
              label:'Tất cả đơn đặt sân', value:"all"
            },
            {
              label:'Chờ xác nhận', value:"pending"
            },
             {
              label:'Đã xác nhận', value:"confirmed"
            },
             {
              label:'Hoàn thành', value:"completed"
            },
             {
              label:'Hoàn tiền', value:"refund"
            },
          ]}
        />
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