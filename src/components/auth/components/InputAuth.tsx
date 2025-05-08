import { FieldError, UseFormRegister } from "react-hook-form"
import { TypeLoginSchema, TypeRegisterSchema } from "../../../libs/schemas/auth"

type InputTextAuthProps = {
  label: string,
  type: 'text' | 'password' | 'email',
  placeholder: string,
  register: UseFormRegister<TypeLoginSchema | TypeRegisterSchema>,
  error?: FieldError,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field:any
}

const InputTextAuth = ({ label, placeholder, type = 'text', error, register,field }: InputTextAuthProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <input
        type={type}
        {...register(field)}
        className="mt-1 w-full rounded-lg border border-gray-200 bg-white/20 p-3 text-black/90  outline-none transition  focus:bg-white/30"
        placeholder={placeholder}
      />
      {error &&  (
        <p className="mt-2 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default InputTextAuth