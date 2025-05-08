import { useBranchDetail } from "../../../../../libs/zustand/store"
import { SelectFieldType } from "../../../../../types/api.type"


const TypeFieldDetails = ({ listField }: { listField: SelectFieldType[] }) => {
    const { setSelectedField,setImage } = useBranchDetail()
    const onSelectField = (fieldId:SelectFieldType) => {
        setSelectedField(fieldId)
        setImage(fieldId.images[0])
    }
    return (
        <div className="mb-6 flex flex-col gap-4 ">
            <label className="block font-medium mb-1 w-full lg:w-28 shrink-0">Chọn sân</label>
            <div className="pl-3 lg:pl-0">
                <div className='flex flex-wrap gap-4 mb-3'>
                    {listField.map((item) => (
                        <button onClick={() => onSelectField(item)} key={item._id} className={`${item.selected ? 'border-green-600': 'border-gray-200'} px-8 py-4 border rounded-lg cursor-pointer flex gap-2 items-center drop-shadow-primary-xs bg-white`}>
                           <img src={item.images[0]} alt="thumbnail" className="size-10 rounded" />
                           {item.name}
                        </button>
                    ))}
                    {/* <button className='px-5 py-2 border border-gray-300 cursor-pointer'>
                       Sân 1
                    </button>
                    <button className='px-5 py-2 border border-gray-300 cursor-pointer'>
                       Sân 2
                    </button> */}

                </div>
                <p className=' underline text-gray-500 cursor-pointer hover:text-black'>Sơ đồ sân bóng</p>
            </div>
        </div>
    )
}

export default TypeFieldDetails