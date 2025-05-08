import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Modal, message, Pagination } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { UserType } from '../../../../../types/auth';
import { useGetAllUserQuery } from '../../../../../libs/hooks/user';

const { confirm } = Modal;



const ListUserAdminTemplates = () => {

    const { data, isLoading } = useGetAllUserQuery()
    const [users, setUsers] = useState<UserType[]>([]);
    const [pagination, setPagination] = useState<{ page: number, totalPages: number, total: number }>({
        page: 1,
        totalPages: 1,
        total: 0
    })
    useEffect(() => {
        if (data && data.success) {
            setUsers(data.data)
            setPagination(pagination)
        }
    }, [data])
    const handleDelete = (key: string) => {
        confirm({
            title: 'Bạn có chắc muốn xóa người dùng này?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                //   setUsers(prev => prev.filter(user => user.key !== key));
                message.success('Đã xóa người dùng');
            },
        });
    };

    const handleEdit = (key: string) => {
        message.info(`Bạn vừa bấm sửa người dùng có key: ${key}`);
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
        //   {
        //     title: 'Trạng thái',
        //     dataIndex: 'status',
        //     key: 'status',
        //     render: (status: UserType['status']) => (
        //       <Tag color={status === 'Hoạt động' ? 'green' : 'red'}>{status}</Tag>
        //     ),
        //   },
        {
            title: 'Hành động',
            key: 'action',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (_: any, record: UserType) => (
                <div className="flex gap-2">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record.key)}
                        className="bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Sửa
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.key)}
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