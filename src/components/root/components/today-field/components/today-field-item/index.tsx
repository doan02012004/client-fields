import { Link } from "react-router-dom";


const TodayFieldItem = () => {
  const fieldData = {
    image: "https://picsum.photos/id/44/300/300",
    name: "Sân bóng XYZ",
    time: "18:00 - 20:00",
    address: "123 Đường ABC, TP.HCM",
    price: 300000,
    status: "Đã thanh toán",
    detailLink: "/san-bong/xyz",
    code:"QD-122323"
  };

  return (
    <div className=" p-4 w-full border-b ">
      <Link to={fieldData.detailLink}>
        <img src={fieldData.image} alt={fieldData.name} className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer" />
      </Link>
      <h2 className="text-lg font-bold">
        <Link to={fieldData.detailLink} className="hover:underline text-gray-800">
          {fieldData.name}
        </Link>
      </h2>
      <p className="text-gray-600">Mã giao dịch: {fieldData.code}</p>
      <p className="text-gray-600">Khung giờ: {fieldData.time}</p>
      <p className="text-gray-600">Địa chỉ: {fieldData.address}</p>
      <p className="text-gray-600">Giá sân: {fieldData.price.toLocaleString()}đ</p>
      <p className={`font-bold ${fieldData.status === "Đã thanh toán" ? "text-green-600" : "text-red-600"}`}>
        {fieldData.status}
      </p>
      <button className="w-full mt-3 p-2 btn-primary">
        Xem chi tiết
      </button>
    </div>
  );
};

export default TodayFieldItem;
