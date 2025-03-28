import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd"
import { Plus } from "lucide-react";
import { useGetAllBranchQuery } from "../../../../libs/hooks/branch";
import { Link } from "react-router-dom";
import { BranchType } from "../../../../types/api.type";
import "react-quill/dist/quill.snow.css"; 


const ListBranchAdminTemplate = () => {
    const { data, isLoading } = useGetAllBranchQuery()
    const columns = [
        {
            title: "Ảnh sân",
            dataIndex: "images",
            key: "images",
            render: (images: string[]) => <img src={images[0]} alt="Sân bóng" className="w-32 h-28 object-cover rounded" />,
        },
        { title: "Tên cơ sở", dataIndex: "name", key: "name" },
        {
            title: "Địa chỉ",
            dataIndex: "address_text",
            key: "address_text",
            render: (address_text:string) => (
                <p className="max-w-40" >{address_text}</p>
            ),
        },
        {
            title: "Khung giờ hoạt động",
            dataIndex: "timeActive",
            key: "timeActive",
            render: (timeActive: { startTime: number, endTime: number, title: string }) => (
                <p >{timeActive.title}</p>
            ),
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status: boolean) => (
                <Tag color={status === true ? "green" : "red"}>{status == true ? 'Hoạt động' : 'Ngừng hoạt động'}</Tag>
            ),
        },
        {
            title: "Hành động",
            dataIndex: "_id",
            key: "action",
            render: (_id:string) => (
                <div className="flex gap-2">
                   <Link to={`/admin/branchs/edit/${_id}`} > <Button icon={<EditOutlined />} /></Link>
                    <Button icon={<DeleteOutlined />} disabled danger />
                </div>
            ),
        },
    ];
    const listBranch = data?.branchs?.map((item:BranchType) => ({...item,key:item._id})) || []
    return (
        <div >
            <h2 className="text-2xl font-bold mb-6">Danh sách cơ sở</h2>
            <div className="bg-white w-full p-4 flex justify-end mb-4">
                <Link to={'/admin/branchs/add'} className="block"><Button type="primary" htmlType="button" icon={<Plus />}>Thêm cơ sở</Button></Link>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <Table loading={isLoading} dataSource={listBranch} columns={columns} pagination={false} />
            </div>
        </div>
    )
}

export default ListBranchAdminTemplate