import { Button, message } from "antd";
import { formatPrice } from "../../../../libs/constan";
import { useAppContext } from "../../../../libs/context";
import { CreateOrderFieldMutationFn, CreateOrderPayLoad, CreatePaymentOrderFieldMutationFn } from "../../../../libs/data/order";
import { CheckoutResponse } from "../../../../types/api.type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TotalOrderField = ({ infor }: { infor: CheckoutResponse }) => {
  const [loading, setLoading] = useState(false)
  const { setOpenListCouponCheckout, user } = useAppContext()
  const navigate = useNavigate()
  const onHandleOpenListCoupon = () => {
    setOpenListCouponCheckout(true)
  }
  const onHandleOrder = async () => {
    if (!user) {
      message.error("Vui lòng đăng nhập")
    return  navigate('/auth/login')
    }
    // Handle order logic here
    const payload = {
      fieldId: infor.item._id,
      dates: [infor.date],
      branchId: infor.item.branch._id,
      timeId: infor.timeId,
      dayNumber: infor.dayNumber,
      totalPrice: infor.price,
      priceDeposit: infor.priceDeposit,
      paymentMethod: "vnpay",
      userId: user?._id // Replace with actual user ID
    } as CreateOrderPayLoad
    setLoading(true)
    try {
      const result = await CreateOrderFieldMutationFn(payload)
      if (result.success) {
        message.success('Đặt sân thành công')
        // Redirect to payment page or handle payment logic here
        const paymentPayload = {
          amount: result.data.priceDeposit,
          orderCode: result.data.orderCode
        }
        const result2 = await CreatePaymentOrderFieldMutationFn(paymentPayload)
        if (result2.success) {
          setLoading(false)
          window.location.href = result2.data.paymentUrl
        }
      } else {
        message.error('Đặt sân thất bại')
      }
    } catch (error) {
      console.log('error',error)
      message.error('Đặt sân thất bại')
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className=" w-auto">
      {/* mã giảm giá  */}
      <div className=' mb-6'>
        <h2 className="text-lg font-bold mb-4">Mã giảm giá</h2>
        <div className="rounded-lg overflow-hidden flex w-ma  border border-gray-200 shadow-sm shadow-gray-400 mb-3">
          <div className="h-32 bg-green-500 flex justify-center items-center px-6 *:text-white">
            <div>
              <h4 className="heading-4">vDoan</h4>
              <h5 className="heading-5">soccer</h5>
            </div>
          </div>
          <div className="flex flex-col justify-between px-4 py-2 min-w-48">
            <div>
              <h5 className="heading-5 mb-1">Giảm 10k</h5>
              <p className=" whitespace-nowrap mb-1">Tối thiểu 0đ</p>
            </div>
            <button className="btn-gradient-primary w-full px-3 py-1 whitespace-nowrap">Áp dụng</button>
          </div>
        </div>
        <p onClick={() => onHandleOpenListCoupon()} className=" underline text-gray-600 text-center cursor-pointer hover:text-black">Mã giảm giá của bạn</p>
      </div>
      {/* tổng thanh toán  */}
      <div>
        <h2 className="text-lg font-bold mb-2">Tổng thanh toán</h2>
        <div className="flex justify-between mb-1">
          <span>Tạm tính:</span>
          <span>{formatPrice(infor.priceDeposit)}</span>
        </div>
        {/* <div className="flex justify-between mb-1 text-green-600">
          <span>Giảm giá:</span>
          <span>-{discount.toLocaleString()}đ</span>
        </div> */}
        <hr className="my-2 text-gray-300" />
        <div className="flex justify-between font-bold text-lg">
          <span>Tổng tiền:</span>
          <span>{formatPrice(infor.priceDeposit)}</span>
        </div>
        <Button loading={loading} onClick={() => onHandleOrder()} className="w-full cursor-pointer mt-4 py-5 bg-black border border-gray-300 text-white rounded hover:bg-white hover:text-black transition-all">
          Thanh toán ngay
        </Button>
      </div>
    </div>
  );
};

export default TotalOrderField;
