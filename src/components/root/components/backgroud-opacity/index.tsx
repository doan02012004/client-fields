import { useAppContext } from "../../../../libs/context"


const BackgroundOpacity = () => {
    const {setOpenFilterFields,setOpenMenuHeader,setOpenTodayField} = useAppContext()
    const onHandleClick = () => {
        setOpenFilterFields(false)
        setOpenMenuHeader(false)
        setOpenTodayField(false)
    }
  return (
    <div onClick={() => onHandleClick()} className={`fixed z-[45] h-full w-full inset-0 bg-black/35 `}>
    </div>
  )
}

export default BackgroundOpacity