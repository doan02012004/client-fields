import { useEffect, useState } from 'react'
import EditFieldsAdminTemplates from '../../../../components/dashboard/(fields)/field-edit/templates'
import { useNavigate, useParams } from 'react-router-dom'
import { FieldResponeType } from '../../../../types/api.type'
import CustomLoadingAdmin from '../../../../components/dashboard/components/custom-loading'
import { getFieldByIdQueryFn } from '../../../../libs/data/field'


const EditFieldsAdminPage = () => {
  const navigate = useNavigate()
  const [field, setField] = useState<FieldResponeType | null>(null)
  const param = useParams() as { id: string }

  useEffect(() => {
    const getBranch = async (id: string) => {
      try {
        const data = await getFieldByIdQueryFn(id)
        setField(data.data)
      } catch (error) {
        console.log(error)
        navigate('/admin/fields')
      }
    }

    getBranch(param.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.id])
  return (
    <>
      {field ? (
        <EditFieldsAdminTemplates field={field} />
      ) : (
        <CustomLoadingAdmin />
      )}
    </>
  )
}

export default EditFieldsAdminPage