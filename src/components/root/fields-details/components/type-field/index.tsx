

const TypeFieldDetails = () => {
    return (
        <div className="mt-6 flex flex-col gap-4 lg:flex-row ">
            <label className="block font-medium mb-1 w-full lg:w-32 shrink-0">Chọn sân</label>
            <div className="pl-3 lg:pl-0">
                <div className='flex flex-wrap gap-4 mb-3'>
                    <button className='px-5 py-2 border border-gray-300 cursor-pointer'>
                       Sân 1
                    </button>
                    <button className='px-5 py-2 border border-gray-300 cursor-pointer'>
                       Sân 2
                    </button>

                </div>
                <p className=' underline text-gray-500 cursor-pointer hover:text-black'>Sơ đồ sân bóng</p>
            </div>
        </div>
    )
}

export default TypeFieldDetails