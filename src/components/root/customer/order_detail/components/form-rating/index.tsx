import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message, Rate } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BackgroundOpacity from "../../../../components/backgroud-opacity";
import { X } from "lucide-react";
import { useAppContext } from "../../../../../../libs/context";
import { createCommentFieldFn, PayloadCreateCommentType } from "../../../../../../libs/data/comment-field";
import { OrderFieldResponseFieldDetail } from "../../../../../../types/api.type";

// Schema validate bằng Zod
const ratingSchema = z.object({
  rating: z.number().min(1, "Bạn cần chọn ít nhất 1 sao"),
  comment: z.string(),
});

type RatingFormData = z.infer<typeof ratingSchema>;

type FormRatingOrderDetailWebProps = {
orderFieldDetail:OrderFieldResponseFieldDetail|null,
setOrderFieldDetail:Dispatch<SetStateAction<OrderFieldResponseFieldDetail | null>>
}
const FormRatingOrderDetailWeb = ({orderFieldDetail,setOrderFieldDetail}:FormRatingOrderDetailWebProps) => {
   const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RatingFormData>({
    resolver: zodResolver(ratingSchema),
    defaultValues: {
      rating: 5,
      comment: "",
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const {setIsOpenRating,user} = useAppContext()
  const rating = watch("rating");

  const onSubmit = async (data: RatingFormData) => {
    if(!user || !orderFieldDetail) return
    try {
      setSubmitting(true);
      
      const newPayload = {
        branchId:orderFieldDetail.branchId._id,
        userId:user._id,
        orderFieldId: orderFieldDetail._id ,
        fieldId:orderFieldDetail.fieldId._id,
        content:data.comment,
        rating:data.rating

      } as PayloadCreateCommentType
      const res = await createCommentFieldFn(newPayload)
      if(res && res.success){
        message.success("Cảm ơn bạn đã đánh giá!");
        setOrderFieldDetail({...orderFieldDetail,isRating:true})
        setIsOpenRating(false)
      }
    } catch (error) {
        console.log(error)
      message.error("Đánh giá thất bại. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
   <>
    <div className="fixed z-50 top-1/2 left-1/2 -translate-1/2 bg-white p-4 shadow rounded w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Đánh giá đơn đặt sân</h3>
        <X onClick={() => setIsOpenRating(false)} className=" cursor-pointer text-gray-600 hover:text-black" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Đánh giá (số sao):</label>
          <Rate
            disabled={submitting}
            value={rating}
            onChange={(value) => setValue("rating", value)}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Bình luận / Góp ý:</label>
          <textarea
            rows={4}
             className="w-full border border-gray-200 transition p-3 focus:border-gray-300"
            placeholder="Viết cảm nhận của bạn..."
            {...register("comment")}
              disabled={submitting}
             style={{ resize: 'none' }}
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
          )}
        </div>

        <Button
          type="primary"
          htmlType="submit"
          loading={submitting}
          className="mt-2"
        >
          Gửi đánh giá
        </Button>
      </form>
    </div>
    <BackgroundOpacity />
   </>
  );
}

export default FormRatingOrderDetailWeb