import { useAppContext } from "../../../../libs/context"

import FilterPriceItem from "../components/filter-price-item"
import FilterTimeItem from "../components/filter-time-item"


const FilterFieldsFootball = () => {
    const {openFilterFields,setOpenFilterFields} = useAppContext()
    
    return (
        <section className={`fixed top-0 inset-x-0 p-3 ${openFilterFields?'translate-y-0 opacity-100':'-translate-y-full opacity-0'} transition-all duration-300 bg-white z-50 w-full shrink-0 lg:transition-none lg:p-0 lg:inset-auto lg:opacity-100 lg:translate-y-0 lg:z-0 lg:static lg:w-64 `}>
            <h4 className="font-semibold text-xl mb-4 lg:hidden">Lọc sân bóng</h4>
            <div className=" space-y-2  md:sticky md:top-20">
                <FilterTimeItem />
                <FilterPriceItem />
                <div className="flex gap-6 items-center">
                    <button className="px-5 py-2 border rounded text-black transition-colors duration-300 border-black bg-white hover:text-white hover:bg-black">Bỏ lọc</button>
                    <button className="px-5 py-2 border rounded text-white transition-colors duration-300 border-black bg-black hover:text-black hover:bg-white">Lọc</button>
                    <button onClick={() => setOpenFilterFields(false) } className="px-5 cursor-pointer py-2 border rounded text-black transition-colors duration-300 border-black bg-white hover:text-white hover:bg-black lg:hidden">Đóng</button>
                </div>
            </div>

        </section>
    )
}

export default FilterFieldsFootball