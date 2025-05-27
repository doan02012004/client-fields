import { useFormContext, useWatch } from "react-hook-form"
import { useGetAllBranchQuery } from "../../../../../libs/hooks/branch"
import { FieldPostPayloadType } from "../../../../../types/api.type"
import ReactQuill from "react-quill"
import { LoadingOutlined } from "@ant-design/icons"
import { ImageIcon, Trash } from "lucide-react"
import { maxImageField } from "../../../../../libs/constan"
import { useState } from "react"
import { uploadImage } from "../../../../../libs/data/upload"

const InforBaseFieldEdit = () => {
    const { register, formState: { errors }, setValue, control } = useFormContext<FieldPostPayloadType>()
    const [loadingImages, setLoadingImages] = useState(false)
    const { data } = useGetAllBranchQuery({})
    const branchs = data?.branchs || []
    const descriptionWatch = useWatch({
        control,
        name: "description",
    })
    const branchIdWatch = useWatch({
        control,
        name: "branchId",
    })
    const imagesWatch = useWatch({
        control,
        name: "images",
    })
    
    const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentImages: string[] = imagesWatch
        setLoadingImages(true)
        if (e.target.files) {
            const files = Array.from(e?.target?.files).slice(0, Number(maxImageField - imagesWatch.length)); // Chuyển FileList thành mảng
            for (const file of files) {
                try {
                    const data = await uploadImage(file)
                    if (data?.image_url) {
                        currentImages.push(data.image_url)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        setValue('images', currentImages,{shouldDirty:true})
        setLoadingImages(false)
    }
    const onRemoveImage = (url: string) => {
        const newImages = imagesWatch.filter((image_url) => image_url !== url)
        setValue('images', newImages,{shouldDirty:true})
    }

    return (
        <div className="mb-6">
            <div className="container">
                <div className="bg-white py-4 px-6">
                    <h6 className="text-lg font-semibold uppercase mb-6">Thông tin cơ bản</h6>
                    <div className="space-y-6 pl-5">
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Tên sân bóng</label>
                            <div className="w-full">
                                <input {...register('name')} className="px-3 py-2 border text-sm border-gray-300 w-full" />
                                {errors && errors.name && (<p className="text-sm text-red-500 mt-1">{errors.name.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Slug (đường dẫn)</label>
                            <div className="w-full">
                                <input {...register('slug')} className="px-3 py-2 border text-sm border-gray-300 w-full" />
                                {errors && errors.slug && (<p className="text-sm text-red-500 mt-1">{errors.slug.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label className="block w-32 shrink-0 ">Kích thước sân</label>
                            <div>
                                <div>
                                    <label htmlFor="" className="block mb-2 text-sm font-semibold">Chiều dài sân (mét):</label>
                                    <input {...register('size.length',{valueAsNumber:true})} className="px-3 py-2 border text-sm border-gray-300 w-44" />
                                    {errors && errors.size && errors.size.length && (<p className="text-sm text-red-500 mt-1">{errors.size.length.message}</p>)}
                                </div>
                            </div>
                            <div className="ml-4">
                                <div>
                                    <label htmlFor="" className="block mb-2 text-sm font-semibold">Chiều rộng sân (mét):</label>
                                    <input {...register('size.width',{valueAsNumber:true})} className="px-3 py-2 border text-sm border-gray-300 w-44" />
                                    {errors && errors.size && errors.size.width && (<p className="text-sm text-red-500 mt-1">{errors.size.width.message}</p>)}
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Ảnh</label>
                            <div className="w-full">
                                <div className="flex flex-wrap gap-4">
                                    {imagesWatch.map((url) => (
                                        <div key={url} className="relative">
                                            <img src={url} alt="ảnh" className="size-32" />
                                            <button onClick={() => onRemoveImage(url)} className=" absolute bottom-0 py-1.5 bg-black/30 w-full flex justify-center text-white items-center cursor-pointer hover:bg-white/40"><Trash size={18} /></button>
                                        </div>
                                    ))}
                                    <label className={`  relative size-16 border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500`} htmlFor='upload-images'>
                                        <input disabled={(loadingImages == true || imagesWatch.length == maxImageField) ? true : false} onChange={(e) => onUploadImage(e)} multiple type="file" className='hidden' id='upload-images' />
                                        <div className='flex flex-col items-center gap-2'>
                                            {loadingImages ? (
                                                <LoadingOutlined />
                                            ) : (
                                                <ImageIcon size={24} />
                                            )}
                                            <span className='text-xs'>{imagesWatch.length}/{maxImageField}</span>
                                        </div>
                                    </label>
                                </div>
                                {errors && errors.images && (<p className="text-sm text-red-500 mt-1">{errors.images.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="branchId" className="block w-32 shrink-0 ">Cơ sở</label>
                            <div className="w-full">
                                <select  {...register('branchId')} value={branchIdWatch} id="branchId" className="px-3 py-2 border text-sm border-gray-300 w-full">
                                <option value="">Chọn cơ sở...</option>
                                    {branchs.map((branch) => (
                                        <option key={branch._id} value={branch._id}>{branch.name}</option>
                                    ))}
                                </select>
                                {errors && errors.branchId && (<p className="text-sm text-red-500 mt-1">{errors.branchId.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Mô tả sân bóng</label>
                            <div className="w-full">
                                <ReactQuill value={descriptionWatch} onChange={(content: string) => setValue('description', content,{shouldDirty:true})} />
                                {errors && errors.description && (<p className="text-sm text-red-500 mt-1">{errors.description.message}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InforBaseFieldEdit