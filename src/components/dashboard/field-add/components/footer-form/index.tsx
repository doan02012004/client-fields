import { Plus } from 'lucide-react'
import React from 'react'

const FooterFieldForm = () => {
    return (
        <div className=' p-4'>
            <div className='flex justify-end'>
            <button className='btn-primary px-5 py-2 rounded border flex items-center gap-2 '>Tạo sân <Plus /></button>
            </div>
        </div>
    )
}

export default FooterFieldForm