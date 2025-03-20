import { useAppContext } from "../../../../libs/context"
import BackgroundOpacity from "../../components/backgroud-opacity"
import RoadMapWebsite from "../../components/road-map/templates"
import ListFieldsContent from "./content"
import FilterFieldsFootball from "./filter"



const ListFieldsTemplate = () => {
    const { openFilterFields } = useAppContext()
    return (
        <div>
            <RoadMapWebsite />
            <div className="container ">
                <div className="flex flex-col gap-6 lg:flex-row">
                    <FilterFieldsFootball />
                    <ListFieldsContent />
                </div>
            </div>
            <div className="z-[100] lg:hidden">
                {openFilterFields && (
                    <BackgroundOpacity  />
                )}
            </div>
        </div>
    )
}

export default ListFieldsTemplate