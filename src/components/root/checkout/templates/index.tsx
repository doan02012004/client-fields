import InforCheckoutField from "./info"
import TotalOrderField from "./total"


const CheckoutTemplates = () => {
    return (
        <section className="container">
            <div className="grid grid-cols-12 gap-8 auto-rows-max">
                <InforCheckoutField />
                <TotalOrderField />
            </div>
        </section>
    )
}

export default CheckoutTemplates