import { useAppContext } from "../../../../libs/context"
import { useBranchDetail } from "../../../../libs/zustand/store"


const BackgroundOpacity = () => {
    const {setOpenFilterFields,setOpenMenuHeader,setOpenTodayField, setOpenListCouponCheckout,setOpenChangePasswordForm} = useAppContext()
    const {setOpenListDateField} = useBranchDetail()
    const onHandleClick = () => {
        setOpenFilterFields(false)
        setOpenMenuHeader(false)
        setOpenTodayField(false)
        setOpenListCouponCheckout(false)   
        setOpenListDateField(false) 
        setOpenChangePasswordForm(false)
    }
  return (
    <div onClick={() => onHandleClick()} className={`fixed z-[45] h-full w-full inset-0 bg-black/35 `}>
    </div>
  )
}

export default BackgroundOpacity