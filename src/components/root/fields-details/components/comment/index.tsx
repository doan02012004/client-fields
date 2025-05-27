import { User } from "lucide-react"
import { CommentFieldResponse } from "../../../../../libs/data/comment-field"
import { Rate } from "antd"
import { LikeOutlined } from "@ant-design/icons"
import { convertToDateString } from "../../../../../libs/constan"
import { useAppContext } from "../../../../../libs/context"

type CommentFieldItemProps = {
    item:CommentFieldResponse,
    onHandleToggleLike:(commentId:string) => void
}
const CommentFieldItem = ({item,onHandleToggleLike}:CommentFieldItemProps) => {
    const {user} = useAppContext()
  return (
    <div className="bg-gray-100 rounded px-3 py-1">
        <div className="flex gap-4">
            <User />
           <div className="w-full">
             <p className="p-0">{item.userId.name}</p>
             <Rate value={item.rating} disabled style={{ fontSize: 14 }} />
             <p className="text-sm mb-3">{convertToDateString(item.createdAt)}</p>

             <p className="font-semibold mb-2">{item.content}</p>
             <div className=" flex justify-end">
                <div onClick={() => onHandleToggleLike(item._id)} className={`${item.likes.includes(user?._id??'') && 'text-blue-600'} flex items-center gap-2 w-max cursor-pointer mr-5`}>
                    <LikeOutlined />
                    <span>{item.likes.length}</span>
                </div>
             </div>
           </div>
        </div>
        
    </div>
  )
}

export default CommentFieldItem