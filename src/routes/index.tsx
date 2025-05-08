
import { Navigate, Route, Routes } from 'react-router-dom'
import RootLayout from '../components/layouts/RootLayout'
import HomePage from '../app/(root)/home/HomePage'
import AuthLayout from '../components/layouts/AuthLayout'
import LoginPage from '../app/(auth)/login/LoginPage'
import SignUpPage from '../app/(auth)/signup/SignUpPage'
import ListFieldsPage from '../app/(root)/list-fields'
import FieldsDetailsPage from '../app/(root)/fields-details'
import CheckoutPage from '../app/(root)/checkout'
import AdminLayout from '../components/layouts/AdminLayout'
import DashboardPage from '../app/(dashboard)/index'
import FieldsAdminPage from '../app/(dashboard)/(fields)/fields'
import AddFieldAdminPage from '../app/(dashboard)/(fields)/filed-add'
import EditFieldsAdminPage from '../app/(dashboard)/(fields)/field-edit'
import AddBranchAdminPage from '../app/(dashboard)/(fields)/branch-add'
import ListBranchAdminPage from '../app/(dashboard)/(fields)/branchs'
import EditBranchAdminPage from '../app/(dashboard)/(fields)/branch-edit'
import ThankOrderFieldPage from '../app/(root)/thanks'
import ListOrderFieldAdminPage from '../app/(dashboard)/(orders)/(fields)/list'
import EditOrderFieldAdminPage from '../app/(dashboard)/(orders)/(fields)/edit'
import CustomerLayout from '../components/layouts/CustomerLayout'
import CustomerOrderListPage from '../app/(root)/customer/order_list'
import CustomerInfoPage from '../app/(root)/customer/info'
import CustomerOrderDetailPage from '../app/(root)/customer/order_detail'
import ListUserAdminPage from '../app/(dashboard)/(users)/list'
import AddUserAdminPage from '../app/(dashboard)/(users)/add'

const RoutesApp = () => {
    return (
        <Routes>
            {/* Auth  */}
            <Route path='auth' element={<AuthLayout />} >
                <Route index element={<Navigate to="login" replace />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<SignUpPage />} />
            </Route>

            {/* Webiste  */}
            <Route path='/' element={<RootLayout />} >
                <Route index element={<HomePage />} />
                <Route path='list-fields' element={<ListFieldsPage />} />
                <Route path='field-detail/:slug' element={<FieldsDetailsPage />} />
                <Route path='checkout' element={<CheckoutPage />} />
                <Route path='thanks' element={<ThankOrderFieldPage />} />

                {/* customer  */}
                <Route path='customer' element={<CustomerLayout />} >
                    <Route index element={<Navigate to="info" />} />
                    <Route path='info' element={<CustomerInfoPage />} />
                    <Route path='order_list' element={<CustomerOrderListPage />} />
                    <Route path='order_detail/:orderCode' element={<CustomerOrderDetailPage />} />
                </Route>
            </Route>

            {/* Admin  */}
            <Route path='admin' element={<AdminLayout />} >
                <Route index element={<DashboardPage />} />
                <Route path='fields' element={<FieldsAdminPage />} />
                <Route path='fields/add' element={<AddFieldAdminPage />} />
                <Route path='fields/edit/:id' element={<EditFieldsAdminPage />} />
                <Route path='branchs' element={<ListBranchAdminPage />} />
                <Route path='branchs/add' element={<AddBranchAdminPage />} />
                <Route path='branchs/edit/:id' element={<EditBranchAdminPage />} />
                <Route path='order-fields' element={<ListOrderFieldAdminPage />} />
                <Route path='order-fields/detail/:id' element={<EditOrderFieldAdminPage />} />

                {/* user  */}
                <Route path='users' element={<ListUserAdminPage />} />
                <Route path='users/add' element={<AddUserAdminPage />} />
            </Route>
        </Routes>
    )
}

export default RoutesApp