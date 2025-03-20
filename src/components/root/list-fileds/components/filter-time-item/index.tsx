import React from 'react'

const FilterTimeItem = () => {
  return (
    <div className="border-b pb-3 border-gray-200">
    <h6 className="mb-3  text-lg">Khung giờ</h6>
    <div className=" space-y-2">
        <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="khunggio1" className="size-4" />
            <label htmlFor="khunggio1">8h-12h</label>
        </div>
        <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="khunggio2" className="size-4" />
            <label htmlFor="khunggio1">8h-12h</label>
        </div>
        <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="khunggio3" className="size-4" />
            <label htmlFor="khunggio1">8h-12h</label>
        </div>
        <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="khunggio4" className="size-4" />
            <label htmlFor="khunggio1">8h-12h</label>
        </div>
    </div>
</div>
  )
}

export default FilterTimeItem