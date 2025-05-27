import { useEffect, useState } from 'react';
import { Table, Tag, Button, Modal, Pagination } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { UserType } from '../../../../../types/auth';
import { useGetAllUserQuery, useRemoveUserByIdMutation } from '../../../../../libs/hooks/user';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;



const ListUserAdminTemplates = () => {
    const { data, isLoading } = useGetAllUserQuery()
    const mutation = useRemoveUserByIdMutation()
    const [users, setUsers] = useState<UserType[]>([]);
    const [pagination, setPagination] = useState<{ page: number, totalPages: number, total: number }>({
        page: 1,
        totalPages: 1,
        total: 0
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (data && data.success) {
            setUsers(data.data)
            setPagination(pagination)
        }
    }, [data])

    const handleDelete = (userId: string) => {
        confirm({
            title: 'Bạn có chắc muốn xóa người dùng này?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                mutation.mutate(userId)
            },
        });
    };

    const handleEdit = (id: string) => {
        navigate(`/admin/users/edit/${id}`)
    };

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
            render: (gender: UserType['gender']) => (
                <Tag >{gender == 'male' ? 'Nam' : 'Nữ'}</Tag>
            ),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Phân quyền',
            dataIndex: 'role',
            key: 'role',
        },
          {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: UserType['status']) => (
              <Tag color={status === 'active' ? 'green' : 'red'}>{status=='active'?"Hoạt động":"Ngừng hoạt động"}</Tag>
            ),
          },
        {
            title: 'Hành động',
            key: 'action',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (_: any, record: UserType) => (
                <div className="flex gap-2">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record._id)}
                        className="bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Sửa
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record._id)}
                        danger
                    >
                        Xóa
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Danh sách người dùng</h2>
            <Table loading={isLoading} columns={columns} dataSource={users} rowKey={'_id'} pagination={false} />
            <div className='mt-5 mx-auto w-max'>
                <Pagination
                    total={pagination.total}
                    current={pagination.page}
                    pageSize={pagination.totalPages}
                />
            </div>
        </div>
    );
}

export default ListUserAdminTemplates