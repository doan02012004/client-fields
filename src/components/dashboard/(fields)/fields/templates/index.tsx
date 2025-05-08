import { useState } from "react";
import { Pagination } from "antd";

import FilterFieldsAdmin from "../components/filter";
import TableFieldsAdmin from "../components/table";
import { useGetAllFieldsQuery } from "../../../../../libs/hooks/field";



const FieldsAdminTemplates = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const {data} = useGetAllFieldsQuery()

  const fields = data?.data?.map((item) => ({...item,key:item._id})) || []
 

  return (
    <div className="space-y-6 p-6">
      {/* Section 1: Tìm kiếm và filter */}
        <FilterFieldsAdmin />

      {/* Section 2: Bảng danh sách sân bóng */}
     
        <TableFieldsAdmin fields={fields} />
      {/* Section 3: Pagination */}
      <div className="bg-white p-4 rounded shadow flex justify-center">
        <Pagination
          current={currentPage}
          total={10}
          pageSize={5}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default FieldsAdminTemplates;
