import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Cột 3: Mạng xã hội */}
         <div>
          <h2 className="text-xl font-semibold text-white">PlayPitch</h2>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="hover:text-white">📘 Facebook</a>
            <a href="#" className="hover:text-white">📸 Instagram</a>
            <a href="#" className="hover:text-white">🐦 Twitter</a>
          </div>
        </div>
       

        {/* Cột 2: Link nhanh */}
        <div>
          <h2 className="text-xl font-semibold text-white">Liên Kết</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-white">Trang chủ</a></li>
            <li><a href="/abouts" className="hover:text-white">Về chúng tôi</a></li>
            <li><a href="/contact" className="hover:text-white">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 1: Thông tin liên hệ */}
        <div>
          <h2 className="text-xl font-semibold text-white">Liên Hệ</h2>
          <p className="mt-2">📍 Địa chỉ: 123 Đường ABC, TP.HCM</p>
          <p>📞 Điện thoại: 0123-456-789</p>
          <p>📧 Email: contact@example.com</p>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Bản quyền thuộc về <span className="text-white">Công Ty XYZ</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer