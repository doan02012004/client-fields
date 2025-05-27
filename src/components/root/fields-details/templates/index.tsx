import { useEffect, useState } from "react"
import { useGetBranchBySlugQuery } from "../../../../libs/hooks/branch"
import { useBranchDetail } from "../../../../libs/zustand/store"
import CustomLoadingWebsite from "../../components/custom-loading"

import GallerysFields from "./gallery"
import InforFields from "./info"
import ListDateField from "../components/list-date-field"


const FieldsDetailsTemplates = ({ slug }: { slug?: string }) => {
    const [isFetchingData, setIsFetchingData] = useState(true)
    const { selectedField, selectedDate, branchDetail, setBranchDetail, selectedTimeId, openListDateField } = useBranchDetail()
    const { data, isError } = useGetBranchBySlugQuery({ slug: slug ?? '', selectedFieldId: selectedField?._id ?? null, selectedDate: selectedDate?.date, selectedTimeId: selectedTimeId })

    useEffect(() => {
        if (data) {
            setIsFetchingData(false)
            setBranchDetail(data.data)
        }
        if (isError) {
            setIsFetchingData(false)
        }
    }, [data, isError])

    useEffect(() => {
        if (branchDetail) {
            document.title = `${branchDetail?.item?.name} - Play Pitch`
        }
    }, [branchDetail])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [slug])

    if (isFetchingData) return <CustomLoadingWebsite />
    if (isError) return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Không tìm thấy thông tin sân bóng</h1>
            <p className="text-center mt-4">Vui lòng kiểm tra lại đường dẫn hoặc quay lại trang chủ.</p>
        </div>
    )
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


        </>
    )
}

export default FieldsDetailsTemplates