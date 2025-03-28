import { FormProvider, useForm } from "react-hook-form"
import { FieldPostPayloadType, FieldResponeType } from "../../../../types/api.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { fieldFormEditSchema } from "../../../../libs/schemas/field"
import InforBaseFieldEdit from "./info"
import RangePriceFieldFormEdit from "./range-price"
import { Plus } from "lucide-react"
import { useEffect } from "react"
import { useUpdateFieldMutation } from "../../../../libs/hooks/field"
import { message } from "antd"

type EditFieldsAdminTemplatesProps = {
  field: FieldResponeType
}
const EditFieldsAdminTemplates = ({ field }: EditFieldsAdminTemplatesProps) => {
  const method = useForm<FieldPostPayloadType>({
    resolver: zodResolver(fieldFormEditSchema),
    defaultValues: field
  })
  const mutation = useUpdateFieldMutation()
  useEffect(() => {
    if (field) {
      method.reset(field)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field])

  const onSubmit = (data: FieldPostPayloadType) => {
    if (!method.formState.isDirty) return message.error('Bạn chưa có thay đổi nào!')
    mutation.mutate({ id: field._id, data: data })
  }
 
  return (
    <div className="w-full py-6">
      <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">Cập nhật Sân Bóng</h2>
      <FormProvider {...method}>
        <form className="w-full" onSubmit={method.handleSubmit(onSubmit)}>
          <InforBaseFieldEdit />
          <RangePriceFieldFormEdit />
          <div className=' p-4'>
            <div className='flex justify-end'>
              <button className='btn-primary px-5 py-2 rounded border flex items-center gap-2 '>Cập nhật sân <Plus /></button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default EditFieldsAdminTemplates