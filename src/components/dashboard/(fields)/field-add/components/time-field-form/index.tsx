import { Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'

const TimeFieldFormAdd = () => {
    const [typeFieldsSelect, setTypeFieldsSelect] = useState([])
    const list_type_field = [
        {
            _id: 'dfdfdf',
            code: 5,
            name: "5 người"
        },
        {
            _id: 'dfdfdfhhhh',
            code: 7,
            name: "7 người"
        },
        {
            _id: 'dfdfdfbb',
            code: 11,
            name: "11 người"
        },
    ]

    const handleTypeField = (item) => {
        if (typeFieldsSelect.length == 0) return setTypeFieldsSelect([item])
        if (typeFieldsSelect.some((field) => field._id === item._id)) {
            const newTypeFieldsSelect = typeFieldsSelect.filter((field) => field._id !== item._id)
            return setTypeFieldsSelect(newTypeFieldsSelect)
        }
        else {
            return setTypeFieldsSelect([...typeFieldsSelect, item])
        }
    }
    return (
        <div className="flex">
            <label htmlFor="" className="block w-32 shrink-0 ">Khung giờ</label>
            <div className="w-full">
                <div className="relative group w-max mb-3" >
                    <button type="button" className=" btn-secondary px-4 py-2 border border-gray-400 cursor-pointer flex items-center gap-2">Chọn khung giờ <Plus /></button>
                    <div className=" absolute hidden top-full min-w-60 max-w-60 border border-gray-200 rounded shadow group-hover:block ">
                        {list_type_field.map((item) => (
                            <button type="button" onClick={() => handleTypeField(item)} key={item._id} className="w-full bg-white cursor-pointer transition-colors duration-300 py-2 px-3 hover:bg-gray-300">{item.name}</button>
                        ))}

                    </div>

                </div>
                <div className="p-4 bg-gray-100">
                    <div className='flex justify-between items-center mb-4'>
                        <p className="text-black font-semibold text-sm ">Các khung giờ bạn chọn: {typeFieldsSelect.length == 0 && 'Chưa có'}</p>
                        <button className='btn-secondary flex gap-2 items-center bg-white border rounded px-3 py-1 text-sm cursor-pointer'>Xóa tất cả <Trash size={14} /></button>
                    </div>
                    {typeFieldsSelect.length > 0 && (
                        <div className="flex flex-wrap gap-4 ">
                            {typeFieldsSelect.map((typeField) => (
                                <div key={typeField._id} className="flex items-center gap-2">
                                    <button className=" bg-white cursor-pointer transition-colors duration-300 w-32 rounded py-2 border hover:bg-gray-300">{typeField.name}</button>
                                    <Trash size={18} className="text-gray-400 cursor-pointer hover:text-red-400" />
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

export default TimeFieldFormAdd