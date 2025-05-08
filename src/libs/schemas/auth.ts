import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({message:"Bắt buộc điền"}).email({message:"Email không hợp lệ"}).min(1),
    password: z.string().min(6,{message:"Ít nhất 6 ký tự"}).max(50,{message:"Nhiều nhất 50 ký tự"})
})

export type TypeLoginSchema = z.infer<typeof loginSchema>

export const registerSchema = loginSchema.extend({
    name: z.string().min(1, {message:"Bắt buộc điền"}).max(50, {message:"Nhiều nhất 50 ký tự"}),
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