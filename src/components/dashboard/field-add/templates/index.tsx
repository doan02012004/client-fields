import { FormProvider, useForm } from "react-hook-form";
import InforBaseField from "./info";
import FooterFieldForm from "../components/footer-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldFormAddSchema } from "../../../../libs/schemas/field";
import { FieldPostPayloadType,  } from "../../../../types/api.type";
import RangePriceFieldForm from "./range-price";
import { useCreateFieldMutation } from "../../../../libs/hooks/field";



const AddFieldAdminTemplates = () => {
    const method = useForm<FieldPostPayloadType>({
        resolver:zodResolver(fieldFormAddSchema),
        defaultValues: {
            name:'',
            slug:'',
            description:'',
            branchId:'',
            images:[],
            rangePrices:[],
            rangeTimes:[],
            size:{
                length:0,
                width:0
            },
            status:true,
            typeFields:[]
        }
    })
    const mutation = useCreateFieldMutation()

    const onSubmit = (data:FieldPostPayloadType) => {
        mutation.mutate(data)
    }
    return (
        <div className="w-full py-6">
            <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">Thêm Sân Bóng</h2>
            <div className="flex gap-6">
                <FormProvider {...method}>
                    <form className="w-full" onSubmit={method.handleSubmit(onSubmit)}>
                        <InforBaseField />
                        <RangePriceFieldForm />
                        <FooterFieldForm />
                    </form>
                </FormProvider>

                <div className="bg-white w-full max-w-[300px] h-max p-3 shrink-0">
                    <h6 className=" uppercase mb-4">Mẫu bạn có thể chọn</h6>
                    <p className="text-sm">Hiện tại chưa có mẫu nào</p>
                </div>
            </div>
        </div>
    );
};

export default AddFieldAdminTemplates;
