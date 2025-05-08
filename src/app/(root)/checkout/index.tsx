import { useNavigate, useSearchParams } from "react-router-dom"
import CheckoutTemplates from "../../../components/root/checkout/templates"
import { useGetCheckoutOrderFieldQuery } from "../../../libs/hooks/order-field"
import { ParamsGetCheckout } from "../../../libs/data/order"
import CustomLoadingWebsite from "../../../components/root/components/custom-loading"


const CheckoutPage = () => {
  const [searchParams,] = useSearchParams()
  const navigate = useNavigate()
  const date = searchParams.get('date')
  const timeId = searchParams.get('timeId')
  const dayNumber = searchParams.get('dayNumber')
  const fieldId = searchParams.get('fieldId')
  if(!date || !timeId|| !fieldId || !dayNumber){
    navigate('/home')
  }
  const newParams = {
    date:date,
    dayNumber:Number(dayNumber),
    timeId:timeId,
    fieldId:fieldId
  } as ParamsGetCheckout
  const {data,isError} = useGetCheckoutOrderFieldQuery(newParams)
  if(isError){
    navigate('/')
  }
  if(!data || !data?.success){
    return <CustomLoadingWebsite />
  }
  return <CheckoutTemplates infor={data.data} />
}

export default CheckoutPage