import { Clock } from 'lucide-react'

const ServicesTemplates = () => {
    return (
        <section>
            <div className='container'>
                <div>
                    <h1 className=" heading-2 text-center uppercase mb-10 xl:heading-1">Dịch vụ</h1>
                </div>
                <div className="grid items-center grid-cols-1 max-w-7xl  mx-auto gap-4 md:w-max md:grid-cols-2 xl:grid-cols-4  xl:gap-10">
                    <div className='rounded-lg flex items-center gap-4 p-3 bg-white border border-gray-100 md:p-4' style={{boxShadow:"4px 4px 20px -4px #A6A6A6"}}>
                        <Clock size={30} className='text-green-600' />
                        <div>
                            <h5 className='heading-4'>Nhanh chóng</h5>
                            <p  className='text-base lg:text-lg text-gray-500'>Phục vụ quý khách 24/7</p>
                        </div>
                    </div>
                    <div className='rounded-lg flex items-center gap-4 p-3 bg-white border border-gray-100 md:p-4' style={{boxShadow:"4px 4px 20px -4px #A6A6A6"}}>
                        <Clock size={30} className='text-green-600' />
                        <div>
                            <h5 className='heading-4'>Nhanh chóng</h5>
                            <p  className='text-base lg:text-lg text-gray-500'>Phục vụ quý khách 24/7</p>
                        </div>
                    </div>
                    <div className='rounded-lg flex items-center gap-4 p-3 bg-white border border-gray-100 md:p-4' style={{boxShadow:"4px 4px 20px -4px #A6A6A6"}}>
                        <Clock size={30} className='text-green-600' />
                        <div>
                            <h5 className='heading-4'>Nhanh chóng</h5>
                            <p  className='text-base lg:text-lg text-gray-500'>Phục vụ quý khách 24/7</p>
                        </div>
                    </div>
                    <div className='rounded-lg flex items-center gap-4 p-3 bg-white border border-gray-100 md:p-4' style={{boxShadow:"4px 4px 20px -4px #A6A6A6"}}>
                        <Clock size={30} className='text-green-600' />
                        <div>
                            <h5 className='heading-4'>Nhanh chóng</h5>
                            <p  className='text-base lg:text-lg text-gray-500'>Phục vụ quý khách 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesTemplates