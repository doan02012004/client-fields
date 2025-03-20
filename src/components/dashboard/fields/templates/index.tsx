import { useState } from "react";
import { Pagination } from "antd";

import FilterFieldsAdmin from "../components/filter";
import TableFieldsAdmin from "../components/table";



const FieldsAdminTemplates = () => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const data = Array.from({ length: 20 }, (_, i) => ({
    key: i,
    name: `Sân bóng ${i + 1}`,
    address: `Địa chỉ ${i + 1}`,
    price: `${(i + 1) * 100000} VND`,
  }));

 

  return (
    <div className="space-y-6 p-6">
      {/* Section 1: Tìm kiếm và filter */}
        <FilterFieldsAdmin />

      {/* Section 2: Bảng danh sách sân bóng */}
     
        <TableFieldsAdmin />
      {/* Section 3: Pagination */}
      <div className="bg-white p-4 rounded shadow flex justify-center">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={5}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default FieldsAdminTemplates;
