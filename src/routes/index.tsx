
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
import FieldsAdminPage from '../app/(dashboard)/fields'

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='auth' element={<AuthLayout />} >
                <Route index element={<Navigate to="login" replace />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<SignUpPage />} />
            </Route>
            <Route path='/' element={<RootLayout />} >
                <Route index element={<HomePage />} />
                <Route path='list-fields' element={<ListFieldsPage />} />
                <Route path='fields-details/:slug' element={<FieldsDetailsPage />} />
                <Route path='checkout' element={<CheckoutPage />} />
            </Route>
            <Route path='admin' element={<AdminLayout />} >
                <Route index element={<DashboardPage />} />
                <Route path='fields' element={<FieldsAdminPage />} />
                <Route path='users' element={<SignUpPage />} />
            </Route>
        </Routes>
    )
}

export default RoutesApp