
type InputTextAuthProps = {
 label:string,
 type:'text'|'password'|'email',
 placeholder:string
}

const InputTextAuth = ({label,placeholder,type='text'}:InputTextAuthProps) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-900">{label}</label>
        <input
            type={type}
            className="mt-1 w-full rounded-lg border border-white/30 bg-white/20 p-3 text-black placeholder-gray-300 outline-none transition focus:border-white focus:bg-white/30"
            placeholder={placeholder}
        />
    </div>
  )
}

export default InputTextAuth