import { Plus, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { FieldPostPayloadType, TypeFieldResponse } from "../../../../../../types/api.type"
import { FieldErrors, UseFormSetValue } from "react-hook-form"

type TypeFieldFormAddProps = {
    typeFields:TypeFieldResponse[],
    setValue:UseFormSetValue<FieldPostPayloadType>,
    value:string[],
    errors: FieldErrors<FieldPostPayloadType>
}

const TypeFieldFormAdd = ({typeFields,setValue,value,errors}:TypeFieldFormAddProps) => {
    const [typeFieldsSelect, setTypeFieldsSelect] = useState<TypeFieldResponse[]>([])

    useEffect(() => {
        const listTypeFieldSelected = typeFields.filter((item) => value.includes(item._id.toString()) )
        setTypeFieldsSelect(listTypeFieldSelected)
    },[value,typeFields])

    const handleTypeField = (item:TypeFieldResponse) => {
        if(typeFieldsSelect.length == 0) return setValue('typeFields',[item._id])
        if(typeFieldsSelect.some((field) => field._id ===item._id )){
            const newTypeFieldsSelect = typeFieldsSelect.filter((field) => field._id !== item._id).map((item) => item._id)
            return setValue('typeFields',newTypeFieldsSelect)
        }
        else{
            return  setValue('typeFields',[...value,item._id])
        }
    }

    const onRemoveTypeField = (id:string) => {
        const newTypeFieldsSelect = typeFieldsSelect.filter((field) => field._id !== id).map((item) => item._id)
        return setValue('typeFields',newTypeFieldsSelect)
    }
    return (
        <div className="flex">
            <label className="block w-32 shrink-0 ">Loại sân</label>
            <div className="w-full">
                <div className="relative group w-max mb-3" >
                    <button type="button" className={` btn-secondary px-4 py-2    cursor-pointer flex items-center gap-2  `}>Chọn loại sân <Plus /></button>
                    {errors && errors.typeFields && ( <p className="text-sm text-red-500 mt-1 mb-3">{ errors.typeFields.message}</p>)}
                    <div className=" absolute z-20 hidden top-full min-w-60 max-w-60 border border-gray-200 rounded shadow group-hover:block ">
                       {typeFields.map((item) => (
                         <button type="button" onClick={() => handleTypeField(item)} key={item._id} className={`w-full bg-white cursor-pointer transition-colors duration-300 py-2 px-3 hover:bg-gray-300`}>{item.name}</button>
                       ))}
                    
                    </div>

                </div>
                <div className="p-4 bg-gray-100">
                    <p className="text-black font-semibold text-sm mb-4">Loại sân bạn chọn: {typeFieldsSelect.length == 0 && 'Chưa có'}</p>
                    {typeFieldsSelect.length > 0 && (
                        <div className="flex flex-wrap gap-4 ">
                            {typeFieldsSelect.map((typeField) => (
                                <div key={typeField._id} className="flex items-center gap-2">
                                    <button className=" bg-white cursor-pointer transition-colors duration-300 w-32 rounded py-2 border hover:bg-gray-300">{typeField.name}</button>
                                    <Trash onClick={() => onRemoveTypeField(typeField._id)} size={18} className="text-gray-400 cursor-pointer hover:text-red-400" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* <p className="text-sm text-red-500 mt-1">Bạn không được để trống</p> */}
            </div>

        </div>
    )
}

export default TypeFieldFormAdd