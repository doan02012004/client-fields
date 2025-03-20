import { useState } from "react";

const TabsFieldDetails = () => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="w-full">
            <div className="border-b border-gray-200">
                <div className="flex items-center gap-6 w-max">
                    <button
                        className={`p-2 cursor-pointer text-lg text-center ${activeTab === "description" ? "border-b-2 border-gray-800 font-bold" : "text-gray-600"}`}
                        onClick={() => setActiveTab("description")}
                    >
                        Mô tả
                    </button>
                    <button
                        className={`p-2 cursor-pointer text-lg text-center ${activeTab === "comments" ? "border-b-2 border-gray-800 font-bold" : "text-gray-600"}`}
                        onClick={() => setActiveTab("comments")}
                    >
                        Bình luận
                    </button>
                </div>
            </div>

            <div className="p-4">
                {activeTab === "description" ? (
                    <p className="text-gray-700">Đây là phần mô tả về sân bóng. Bạn có thể thêm thông tin chi tiết tại đây.</p>
                ) : (
                    <div>
                        <p className="text-gray-700">Bình luận về sân bóng này:</p>
                        <ul className="mt-2 space-y-2">
                            <li className="p-2 border rounded-md">Người dùng A: Sân rất đẹp!</li>
                            <li className="p-2 border rounded-md">Người dùng B: Giá hợp lý, chất lượng tốt.</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabsFieldDetails;
