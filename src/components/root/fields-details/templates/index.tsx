import { useEffect, useState } from "react"
import { useGetBranchBySlugQuery } from "../../../../libs/hooks/branch"
import { useBranchDetail } from "../../../../libs/zustand/store"
import CustomLoadingWebsite from "../../components/custom-loading"

import GallerysFields from "./gallery"
import InforFields from "./info"
import { BranchDetailsType } from "../../../../types/api.type"
import ServicesTemplates from "../../components/services/templates"
import ListDateField from "../components/list-date-field"


const FieldsDetailsTemplates = ({ slug }: { slug?: string }) => {
    const [isFetchingData, setIsFetchingData] = useState(true)
    const { selectedField, selectedDate, selectedTimeId,openListDateField } = useBranchDetail()
    const [branchDetail, setBranchDetail] = useState<BranchDetailsType | null>(null)
    const { data, isError } = useGetBranchBySlugQuery({ slug: slug ?? '', selectedFieldId: selectedField?._id ?? null, selectedDate: selectedDate?.date, selectedTimeId: selectedTimeId })

    useEffect(() => {
        if (data) {
            setIsFetchingData(false)
            setBranchDetail(data.data)
        }
    }, [data])

    useEffect(() => {
        window.scrollTo({top:0,behavior:"smooth"})
    },[slug])
    
    if (isFetchingData) return <CustomLoadingWebsite />
    if (isError) return <div>Error...</div>
    return (
        <>
            <div className=" relative mb-20">
                <section className=" container">
                    <div className="flex flex-col gap-20 xl:flex-row">
                        <div className="shrink-0">
                            <GallerysFields data={branchDetail} />
                        </div>
                        <div >
                            <InforFields data={branchDetail} />
                        </div>
                    </div>
                </section>
                {/* <SuggestFieldsDetails /> */}
            </div>
          {
            openListDateField && (
                <ListDateField branchId={branchDetail?.item?._id ?? ''} />
            )
          }
            <ServicesTemplates />
            
        </>
    )
}

export default FieldsDetailsTemplates