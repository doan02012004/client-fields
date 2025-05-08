import { Search } from 'lucide-react'


const HeaderSearch = () => {
    return (
        <div className="w-full relative h-10 py-2 pr-20  border border-gray-200 rounded-full hidden lg:block ">
            <input type="text" placeholder='Tìm kiếm...' className="w-full h-full px-4 outline-0 bg-transparent" />
            <button className='absolute cursor-pointer inset-y-0 right-0 h-full px-4 rounded-full bg-green-600 text-white lg:px-8 hover:bg-green-800'><Search size={20} /></button>
        </div>
    )
}

export default HeaderSearch