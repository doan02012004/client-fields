
import FormSignUp from "../../../components/auth/templates/FormSignUp"


const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center ">
    <div className="w-full ">
        <h2 className="mb-6 text-center text-2xl font-bold text-black">
            Đăng ký
        </h2>
        <FormSignUp />
       
    </div>
</div>
  )
}

export default SignUpPage