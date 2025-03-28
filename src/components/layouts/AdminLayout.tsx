import { Outlet } from "react-router-dom"
import FooterAdminTemplates from "../dashboard/components/footer/templates"
import { Layout, message } from "antd"
import HeaderAdmin from "../dashboard/components/header/templates";
import SidebarAdmin from "../dashboard/components/sidebar/templates";


const { Content } = Layout;

const AdminLayout = () => {
  const [, contextHolder] = message.useMessage();
  return (

    <>
      <Layout className="min-w-7xl">
        <SidebarAdmin />
        <Layout className="pl-48 bg-gray-100">
          <HeaderAdmin />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 500,
            }}
            className="bg-gray-100"
          >
            <Outlet />
          </Content>
          <FooterAdminTemplates />
        </Layout>
      </Layout>
      {contextHolder}
    </>
  )
}

export default AdminLayout