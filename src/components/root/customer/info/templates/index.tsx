import { useForm } from "react-hook-form";
import { useAppContext } from "../../../../../libs/context";
import ChangePasswordForm from "../components/change-password";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const CustomerInfoSchema = z.object({
  name:z.string(),
  email:z.string().email(),
  phoneNumber:z.string(),
})


const CustomerInfoTemplates = () => {
  const {openChangePasswordForm,setOpenChangePasswordForm, user} = useAppContext()
  const {register,handleSubmit,formState:{errors}} = useForm<{name:string,email:string,phoneNumber:string}>({
    resolver:zodResolver(CustomerInfoSchema),
    defaultValues: {
      name:user?.name,
      email:user?.email,
      phoneNumber:user?.phoneNumber,
    }
  })
  const onOpenChangePasswordForm = () => {
    setOpenChangePasswordForm(true)
  }
  return (
  <>
    <div >
      <h1 className="text-2xl font-bold mb-4">TÀI KHOẢN CỦA TÔI</h1>

      <div className="bg-blue-100 text-blue-800 p-3 rounded mb-6 text-sm">
        "Vì chính sách an toàn, bạn không thể thay đổi SĐT, Ngày sinh, Họ tên. Vui lòng liên hệ CSKH 0345908973 để được hỗ trợ"
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block font-medium">Họ và Tên</label>
            <input type="text" value="Đoàn" disabled className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
          </div>
          <div>
            <label className="block font-medium">Số điện thoại</label>
            <input type="text" value="0345908973" disabled className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input type="email" value="doanbvph32532@fpt.edu.vn" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Giới tính</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" checked disabled />
                Nam
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" disabled />
                Nữ
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" disabled />
                Khác
              </label>
            </div>
          </div>
          <div>
            <label className="block font-medium">Ngày sinh</label>
            <input type="text" value="02/01/2004" disabled className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
          </div>
          <div className="flex gap-4 mt-4">
            <button className="btn-primary px-6 py-2 rounded-full cursor-pointer">CẬP NHẬT</button>
            <button onClick={() => onOpenChangePasswordForm()} className="btn-secondary px-6 py-2 rounded-full cursor-pointer">ĐỔI MẬT KHẨU</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="border border-gray-300 rounded p-4 h-max">
          <div className="grid grid-cols-2 border-b border-gray-200 py-2">
            <span className="font-medium">Điểm chiết khấu</span>
            <span>0</span>
          </div>
          <div className="grid grid-cols-2 border-b border-gray-200 py-2">
            <span className="font-medium">Chiết khấu</span>
            <span>0%</span>
          </div>
          <div className="grid grid-cols-2 py-2">
            <span className="font-medium">Hạn thẻ</span>
            <span className="font-semibold">09/05/2025</span>
          </div>
        </div>
      </div>
    </div>
   {openChangePasswordForm && (
     <ChangePasswordForm />
   )}
  </>
  );
};

export default CustomerInfoTemplates;