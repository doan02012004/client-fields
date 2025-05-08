
import { HeartIcon } from "lucide-react";
import TypeFieldDetails from "../components/type-field";
import TimeFieldDetails from "../components/time-field";
import TabsFieldDetails from "../components/tabs";
import { useNavigate } from "react-router-dom";
import { BranchDetailsType } from "../../../../types/api.type";
import { formatPrice } from "../../../../libs/constan";
import { useBranchDetail } from "../../../../libs/zustand/store";
import { message } from "antd";
import { CheckBookingFieldMutationFn } from "../../../../libs/data/branch";

import { useAppContext } from "../../../../libs/context";


const InforFields = ({ data }: { data: BranchDetailsType | null }) => {
  const { selectedTimeId, setSelectedDate, setSelectedTime, selectedDate, selectedField,setOpenListDateField } = useBranchDetail()
  const { setBookingInfo,user } = useAppContext()
  const navigate = useNavigate()


  const onHandleBookingField = async () => {
    if (!selectedDate || !selectedField || !selectedTimeId) return message.error('Vui lòng chọn đầy đủ thông tin')
    if(!user) {
     return message.error('Vui lòng đăng nhập để đặt sân !')
    }
    try {
      const value = {
        fieldId: selectedField?._id,
        timeId: selectedTimeId??'',
        date: selectedDate.dateDefault,
      }
      const result = await CheckBookingFieldMutationFn(value)
      if (result.success) {
        setBookingInfo(result.data)
        navigate(`/checkout?date=${result.data.date}&dayNumber=${result.data.dayNumber}&fieldId=${result.data.fieldId}&timeId=${result.data.timeId}`)
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log('error', error)
      message.error(error.response.data.message)
    }

  }
  return (
    <div className=" py-2 lg:pl-5 w-full">
      <h2 className="text-3xl font-bold mb-6">{data?.item.name}</h2>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-yellow-500 flex">
          {/* {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill={i < field.rating ? "#facc15" : "#e5e7eb"} stroke="none" />
          ))} */}
        </span>
        <span className="text-gray-600">({data?.item.rate} đánh giá)</span>
      </div>


      <TypeFieldDetails listField={data?.listField || []} />

      <TimeFieldDetails
        listDate={data?.listDate || []}
        branch={data?.item}
        timeInfo={data?.time_info}
        setSelectedDate={setSelectedDate}
        setSelectedTime={setSelectedTime}
        setOpenListDateField={setOpenListDateField}
        listTime={data?.listTime || []}
        selectedField={selectedField}
      />

      <div className="mb-6 flex flex-col lg:gap-4 lg:flex-row ">
        <label className="block font-medium mb-1 w-full lg:w-28 shrink-0">Giá sân</label>
        <div className="pl-3">
          <div className="mb-2" >
            {(data && data.price && data.price > 0) ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-red-500 block ">{formatPrice(data?.price ?? 0)} </span>
                <span className="text-lg block ">/ 90 phút </span>
              </div>

            ) : (
              <span className="text-2xl font-semibold text-red-500 block">0 đ</span>
            )}
          </div>
          {data?.price_infos && data.price_infos.length > 0 && (
            <div className="p-4 bg-gray-100 rounded-lg">
              <span className="mb-2 block text-base">Thông tin:</span>
              <ul className="space-y-2">
                {data?.price_infos?.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-400">{item.label} : <span>{formatPrice(item.value)}/1h</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>



      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => onHandleBookingField()} className=" w-80 uppercase btn-gradient-primary py-4">Đặt sân</button>
        <button className=" px-4 uppercase bg-white border border-gray-500 text-black py-4 rounded-md transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white"><HeartIcon /></button>
      </div>

      <TabsFieldDetails />
    </div>
  );
};

export default InforFields;
