import { useEffect, useState } from 'react';
import { Button, message, Select } from 'antd';
import { OrderFieldResponseAdmin, StatusOrderField } from '../../../../../../types/api.type';
import { XCircleIcon } from 'lucide-react';
import { LoadingOutlined } from '@ant-design/icons';
import { formatPrice } from '../../../../../../libs/constan';
import { updateOrderFieldAdminById } from '../../../../../../libs/data/order';
import { useNavigate } from 'react-router-dom';




const EditOrderFieldAdminTemplates = ({ loading, orderField }: { loading: boolean, orderField: OrderFieldResponseAdmin | null }) => {
  const [status, setStatus] = useState<StatusOrderField>('pending'); // Trạng thái hiện tại
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (orderField) {
      setStatus(orderField.statusBooking); // Cập nhật trạng thái từ orderField
    }
  }, [orderField?.statusBooking])

  const isDisabledSelect = (condition: Array<StatusOrderField>, status: StatusOrderField) => {
    return condition.includes(status) ? true : false
  }
  const handleStatusChange = (value: StatusOrderField) => {
    setStatus(value);
  };

  const onUpdateStatusOrderField = async () => {
    setIsLoading(true)
    try {
      const result = await updateOrderFieldAdminById(orderField?._id as string, status) as { success: boolean, data: OrderFieldResponseAdmin }
      if (result.success) {
        message.success('Cập nhật trạng thái thành công !')
      }
    } catch (error) {
      console.log('error update status', error)
      message.error('Cập nhật trạng thái thất bại !')
      setStatus(orderField?.statusBooking as StatusOrderField)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Chi tiết đơn đặt sân</h1>

        {
          loading ? (
            <div className='animate-pulse flex items-center justify-center h-96'>
              <LoadingOutlined className='text-2xl' />
            </div>
          ) : (
            <div>
              {
                orderField ? (
                  <div>
                    {/* Thông tin đơn hàng */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-gray-600 font-medium">Mã đơn hàng:</p>
                        <p className="text-gray-800 font-bold">{orderField.orderCode}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Ngày đặt sân:</p>
                        <p className="text-gray-800">{orderField.dayBookings[0]}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Tên khách hàng:</p>
                        <p className="text-gray-800">{orderField.userId.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Email khách hàng:</p>
                        <p className="text-gray-800">{orderField.userId.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Chi nhánh:</p>
                        <p className="text-gray-800">{orderField.branchId.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Tên sân:</p>
                        <p className="text-gray-800">{orderField.fieldId.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Khung giờ:</p>
                        <p className="text-gray-800">{orderField.timeId.text}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Tiền cọc:</p>
                        <p className="text-red-500 font-bold">{formatPrice(orderField.priceDeposit)}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Tổng giá:</p>
                        <p className="text-red-500 font-bold">{formatPrice(orderField.totalPrice)}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Trạng thái:</p>
                        <Select
                          value={status}
                          onChange={handleStatusChange}
                          className="w-full"
                          options={[
                            { value: 'unpaid', label: 'Chưa thanh toán', disabled: true },
                            { value: 'pending', label: 'Đang chờ xử lý', disabled: true },
                            { value: 'confirmed', label: 'Xác nhận', disabled: isDisabledSelect(['unpaid', 'canceled', 'completed', 'refund', 'refunded', 'confirmed'], status) },
                            { value: 'completed', label: 'Hoàn thành', disabled: isDisabledSelect(['unpaid', 'canceled', 'refund', 'refunded', 'pending', 'completed'], status) },
                            { value: 'refund', label: 'Hoàn tiền', disabled: isDisabledSelect(['unpaid', 'canceled', 'completed', 'refund', 'refunded'], status) },
                            { value: 'refunded', label: 'Đã hoàn tiền', disabled: isDisabledSelect(['unpaid', 'canceled', 'completed', 'refund', 'refunded', 'pending', 'confirmed'], status) },
                          ]}

                        />

                      </div>
                    </div>

                    {/* Nút hành động */}
                    <div className="flex justify-end gap-4">
                      <Button onClick={() => navigate('/admin/order-fields')} loading={isLoading} htmlType='button' className="px-6 py-2  text-gray-800 rounded-lg hover:text-red-400 transition ">
                        Quay lại
                      </Button>
                      <Button loading={isLoading} onClick={() => onUpdateStatusOrderField()} type='primary' htmlType='button' className="px-6 py-2">
                        Cập nhật trạng thái
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col gap-4 items-center justify-center h-96'>
                    <XCircleIcon size={30} className='text-red-500' />
                    <p className=' text-red-500 text-lg'>Không tìm thấy đơn hàng</p>
                    <button className=' btn-secondary px-5 py-2 rounded'>Quay lại</button>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div >
  );
};

export default EditOrderFieldAdminTemplates;