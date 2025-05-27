import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Table, Tag } from 'antd'
import { BranchType, FieldResponeType } from '../../../../../../types/api.type';
import { Link } from 'react-router-dom';
import { useRemoveFieldMutation } from '../../../../../../libs/hooks/field';


type TableFieldsAdminProps = {
  fields: FieldResponeType[]
}

const TableFieldsAdmin = ({ fields }: TableFieldsAdminProps) => {

  const mutation = useRemoveFieldMutation()
  const onRemoveField = (fieldId: string) => {
   mutation.mutate(fieldId)
  }

  const columns = [
    {
      title: "Ảnh sân",
      dataIndex: "images",
      key: "images",
      render: (images: string[]) => <img src={images[0]} alt="Sân bóng" className="w-20 h-16 object-cover rounded" />,
    },
    { title: "Tên sân", dataIndex: "name", key: "name" },
    {
      title: "Địa chỉ",
      dataIndex: "branch",
      key: "branch",
      render: (branch:BranchType) => (
       <p className='max-w-40'>{branch.address_text}</p>
      ),
    },
    {
      title: "Cơ sở",
      dataIndex: "branch",
      key: "branch",
      render: (branch:BranchType) => (
       <p className='max-w-40'>{branch.name}</p>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status:boolean) => (
        <Tag color={status === true ? "green" : "red"}>{status==true?'Hoạt động':'Tạm ngừng'}</Tag>
      ),
    },
    {
      title: "Hành động",
      dataIndex: "_id",
      key: "action",
      render: (_id:string) => (
        <div className="flex gap-2">
          <Link className='block' to={`/admin/fields/edit/${_id}`}><Button icon={<EditOutlined />} /></Link>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa sân này?"
            onConfirm={() => onRemoveField(_id)}
            okText="Có"
            cancelText="Không">
              <Button icon={<DeleteOutlined />} danger />
            </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-white p-4 rounded shadow">
      <Table dataSource={fields} columns={columns} pagination={false} />
    </div>
  )
}

export default TableFieldsAdmin