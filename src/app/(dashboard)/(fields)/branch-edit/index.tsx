import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BranchPayloadType } from "../../../../types/api.type"
import { getBranchByIdQueryFn } from "../../../../libs/data/branch"
import EditBranchAdminTemplates from "../../../../components/dashboard/branch-edit/templates"


const EditBranchAdminPage = () => {
    const navigate = useNavigate()
    const [branch, setBranch] = useState<BranchPayloadType>({
        name: '',
        slug: '',
        address_text: '',
        city: '',
        ward: '',
        description: '',
        diagramImage: '',
        images: [],
        phoneNumber: '',
        timeActive: {
            endTime: 0,
            startTime: 0,
            title: ''
        }
    })
    const param = useParams() as { id: string }

    useEffect(() => {
        const getBranch = async () => {
           try {
            const data = await getBranchByIdQueryFn(param.id)
            setBranch(data.branch)
           } catch (error) {
            console.log(error)
            navigate('/admin/branchs')
           }
        }

        getBranch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param.id])
    return <EditBranchAdminTemplates branch={branch} id={param.id} />
}

export default EditBranchAdminPage