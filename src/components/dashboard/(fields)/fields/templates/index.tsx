
import { Pagination } from "antd";

import FilterFieldsAdmin from "../components/filter";
import TableFieldsAdmin from "../components/table";
import { useGetAllFieldsQuery } from "../../../../../libs/hooks/field";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";



const FieldsAdminTemplates = () => {
  const [ searchParams,setSearchParams ] = useSearchParams()
  const [limit, ] = useState(2)
  const page = searchParams.get('page') || 1
  const {data} = useGetAllFieldsQuery({
    page: Number(page),
    limit: limit
  })
  const fields = data?.data?.map((item) => ({...item,key:item._id})) || []
 
  const onChangePage = (page: number) => {
    setSearchParams({page: String(page)})
  }
  return (
    <div className="space-y-6 p-6">
      {/* Section 1: Tìm kiếm và filter */}
        <FilterFieldsAdmin />

      {/* Section 2: Bảng danh sách sân bóng */}
     
        <TableFieldsAdmin fields={fields} />
      {/* Section 3: Pagination */}
      <div className="bg-white p-4 rounded shadow flex justify-center">
        <Pagination
          current={Number(data?.pagination?.page) || 1}
          total={data?.pagination.total || 0}
          pageSize={limit}
          onChange={(page) => onChangePage(page)}
        />
      </div>
    </div>
  );
};

export default FieldsAdminTemplates;
