import React from 'react'

const FooterAdminTemplates = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
    <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:underline">Chính sách bảo mật</a>
            <a href="#" className="hover:underline">Điều khoản sử dụng</a>
            <a href="#" className="hover:underline">Liên hệ</a>
        </div>
    </div>
</footer>
  )
}

export default FooterAdminTemplates