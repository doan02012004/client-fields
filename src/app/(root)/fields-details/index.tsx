
import { useParams } from 'react-router-dom'
import FieldsDetailsTemplates from '../../../components/root/fields-details/templates'

const FieldsDetailsPage = () => {
    const {slug}= useParams()
    
  return <FieldsDetailsTemplates slug={slug} />
}

export default FieldsDetailsPage