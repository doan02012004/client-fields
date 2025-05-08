import { useAppContext } from "../../../../libs/context"
import { CheckoutResponse } from "../../../../types/api.type"
import InforCheckoutField from "./info"
import ListCouponCheckout from "./list-coupon"
import TotalOrderField from "./total"


const CheckoutTemplates = ({ infor }: { infor: CheckoutResponse }) => {
    const { openListCouponCheckout } = useAppContext()
    return (
        <section className="container">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <InforCheckoutField infor={infor} />
                <TotalOrderField infor={infor} />
                {openListCouponCheckout && (
                    <ListCouponCheckout />
                )}
            </div>
        </section>
    )
}

export default CheckoutTemplates