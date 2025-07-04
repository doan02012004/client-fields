import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderFieldDetailWebFn } from "../../../../../libs/data/order";
import { OrderFieldResponseFieldDetail } from "../../../../../types/api.type";
import { LoadingOutlined } from "@ant-design/icons";
import { convertToDateString, formatPrice, generateStatus } from "../../../../../libs/constan";
import FormRatingOrderDetailWeb from "../components/form-rating";
import { useAppContext } from "../../../../../libs/context";
import { Tag } from "antd";



const CustomerOrderDetailTemplates = () => {
  const { orderCode } = useParams()
  const [loadingData, setLoadingData] = useState(true)
  const [orderDetail, setOrderDetail] = useState<OrderFieldResponseFieldDetail | null>(null)
  const { isOpenRating, setIsOpenRating } = useAppContext()
  useEffect(() => {
    const fetchGetOrderDetail = async (orderCode: string) => {
      try {
        const data = await getOrderFieldDetailWebFn(orderCode)
        if (data && data.success) {
          setOrderDetail(data.data)
        }
      } catch (error) {
        console.log("error order detail", error)
      } finally {
        setLoadingData(false)
      }
    }

    if (orderCode) {
      fetchGetOrderDetail(orderCode)
    }
  }, [orderCode])

  return (
    <>
      <div className="min-h-screen w-full ">
        <div className=" bg-white  px-4 py-6 rounded-lg shadow-md">
          <div className="flex flex-col gap-4 mb-6 md:justify-between md:flex-row">
            <h1 className="text-2xl font-bold text-gray-800 ">Chi Tiết Đơn Đặt Sân</h1>
            {orderDetail && (
              <div className="flex items-center gap-4">
                {['completed', 'confirmed'].includes(orderDetail.statusBooking) && orderDetail.isRating == false && (<button onClick={() => setIsOpenRating(true)} className="btn-primary px-4 py-2 rounded">Đánh giá</button>)}
                {orderDetail.isRating && (<Tag color="blue" className="px-3 py-1 text-base ">Đã đánh giá</Tag>)}
                {orderDetail.statusBooking == 'unpaid' && (<button className="btn-primary px-4">Đặt lại sân</button>)}
              </div>
            )}
            {/* <button className="btn-primary px-4">Đang chờ xác nhận</button> */}
          </div>

          {loadingData && (
            <div className="flex justify-center items-center min-h-52 w-full">
              <LoadingOutlined className="text-3xl text-center" />
            </div>
          )}
          {
            !loadingData && (
              <>
                {orderDetail && (
                  <>
                    <div className="grid grid-cols-1 mb-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      <Info label="Mã đơn" value={orderDetail.orderCode} />
                      <Info label="Trạng thái" value={<span className={`${generateStatus(orderDetail.statusBooking).className}`}>{generateStatus(orderDetail.statusBooking).text}</span>} />
                      <Info label="Tên người đặt" value={orderDetail.userId.name} />
                      <Info label="Số điện thoại" value={orderDetail.userId.phoneNumber} />
                      <Info label="Email" value={orderDetail.userId.email} />
                      <Info label="Cơ sở" value={orderDetail.branchId.name} />
                      <Info label="Tên sân" value={orderDetail.fieldId.name} />
                      <Info label="Ngày đặt" value={convertToDateString(orderDetail.dayBookings[0])} />
                      <Info label="Khung giờ" value={orderDetail.timeId.text} />
                      {/* <Info label="Ghi chú" value={booking.note || "Không có"} /> */}
                    </div>

                    <div className="border border-gray-200 rounded shadow space-y-3 p-4">
                      <p className="font-semibold text-blue-600 mb-2">
                        Tiền cọc: {formatPrice(orderDetail.priceDeposit)}
                      </p>
                      <p className=" font-semibold ">
                        Số tiền còn lại phải thanh toán: {formatPrice(orderDetail.totalPrice - orderDetail.priceDeposit )}
                      </p>
                      <p className=" font-semibold ">
                        Tổng tiền: {formatPrice(orderDetail.totalPrice)}
                      </p>

                    </div>
                  </>
                )}
              </>
            )
          }
        </div>
      </div>
      {
        isOpenRating && (
          <FormRatingOrderDetailWeb orderFieldDetail={orderDetail} setOrderFieldDetail={setOrderDetail} />
        )
      }
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Info = ({ label, value }: { label: string, value: any }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-base font-medium text-gray-800">{value}</p>
  </div>
);


export default CustomerOrderDetailTemplates