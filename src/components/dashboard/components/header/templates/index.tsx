
import { Dropdown, Avatar, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HomeIcon, LogOutIcon, User } from "lucide-react";
import NavLinkHeaderAdmin from "../components/nav-link";

const HeaderAdmin = () => {
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link to="https://www.antgroup.com">
              Thông tin admin
            </Link>
          ),
          icon:<User />
        },
        {
            key: '2',
            label: (
              <Link to="/">
                Quay lại trang chủ
              </Link>
            ),
            icon:<HomeIcon  />
          },
        {
          key: '3',
          danger: true,
          label: 'Đăng xuất',
          icon:<LogOutIcon />
        },
      ];

    return (
        <header className="bg-[#001529] p-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <div className="text-lg font-bold">Dashboard</div>

                    {/* Navigation Links */}
                   <NavLinkHeaderAdmin />
                </div>

                {/* User Info */}
                <Dropdown menu={{items}} placement="bottomRight">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Avatar size={32} icon={<UserOutlined />} />
                        <span>Admin</span>
                    </div>
                </Dropdown>
            </div>
        </header>
    );
};

export default HeaderAdmin;
