import { lazy, useEffect, useRef, useState } from "react"
import { uploadImage } from "../../../../../libs/data/upload"
import { BranchPayloadType } from "../../../../../types/api.type"

import { zodResolver } from "@hookform/resolvers/zod"
import { branchFormAddSchema } from "../../../../../libs/schemas/branch"
import { useForm } from "react-hook-form"
import CustomTimePicker from "../../../../components/CustomTimePicker"
import { LoadingOutlined } from "@ant-design/icons"
import { ImageIcon, Trash } from "lucide-react"
import { useUpdateBranchMutation } from "../../../../../libs/hooks/branch"
import { generateId, maxImageBranch } from "../../../../../libs/constan"
import { generateTextByMinutes } from "../../../../../libs/utils/field"
const ReactQuill = lazy(() => import('react-quill'))
// import ReactQuill from "react-quill"



const EditBranchAdminTemplates = ({ branch, id }: { branch: BranchPayloadType, id: string }) => {
    const quillRef = useRef(null)
    const { register, handleSubmit, formState: { errors, isDirty }, setValue, watch, reset } = useForm<BranchPayloadType>({
        resolver: zodResolver(branchFormAddSchema),
        defaultValues: branch
    })

    const [loadingImages, setLoadingImages] = useState(false)
    const [loadingDiagramImage, setLoadingDiagramImage] = useState(false)
    const [startTime, setStartTime] = useState<number>(0)
    const [endTime, setEndTime] = useState<number>(0)
    const mutation = useUpdateBranchMutation()
    const formData = watch()

    useEffect(() => {

        reset(branch)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [branch, id])
    const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentImages: string[] = formData.images
        setLoadingImages(true)
        if (e.target.files) {
            const files = Array.from(e?.target?.files).slice(0, Number(maxImageBranch - formData.images.length)); // Chuyển FileList thành mảng
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
        setValue('images', currentImages)
        setLoadingImages(false)
    }

    const onUploadDiagramImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoadingDiagramImage(true)
        if (e.target.files) {
            try {
                const data = await uploadImage(e.target.files[0])
                if (data?.image_url) {
                    setValue('diagramImage', data.image_url)
                }
            } catch (error) {
                console.log(error)
            }
        }
        setLoadingDiagramImage(false)
    }

    const onRemoveImage = (url: string) => {
        const newImages = formData.images.filter((image_url) => image_url !== url)
        setValue('images', newImages)
    }

    const onAddSelectTime = () => {
        const newSelectTime = {
            _id: generateId(),
            startTime: startTime,
            endTime: endTime,
            text: `${generateTextByMinutes(startTime)} - ${generateTextByMinutes(endTime)}`
        }
        setValue('selectTimes', [...formData.selectTimes, newSelectTime],{shouldDirty: true})
        setStartTime(0)
        setEndTime(0)
    }
    const onRemoveSelectTime = (id: string) => {
        const newSelectTimes = formData.selectTimes.filter((item) => item._id !== id)
        setValue('selectTimes', newSelectTimes,{shouldDirty: true})
    }

    const onSubmit = (data: BranchPayloadType) => {
        if (!isDirty) return
        mutation.mutate({ id: id, data: data })
    }
    return (
        <div >
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Cập nhật cơ sở sân bóng</h2>
            <div className="max-w-4xl mx-auto bg-white p-4 ">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-8 mb-6">
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Tên cơ sở</label>
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
                            <label htmlFor="" className="block w-32 shrink-0 ">Thành phố</label>
                            <div className="w-full">
                                <select {...register('city')} className="px-3 py-2 border text-sm border-gray-300 w-full">
                                    <option value="">Chọn thành phố...</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                </select>
                                {errors && errors.city && (<p className="text-sm text-red-500 mt-1">{errors.city.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Xã (phường)</label>
                            <div className="w-full">
                                <select {...register('ward')} className="px-3 py-2 border text-sm border-gray-300 w-full">
                                    <option value="">Chọn xã...</option>
                                    <option value="Tiến Xuân">Tiến Xuân</option>
                                </select>
                                {errors && errors.ward && (<p className="text-sm text-red-500 mt-1">{errors.ward.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Địa chỉ đầy đủ</label>
                            <div className="w-full">
                                <input {...register('address_text')} className="px-3 py-2 border text-sm border-gray-300 w-full" />
                                {errors && errors.address_text && (<p className="text-sm text-red-500 mt-1">{errors.address_text.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Số liên hệ</label>
                            <div className="w-full">
                                <input {...register('phoneNumber')} className="px-3 py-2 border text-sm border-gray-300 w-full" />
                                {errors && errors.phoneNumber && (<p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Khung giờ hoạt động (24h)</label>
                            <div className="w-full">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <span>Từ: </span>
                                        <div className="border border-gray-300 flex items-center pr-3">
                                            <CustomTimePicker value={formData.timeActive.startTime} onChange={(value) => setValue('timeActive.startTime', value)} />
                                            <span className="border-l border-gray-300 pl-2 text-sm">giờ</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span>Đến: </span>
                                        <div className="border border-gray-300 flex items-center pr-3">
                                            <CustomTimePicker value={formData.timeActive.endTime} onChange={(value) => setValue('timeActive.endTime', value)} />
                                            <span className="border-l border-gray-300 pl-2 text-sm">giờ</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="" className="block shrink-0 ">Dạng chữ</label>
                                        <div className="w-full">
                                            <input {...register('timeActive.title')} className="px-3 py-2 border text-sm border-gray-300 w-full" />
                                        </div>
                                    </div>
                                </div>
                                {errors && errors.timeActive && errors.timeActive.startTime && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.startTime.message}</p>)}
                                {errors && errors.timeActive && errors.timeActive.endTime && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.endTime.message}</p>)}
                                {errors && errors.timeActive && errors.timeActive.title && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.title.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Khung giờ người dùng có thể chọn</label>
                            <div className="w-full">
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="flex items-center gap-3">
                                        <span>Từ: </span>
                                        <div className="border border-gray-300 flex items-center pr-3">
                                            <CustomTimePicker value={startTime} onChange={(value) => setStartTime(value)} />
                                            <span className="border-l border-gray-300 pl-2 text-sm">giờ</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span>Đến: </span>
                                        <div className="border border-gray-300 flex items-center pr-3">
                                            <CustomTimePicker value={endTime} onChange={(value) => setEndTime(value)} />
                                            <span className="border-l border-gray-300 pl-2 text-sm">giờ</span>
                                        </div>
                                    </div>
                                    <button onClick={() => onAddSelectTime()} className="px-4 py-2 rounded btn-primary" type="button">Áp dụng</button>
                                </div>
                                <p className="text-sm mb-1">Danh sách:</p>
                                <div className="p-3 rounded bg-gray-200 flex flex-wrap gap-6">
                                    {formData?.selectTimes.map((item, index) => (
                                        <div key={index} className="flex items-center gap-1">
                                            <button type="button" className="btn-secondary px-4 py-2 rounded border-gray-100">
                                                {item.text}
                                            </button>
                                            <span>-</span>
                                            <Trash size={20} className=" cursor-pointer hover:text-red-500" onClick={() => onRemoveSelectTime(item?._id ?? '')} />
                                        </div>
                                    ))}
                                    {/* <div className="flex items-center gap-1">
                                                                <button  type="button" className="btn-secondary px-4 py-2 rounded border-gray-100">
                                                                    16h00 - 17h30
                                                                </button>
                                                                <span>-</span>
                                                                <Trash size={20} className=" cursor-pointer hover:text-red-500" />
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <button  type="button" className="btn-secondary px-4 py-2 rounded border-gray-100">
                                                                    16h00 - 17h30
                                                                </button>
                                                                <span>-</span>
                                                                <Trash size={20} className=" cursor-pointer hover:text-red-500" />
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <button  type="button" className="btn-secondary px-4 py-2 rounded border-gray-100">
                                                                    16h00 - 17h30
                                                                </button>
                                                                <span>-</span>
                                                                <Trash size={20} className=" cursor-pointer hover:text-red-500" />
                                                            </div> */}
                                </div>
                                {/* {errors && errors.timeActive && errors.timeActive.startTime && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.startTime.message}</p>)}
                                                        {errors && errors.timeActive && errors.timeActive.endTime && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.endTime.message}</p>)}
                                                        {errors && errors.timeActive && errors.timeActive.title && (<p className="text-sm text-red-500 mt-1">{errors.timeActive.title.message}</p>)} */}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Ảnh</label>
                            <div className="w-full">
                                <div className="flex flex-wrap gap-4">
                                    {formData.images.map((url) => (
                                        <div key={url} className="relative">
                                            <img src={url} alt="ảnh" className="size-32" />
                                            <button onClick={() => onRemoveImage(url)} className=" absolute bottom-0 py-1.5 bg-black/30 w-full flex justify-center text-white items-center cursor-pointer hover:bg-white/40"><Trash size={18} /></button>
                                        </div>
                                    ))}
                                    <label className={`  relative size-16 border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500`} htmlFor='upload-images'>
                                        <input disabled={(loadingImages == true || formData.images.length == maxImageBranch) ? true : false} onChange={(e) => onUploadImage(e)} multiple type="file" className='hidden' id='upload-images' />
                                        <div className='flex flex-col items-center gap-2'>
                                            {loadingImages ? (
                                                <LoadingOutlined />
                                            ) : (
                                                <ImageIcon size={24} />
                                            )}
                                            <span className='text-xs'>{formData.images.length}/{maxImageBranch}</span>
                                        </div>
                                    </label>
                                </div>
                                {errors && errors.images && (<p className="text-sm text-red-500 mt-1">{errors.images.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Sơ đồ sân bóng</label>
                            <div className="w-full">
                                <div className="flex flex-wrap gap-4">
                                    {formData.diagramImage !== '' && (
                                        <div className="relative">
                                            <img src={formData.diagramImage} alt="ảnh" className="size-40" />
                                            <button onClick={() => setValue('diagramImage', '')} className=" absolute bottom-0 py-1.5 bg-black/30 w-full flex justify-center text-white items-center cursor-pointer hover:bg-white/40"><Trash size={18} /></button>
                                        </div>
                                    )}
                                    <label className={`  relative size-16 border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500`} htmlFor='upload-diagram-images'>
                                        <input disabled={(loadingDiagramImage == true || formData.diagramImage !== '') ? true : false} onChange={(e) => onUploadDiagramImage(e)} type="file" className='hidden' id='upload-diagram-images' />
                                        <div className='flex flex-col items-center gap-2'>
                                            {loadingDiagramImage ? (
                                                <LoadingOutlined />
                                            ) : (
                                                <ImageIcon size={24} />
                                            )}
                                            <span className='text-xs'>{formData.diagramImage !== '' ? 1 : 0}/1</span>
                                        </div>
                                    </label>
                                </div>
                                {errors && errors.diagramImage && (<p className="text-sm text-red-500 mt-1">{errors.diagramImage.message}</p>)}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="" className="block w-32 shrink-0 ">Mô tả sân bóng</label>
                            <div className="w-full">
                                <ReactQuill ref={quillRef} theme="snow" value={formData.description} onChange={(content: string) => setValue('description', content)} />
                                {errors && errors.description && (<p className="text-sm text-red-500 mt-1">{errors.description.message}</p>)}
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="btn-primary px-4 py-2">Cập nhật cơ sở</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditBranchAdminTemplates