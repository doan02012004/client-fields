import { X } from 'lucide-react';
import BackgroundOpacity from '../../../components/backgroud-opacity';
import { useBranchDetail } from '../../../../../libs/zustand/store';
import { useGetAllOrderFieldByDateQuery } from '../../../../../libs/hooks/field';
import { ChangeEvent, useEffect, useState } from 'react';
import { OrderFieldResponseFieldDetail } from '../../../../../types/api.type';
import { generateNext7Days, generateStatus } from '../../../../../libs/constan';

const ListDateField = ({ branchId }: { branchId: string }) => {
  const { setOpenListDateField } = useBranchDetail()
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [listOrderField, setListOrderField] = useState<OrderFieldResponseFieldDetail[]>([])
  const { data } = useGetAllOrderFieldByDateQuery({ branchId: branchId, date: selectedDate })

  useEffect(() => {

    if (data && data.success) {
      setListOrderField(data.data)
    }

  }, [data])

  const onChangeSelectDate = (e:ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value)
  }
  return (
    <>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-1/2 w-full max-w-sm p-6 bg-white rounded-lg shadow-lg lg:max-w-lg">
        <div className=' flex justify-between items-center'>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Danh sách đặt sân</h1>
          <X className='cursor-pointer' onClick={() => setOpenListDateField(false)} />
        </div>
        <select
        onChange={(e) => onChangeSelectDate(e)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">7 ngày gần nhất</option>
          {generateNext7Days().map((day) => (
            <option key={day.value} value={day.value}>{day.text}</option>
          ))}
         
        </select>
        <div className="space-y-4 h-80 overflow-y-auto lg:h-96">
          {
          listOrderField.length > 0 ? (
            listOrderField.map((orderField) => (
              <div key={orderField._id} className="p-3 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-800">{orderField.userId.name}</p>
                <p className="text-gray-600">{orderField.timeId.text}</p>
                <span className={` ${generateStatus(orderField.statusBooking).className} px-3 py-1 mt-2 inline-block 0 rounded-lg text-sm font-medium`}>
                 {generateStatus(orderField.statusBooking).text}
                </span>
              </div>
            ))
          ): (
            <p className='text-center'>Chưa có lịch đặt sân nào</p>
          )
          }
        </div>
      </div>
      <BackgroundOpacity />
    </>
  );
};

export default ListDateField