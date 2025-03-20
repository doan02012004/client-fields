import { ChevronDown, ChevronLeft, ChevronRight, FilterIcon } from "lucide-react"
import FieldsItem from "../../components/fields/templates"
import { useAppContext } from "../../../../libs/context"


const ListFieldsContent = () => {
    const {setOpenFilterFields} = useAppContext()
    return (
        <div className="w-full">
            {/* header  */}
            <div className="flex justify-between items-center mb-6">
                <h6 className="text-2xl font-semibold">Sân bóng</h6>
                <div className="flex gap-4 items-center">
                    <div className=" relative group">
                        <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 cursor-pointer">
                            <span className="text-base">Sắp xếp theo</span>
                            <ChevronDown />
                        </div>
                        <ul className="hidden absolute top-full rounded shadow bg-white group-hover:block">
                            <li className=" cursor-pointer px-3 py-2 transition-colors duration-300 hover:bg-gray-200">Được yêu thích nhất</li>
                            <li className=" cursor-pointer px-3 py-2 transition-colors duration-300 hover:bg-gray-200">Giá từ thấp đến cao</li>
                            <li className=" cursor-pointer px-3 py-2 transition-colors duration-300 hover:bg-gray-200">Giá từ cao đến thấp</li>
                        </ul>
                    </div>

                    {/* mobile  */}
                    <button onClick={() => setOpenFilterFields(true)} className="px-3 py-2 border rounded border-gray-200 cursor-pointer  transition-colors duration-300 hover:text-white hover:bg-black lg:hidden">
                        <FilterIcon />
                    </button>
                </div>
            </div>
            {/* content  */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                <FieldsItem />
                <FieldsItem />
                <FieldsItem />
                <FieldsItem />
                <FieldsItem />
                <FieldsItem />
                <FieldsItem />
                <FieldsItem />
            </div>

            {/* pagination  */}
            <div className="flex items-center gap-2 w-max mx-auto mt-8">
                <button className="  bg-white text-black border border-gray-400 px-2 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black">Trang đầu</button>
                <button className="  bg-white text-black border border-gray-400 px-2 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black"><ChevronLeft /></button>
                <button className="  bg-white text-black border border-gray-400 px-3 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black">1</button>
                <button className="  bg-white text-black border border-gray-400 px-3 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black">1</button>
                <button className="  bg-white text-black border border-gray-400 px-3 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black">1</button>
                <button className="  bg-white text-black border border-gray-400 px-2 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black"><ChevronRight /></button>
                <button className="  bg-white text-black border border-gray-400 px-2 py-1  transition-colors duration-300 rounded hover:text-white hover:bg-black">Trang cuối</button>
            </div>
        </div>
    )
}

export default ListFieldsContent