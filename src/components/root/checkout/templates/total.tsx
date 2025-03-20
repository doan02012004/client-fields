const TotalOrderField = () => {
    const totalAmount = 250000;
    const discount = 50000;
    const finalAmount = totalAmount - discount;
  
    return (
      <div className="col-span-12 lg:col-span-4 xl:col-span-3">
        <div className='p-4 rounded shadow'>
          <h2 className="text-lg font-bold mb-2">Tổng thanh toán</h2>
          <div className="flex justify-between mb-1">
            <span>Tạm tính:</span>
            <span>{totalAmount.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between mb-1 text-green-600">
            <span>Giảm giá:</span>
            <span>-{discount.toLocaleString()}đ</span>
          </div>
          <hr className="my-2 text-gray-300" />
          <div className="flex justify-between font-bold text-lg">
            <span>Tổng tiền:</span>
            <span>{finalAmount.toLocaleString()}đ</span>
          </div>
          <button className="w-full cursor-pointer mt-4 p-2 bg-black border border-gray-300 text-white rounded hover:bg-white hover:text-black transition-all">
            Thanh toán ngay
          </button>
        </div>
      </div>
    );
  };
  
  export default TotalOrderField;
  