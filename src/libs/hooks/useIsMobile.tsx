import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Hàm kiểm tra kích thước
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Gọi lần đầu khi component mount
    handleResize();

    // Lắng nghe sự kiện resize
    window.addEventListener('resize', handleResize);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;