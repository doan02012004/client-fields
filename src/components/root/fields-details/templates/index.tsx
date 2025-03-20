import GallerysFields from "./gallery"
import InforFields from "./info"
import SuggestFieldsDetails from "./suggest"


const FieldsDetailsTemplates = () => {
    return (
        <div className=" space-y-10">
            <section className=" container">
                <div className="grid grid-cols-12 auto-rows-max gap-8">
                    <div className=" col-span-12 lg:col-span-6 xl:col-span-5">
                        <GallerysFields />
                    </div>
                    <div className="col-span-12 lg:col-span-6 xl:col-span-7">
                        <InforFields />
                    </div>
                </div>
            </section>
           <SuggestFieldsDetails />
        </div>
    )
}

export default FieldsDetailsTemplates