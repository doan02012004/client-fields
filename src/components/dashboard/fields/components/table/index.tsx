import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd'
import React from 'react'

const TableFieldsAdmin = () => {
    const data = Array.from({ length: 20 }, (_, i) => ({
        key: i,
        name: `Sân bóng ${i + 1}`,
        address: `Địa chỉ ${i + 1}`,
        price: `${(i + 1) * 100000} VND`,
      }));
    
      const columns = [
        { title: "Tên sân", dataIndex: "name", key: "name" },
        { title: "Địa chỉ", dataIndex: "address", key: "address" },
        { title: "Giá tiền", dataIndex: "price", key: "price" },
        {
          title: "Hành động",
          key: "action",
          render: (_, record) => (
            <div className="flex gap-2">
              <Button icon={<EditOutlined />} />
              <Button icon={<DeleteOutlined />} danger />
            </div>
          ),
        },
      ];
  return (
    <div className="bg-white p-4 rounded shadow">
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
  )
}

export default TableFieldsAdmin