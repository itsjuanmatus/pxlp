import React from 'react'

export default function IconCard({title, description, icon}:any) {
    return (
        <div className="bg-white shadow-sm border border-gray-200 grid items-start rounded-xl p-6 gap-y-2">
            <div className="text-truegray-700 w-10">
                {icon}
            </div>
            <h3 className='text-lg font-semibold text-truegray-700'>
                {title}
            </h3>
            <p className='text-gray-600'>
                {description}
            </p>
        </div>
    )
}
