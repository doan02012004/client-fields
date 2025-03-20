
import FieldsItem from '../../components/fields/templates'

const FavoriteFielsFootball = () => {
  return (
    <section className='py-4'>
    <div className='container'>
        {/* header  */}
        <div>
            <h3 className='font-bold text-4xl text-center max-w-90 mx-auto mb-8'>Sân bóng được yêu thích nhất</h3>
        </div>
        {/* content  */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8'>
            <FieldsItem />
            <FieldsItem />
            <FieldsItem />
            <FieldsItem />
            <FieldsItem />
            <FieldsItem />
        </div>
    </div>
</section>
  )
}

export default FavoriteFielsFootball