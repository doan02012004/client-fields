
import { useForm } from "react-hook-form";
import BackgroundOpacity from "../../../../components/backgroud-opacity";
import { useAppContext } from "../../../../../../libs/context";
import { changePasswordSchema, ChangePasswordSchemaType } from "../../../../../../libs/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";
import { changePasswordFn } from "../../../../../../libs/data/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const ChangePasswordForm = () => {
    const {setOpenChangePasswordForm,user} = useAppContext()
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordSchemaType>({
    resolver:zodResolver(changePasswordSchema)
  });

  const onCloseChangePasswordForm = () => {
    setOpenChangePasswordForm(false)
  }
  const onSubmit = async(data: ChangePasswordSchemaType) => {
    
    if(!user){
      setOpenChangePasswordForm(false)
     return navigate('/auth/login')
    }
    setLoading(true)
    try {
      const result = await changePasswordFn(user._id,data)
      if(result && result.success){
        message.success(result.message)
        setOpenChangePasswordForm(false)
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      if(error.status == 401){
       setLoading(false)
       setOpenChangePasswordForm(false)
        return navigate('/auth/login')
      }
      message.error(error.response.data.message ?? 'Thay đổi mật khẩu thất bại')
      console.log(error)
    }finally{
     setLoading(false)
    }
  };

  const newPassword = watch("newPassword");

  return (
   <>
    <div className="fixed z-50 top-1/2 left-1/2 -translate-1/2 max-w-lg w-11/12  bg-white p-6 rounded shadow md:w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-center w-full">ĐỔI MẬT KHẨU</h2>
        <button onClick={() => onCloseChangePasswordForm()} className="text-gray-500 text-2xl cursor-pointer absolute right-6 top-4 hover:text-black">&times;</button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1">Mật khẩu hiện tại</label>
          <input
            type="password"
            {...register("currentPassword", { required: "Vui lòng nhập mật khẩu hiện tại" })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Mật khẩu mới</label>
          <input
            type="password"
            {...register("newPassword", {
              required: "Vui lòng nhập mật khẩu mới",
              minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
            })}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Nhập lại Mật khẩu mới</label>
          <input
            type="password"
            {...register("confirmNewPassword", {
              required: "Vui lòng nhập lại mật khẩu",
              validate: (value) =>
                value === newPassword || "Mật khẩu nhập lại không khớp",
            })}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          {errors.confirmNewPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmNewPassword.message}</p>
          )}
        </div>

        <Button
          htmlType="submit"
          loading={loading}
          className="w-full bg-black text-white py-5 rounded-full hover:bg-gray-800 transition"
        >
          CẬP NHẬT
        </Button>
      </form>
    </div>
    <BackgroundOpacity />
   </>
  );
};

export default ChangePasswordForm;