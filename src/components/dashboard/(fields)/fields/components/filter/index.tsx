import { useState } from "react";
import { Button, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

const FilterFieldsAdmin = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-white p-4 rounded shadow flex items-center gap-4">
      
      {/* Chọn cơ sở sân bóng */}
      <Select placeholder="Chọn cơ sở" className="w-1/4">
        <Option value="cs1">Cơ sở 1</Option>
        <Option value="cs2">Cơ sở 2</Option>
        <Option value="cs3">Cơ sở 3</Option>
      </Select>

      {/* Sắp xếp theo giá */}
      <Select placeholder="Sắp xếp theo giá" className="w-1/4">
        <Option value="asc">Giá tăng dần</Option>
        <Option value="desc">Giá giảm dần</Option>
      </Select>

      {/* Ô tìm kiếm */}
      <div className="flex items-center border rounded px-3 py-2 w-1/3">
       
        <Input
          placeholder="Tìm kiếm sân bóng..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-none focus:ring-0 focus:outline-none w-full"
        />
         <SearchOutlined className="text-gray-500" />
      </div>
      <Link to={'/admin/fields/add'}>
            <Button type="primary">Thêm sân bóng</Button>
      </Link>
    </div>
  );
};

export default FilterFieldsAdmin;
