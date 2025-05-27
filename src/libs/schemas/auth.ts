import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ message: "Bắt buộc điền" }).email({ message: "Email không hợp lệ" }).min(1),
  password: z.string().min(6, { message: "Ít nhất 6 ký tự" }).max(50, { message: "Nhiều nhất 50 ký tự" })
})

export type TypeLoginSchema = z.infer<typeof loginSchema>

export const registerSchema = loginSchema.extend({
  name: z.string().min(1, { message: "Bắt buộc điền" }).max(50, { message: "Nhiều nhất 50 ký tự" }),
  email: z.string().email('Email không hợp lệ'),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ'),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Vui lòng chọn giới tính' })
  }),
  dateOfBirth: z.string().min(1, 'Vui lòng chọn ngày sinh'),
  confirmPassword: z.string().min(6).max(50),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
})

export type TypeRegisterSchema = z.infer<typeof registerSchema>

export const updateUserSchema = z.object({
  name: z.string().min(1, { message: "Bắt buộc điền" }).max(50, { message: "Nhiều nhất 50 ký tự" }),
  email: z.string().email('Email không hợp lệ'),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ'),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Vui lòng chọn giới tính' })
  }),
  dateOfBirth: z.string().min(1, 'Vui lòng chọn ngày sinh'),
  status: z.enum(['active', 'inactive'], {
    errorMap: () => ({ message: 'Vui lòng chọn trạng thái hoạt động '})
  }),
})

export type TypeUpdateUser = z.infer<typeof updateUserSchema>


export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Vui lòng nhập mật khẩu hiện tại'),
    newPassword: z
      .string()
      .min(6, 'Mật khẩu mới phải có ít nhất 6 ký tự'),
    confirmNewPassword: z.string().min(1, 'Vui lòng xác nhận mật khẩu mới'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'Mật khẩu xác nhận không khớp',
  });

export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;