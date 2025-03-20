import { useState } from "react";
import { HeartIcon, Star } from "lucide-react";
import TypeFieldDetails from "../components/type-field";
import TimeFieldDetails from "../components/time-field";
import TabsFieldDetails from "../components/tabs";
import { useNavigate } from "react-router-dom";


const InforFields = () => {
  const field = {
    name: "Sân bóng ABC",
    rating: 4,
    ratingCount: 120,
    originalPrice: 300000,
    promoPrice: 250000,
    types: ["Sân 5 người", "Sân 7 người", "Sân 11 người"],
    timeSlots: ["06:00 - 08:00", "08:00 - 10:00", "18:00 - 20:00", "20:00 - 22:00"]
  };
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState(field.types[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(field.timeSlots[0]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <div className=" py-2 lg:p-4 w-full">
      <h2 className="text-2xl font-bold">{field.name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill={i < field.rating ? "#facc15" : "#e5e7eb"} stroke="none" />
          ))}
        </span>
        <span className="text-gray-600">({field.ratingCount} đánh giá)</span>
      </div>
      <div className="mt-4">
        <span className="text-xl font-semibold text-red-500">{field.promoPrice}đ</span>
        <span className="text-gray-500 line-through ml-2">{field.originalPrice}đ</span>
      </div>

      <TypeFieldDetails />

      <TimeFieldDetails />


      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate('/checkout')} className="mt-6 w-80 uppercase bg-black border border-gray-500 text-white py-3 rounded-md transition-colors duration-300 cursor-pointer hover:bg-white hover:text-black">Đặt sân</button>
        <button className="mt-6 px-4 uppercase bg-white border border-gray-500 text-black py-3 rounded-md transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white"><HeartIcon /></button>
      </div>

      <TabsFieldDetails />
    </div>
  );
};

export default InforFields;
