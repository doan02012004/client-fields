import { UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { ChartBarIcon, FileSlidersIcon, ListOrderedIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const SidebarAdmin = () => {
    const itemsMenuSidebar = [
        {
            key: '3',
            icon: <ChartBarIcon />,
            label: <Link to={'/admin'}>Thống kê</Link>,
        },
        {
            key: '1',
            icon: <FileSlidersIcon />,
            label: 'Q.lý sân bóng',
            children: [
                {
                    key: '1.1',
                    label: <Link to={'/admin/branchs'}>Danh sách cơ sở</Link>,
                },
                {
                    key: '1.2',
                    label: <Link to={'/admin/fields'}>Danh sách sân bóng</Link>,
                },
                {
                    key: '1.3',
                    label: <Link to={'/admin/branchs/add'}>Thêm cơ sở</Link>,
                },
                {
                    key: '1.4',
                    label: <Link to={'/admin/fields/add'}>Thêm sân bóng</Link>,
                },
                {
                    key: '1.5',
                    label: <Link to={'/admin/fields'}>Thêm loại hình sân</Link>,
                },
            ]
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: 'Q.lý người dùng',
            children: [
                {
                    key: '2.1',
                    label: <Link to={'/admin/users'}>Danh sách người dùng</Link>,
                },
                {
                    key: '2.2',
                    label: <Link to={'/admin/users/add'}>Thêm người dùng</Link>,
                }
            ]
        },
        {
            key: '4',
            icon: <ListOrderedIcon />,
            label: <Link to={'/admin/order-fields'}>Q.lý đơn đặt sân</Link>
        },
    ]
    return (
        <Sider trigger={null} collapsed={false} className="fixed z-50 inset-y-0 left-0">
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['3']}
                items={itemsMenuSidebar}
            />
            <div className="absolute bottom-3  w-full  text-center py-2">
                <Link to={'/'} className="flex items-center justify-center gap-2 text-white">
                    <UserOutlined />
                    <span className="text-sm">Quay lại website</span>
                </Link>
            </div>
        </Sider>
    )
}

export default SidebarAdmin