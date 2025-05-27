import { Link, useNavigate } from "react-router-dom";
import { OrderFieldResponseFieldDetail } from "../../../../../../types/api.type";
import { convertToDateString, dayInWeek, formatPrice, generateStatus } from "../../../../../../libs/constan";
import { useAppContext } from "../../../../../../libs/context";


const TodayFieldItem = ({ item }: { item: OrderFieldResponseFieldDetail }) => {
  const navigate = useNavigate()
  const { setOpenTodayField } = useAppContext()
  const fieldData = {
    image: "https://picsum.photos/id/44/300/300",
    name: "Sân bóng XYZ",
    time: "18:00 - 20:00",
    address: "123 Đường ABC, TP.HCM",
    price: 300000,
    status: "Đã thanh toán",
    detailLink: "/san-bong/xyz",
    code: "QD-122323"
  };
  const onRedirect = () => {
    setOpenTodayField(false)
    navigate(`/customer/order_detail/${item.orderCode}`)
  }
  return (
    <div className=" p-4 w-full border-b ">
      <Link to={`/customer/order_detail/${item.orderCode}`}>
        <img src={item.branchId.images[0]} alt={item.branchId.name} className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer" />
      </Link>
      <h2 className="text-lg font-bold">
        <Link to={fieldData.detailLink} className="hover:underline text-gray-800">
          {item.branchId.name} - {item.fieldId.name}
        </Link>
      </h2>
      <p className="text-gray-600">Mã giao dịch: {item.orderCode}</p>
      <p className="text-gray-600">Khung giờ: {item.timeId.text}</p>
      <p className="text-gray-600">Lịch: {dayInWeek[item.dayNumber]} , ngày {convertToDateString(item.dayBookings[0])}</p>
      <p className="text-gray-600">Tiền cọc: {formatPrice(item.priceDeposit)} ( {item.paymentDate !== null && 'Đã thanh toán'})</p>
      <p className="text-gray-600">Giá sân: {formatPrice(item.totalPrice)}</p>
      <p className={`font-bold ${item.statusBooking == 'confirmed' && 'text-green-500'}`}>
           {generateStatus(item.statusBooking).text}
      </p>
      <button onClick={() => onRedirect()} className="w-full mt-3 p-2 btn-primary">
        Xem chi tiết
      </button>
    </div>
  );
};

export default TodayFieldItem;
