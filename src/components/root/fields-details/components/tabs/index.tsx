import { useState } from "react";
import { useGetCommentsByBranchIdQuery, useToggleLikeCommentsByCommentIdMuation } from "../../../../../libs/hooks/comment-field";
import CommentFieldItem from "../comment";
import { useBranchDetail } from "../../../../../libs/zustand/store";

const TabsFieldDetails = () => {
    const [activeTab, setActiveTab] = useState("description");
    const {branchDetail} = useBranchDetail()
    const { data: commentsResult } = useGetCommentsByBranchIdQuery(branchDetail?.item?._id)
    const toggleLikeMutation = useToggleLikeCommentsByCommentIdMuation()
    const onHandleToggleLike = (commentId:string) => {
        toggleLikeMutation.mutate(commentId)
    }
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
                    <p className="text-gray-700" dangerouslySetInnerHTML={{
                        __html:branchDetail?.item.description || "<p>Chưa có mô tả nào</p>",
                    }}></p>
                ) : (
                   <>
                   {commentsResult && commentsResult.success && (
                     <div>
                        <div className=" space-y-4 mb-4">
                            {commentsResult.data.length > 0 && commentsResult.data.map((item) => (
                                <CommentFieldItem onHandleToggleLike={onHandleToggleLike} item={item} key={item._id} />
                            ))}

                             {commentsResult.data.length ==0 && (<p className="text-center">Chưa có bình luận nào !</p>)}
                        </div>
                        {/* <div className="flex justify-center items-center">
                            <Pagination />
                        </div> */}
                    </div>
                   )}
                   </>
                )}
            </div>
        </div>
    );
};

export default TabsFieldDetails;
