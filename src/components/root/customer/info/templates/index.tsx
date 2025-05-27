import { useForm } from "react-hook-form";
import { useAppContext } from "../../../../../libs/context";
import ChangePasswordForm from "../components/change-password";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { formatDate } from "../../../../../libs/constan";
import { message } from "antd";
import { useUpdateUserByIdMutation } from "../../../../../libs/hooks/user";


const CustomerInfoSchema = z.object({
  name: z.string().min(1, 'Name vui lòng không bỏ trống'),
  email: z.string().min(1, 'Email vui lòng không bỏ trống').email("Không đúng định dạng email"),
  phoneNumber: z.string(),
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string()
})

export type CustomerInfoType = z.infer<typeof CustomerInfoSchema>


const CustomerInfoTemplates = () => {
  const { openChangePasswordForm, setOpenChangePasswordForm, user } = useAppContext()
  const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm<CustomerInfoType>({
    resolver: zodResolver(CustomerInfoSchema)
  })
  const mutation = useUpdateUserByIdMutation(false)

  useEffect(() => {
    if (user) {
      const newUser = {
        ...user,
        dateOfBirth: formatDate(user.dateOfBirth)
      }
      reset(newUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const onOpenChangePasswordForm = () => {
    setOpenChangePasswordForm(true)
  }

  const onUpdateInfo = (data: CustomerInfoType) => {
    if (!isDirty) return message.error('Chưa có thay đổi nào')
    if (!user) {
      return message.error('Bạn chưa đăng nhập')
    }
    mutation.mutate({ userId: user._id, data:data })
  }
  return (
    <>
      <div >
        <h1 className=" text-xl font-semibold mb-4 lg:text-2xl lg:font-bold ">TÀI KHOẢN CỦA TÔI</h1>

        <div className="bg-blue-100 text-blue-800 p-3 rounded mb-6 text-sm">
          "Vì chính sách an toàn, bạn không thể thay đổi SĐT, Ngày sinh, Họ tên. Vui lòng liên hệ CSKH 0345908973 để được hỗ trợ"
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <form onSubmit={handleSubmit(onUpdateInfo)} className="md:col-span-2 space-y-4">
            <div>
              <label className="block font-medium">Họ và Tên</label>
              <input type="text" {...register('name')} disabled className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
            </div>
            <div>
              <label className="block font-medium">Số điện thoại</label>
              <input type="text" {...register('phoneNumber')} disabled className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input type="email" {...register('email')} className="w-full border bg-white border-gray-300 rounded px-4 py-2" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1">Giới tính</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" value={'male'} {...register('gender')} />
                  Nam
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value={'female'}  {...register('gender')} />
                  Nữ
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium">Ngày sinh</label>
              <input type="date" {...register('dateOfBirth')} disabled className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn-primary px-6 py-2 rounded-full cursor-pointer">CẬP NHẬT</button>
              <button type="button" onClick={() => onOpenChangePasswordForm()} className="btn-secondary px-6 py-2 rounded-full cursor-pointer">ĐỔI MẬT KHẨU</button>
            </div>
          </form>

        </div>
      </div>
      {openChangePasswordForm && (
        <ChangePasswordForm />
      )}
    </>
  );
};

export default CustomerInfoTemplates;