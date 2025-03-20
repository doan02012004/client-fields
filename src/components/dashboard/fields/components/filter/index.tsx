import { useState } from 'react'
import { Input, Select } from "antd";
const { Option } = Select;
const FilterFieldsAdmin = () => {
    const [searchText, setSearchText] = useState("");
  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
    <Input
      placeholder="Tìm kiếm sân bóng..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full"
    />
    <div className="flex gap-4">
      <Select placeholder="Chọn cơ sở sân bóng" className="w-1/3">
        <Option value="cs1">Cơ sở 1</Option>
        <Option value="cs2">Cơ sở 2</Option>
        <Option value="cs3">Cơ sở 3</Option>
      </Select>
      <Select placeholder="Sắp xếp theo giá" className="w-1/3">
        <Option value="asc">Giá tăng dần</Option>
        <Option value="desc">Giá giảm dần</Option>
      </Select>
    </div>
  </div>
  )
}

export default FilterFieldsAdmin