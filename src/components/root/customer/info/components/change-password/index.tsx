import React from "react";
import { useForm } from "react-hook-form";
import BackgroundOpacity from "../../../../components/backgroud-opacity";
import { useAppContext } from "../../../../../../libs/context";

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const ChangePasswordForm = () => {
    const {setOpenChangePasswordForm} = useAppContext()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onCloseChangePasswordForm = () => {
    setOpenChangePasswordForm(false)
  }
  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu gửi đi:", data);
    // Gọi API đổi mật khẩu ở đây
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

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-full mt-4 hover:bg-gray-800 transition"
        >
          CẬP NHẬT
        </button>
      </form>
    </div>
    <BackgroundOpacity />
   </>
  );
};

export default ChangePasswordForm;