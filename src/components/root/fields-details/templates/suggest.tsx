import FieldsItem from "../../components/fields/templates"


const SuggestFieldsDetails = () => {
  return (
    <section className="container">
           <div>
            <h3 className='font-bold text-3xl text-center max-w-90 mx-auto mb-8'>Gợi ý cho bạn</h3>
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
    </section>
  )
}

export default SuggestFieldsDetails