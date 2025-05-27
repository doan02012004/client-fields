import { X } from "lucide-react"
import BackgroundOpacity from "../../../components/backgroud-opacity"
import { useAppContext } from "../../../../../libs/context"


const DiagramFieldDetail = ({imageDiagram}:{imageDiagram:string}) => {

    const {setOpenDiagramField} = useAppContext()
  return (
    <>
        <div className="fixed z-50 top-1/2 left-1/2 -translate-1/2 bg-white rounded p-4 w-72 h-auto lg:h-[500px] lg:p-6 lg:w-full lg:max-w-xl">
        <div className="flex justify-between items-center mb-3">
            <h5 className="font-semibold lg:text-lg">Sơ đồ sân bóng</h5>
            <X onClick={() =>setOpenDiagramField(false)} size={24} className=" text-gray-400 cursor-pointer hover:text-gray-800" />
        </div>
            <div>
                <img src={imageDiagram} alt="Sơ đồ sân bóng" className=" size-full object-cover" />
            </div>
        </div>
        <BackgroundOpacity />
    </>
  )
}

export default DiagramFieldDetail