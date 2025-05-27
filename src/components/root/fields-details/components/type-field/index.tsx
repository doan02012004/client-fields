import { useAppContext } from "../../../../../libs/context"
import { useBranchDetail } from "../../../../../libs/zustand/store"
import { SelectFieldType } from "../../../../../types/api.type"
import DiagramFieldDetail from "../diagram-field"


const TypeFieldDetails = ({ listField }: { listField: SelectFieldType[] }) => {
    const { setSelectedField, setImage,branchDetail } = useBranchDetail()
    const { setOpenDiagramField, openDiagramField } = useAppContext()
    const onSelectField = (fieldId: SelectFieldType) => {
        setSelectedField(fieldId)
        setImage(fieldId.images[0])
    }

    const onOpenDiagramImageField = () => {
        setOpenDiagramField(true)
    }

    return (
       <>
        <div className="mb-6 flex flex-col gap-4 ">
            <label className="block font-medium mb-1 w-full lg:w-28 shrink-0">Chọn sân</label>
            <div className="pl-3 lg:pl-0">
                <div className='flex flex-wrap gap-4 mb-3'>
                    {listField.map((item) => (
                        <button onClick={() => onSelectField(item)} key={item._id} className={`${item.selected ? 'border-green-600' : 'border-gray-200'} px-8 py-4 border rounded-lg cursor-pointer flex gap-2 items-center drop-shadow-primary-xs bg-white`}>
                            <img src={item.images[0]} alt="thumbnail" className="size-10 rounded" />
                            {item.name}
                        </button>
                    ))}

                </div>
                <p onClick={() => onOpenDiagramImageField()} className=' underline text-gray-500 cursor-pointer hover:text-black'>Sơ đồ sân bóng</p>
            </div>
        </div>
        {openDiagramField && (
            <DiagramFieldDetail imageDiagram={branchDetail?.item.diagramImage ?? ''} />
        )}
       </>
    )
}

export default TypeFieldDetails