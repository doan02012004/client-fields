import { useParams } from "react-router-dom"
import EditOrderFieldAdminTemplates from "../../../../../components/dashboard/(orders)/(fields)/edit/templates"
import { useEffect, useState } from "react"
import { getOrderFieldByOrderId } from "../../../../../libs/data/order"
import { OrderFieldResponseAdmin } from "../../../../../types/api.type"


const EditOrderFieldAdminPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [orderField, setOrderField] = useState<OrderFieldResponseAdmin | null>(null)
  const { id } = useParams()

  useEffect(() => {

    const fetchOrderDetails = async (id: string) => {
      setIsLoading(true)
      try {
        const result = await getOrderFieldByOrderId(id) as { success: boolean, data: OrderFieldResponseAdmin }
        if (result.success) {
          setOrderField(result.data)
        }
      } catch (error) {
        console.log('error orderField', error)
        setOrderField(null)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchOrderDetails(id)
    }


  }, [id])

  return <EditOrderFieldAdminTemplates loading={isLoading} orderField={ orderField} />
}

export default EditOrderFieldAdminPage