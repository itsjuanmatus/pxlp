import React from 'react'



export default function CTA({ title, description, button, desktopOrder = 'last', mobileOrder = 'first', subtitle, image, dark = false }: any) {
    return (
        <div className="grid md:grid-cols-2 place-content-center gap-y-7 place-items-center">
            <div
                className={`flex justify-center p-6 bg-blue-200  border border-dashed border-black max-w-2xl ${mobileOrder} ${desktopOrder}`}
            >
                <img
                    className='object-cover'
                    src={image} alt="" />
            </div>
            <div className=''>
                <h2 className={`text-3xl md:text-4xl font-semibold ${dark ? 'text-white' : 'text-blue-900'} pr-16`}>
                    {title}
                </h2>
                <h3 className='text-blue-300 text-xl md:text-2xl mt-2 kids-font'>{subtitle}</h3>
                <p className={`mt-2 ${dark ? 'text-white' : 'text-truegray-500'} pr-16`}>
                    {description}
                </p>
                <button className={` p-3 border-2 font-semibold mt-6 md:px-6  ${dark ? 'hover:bg-blue-200 hover:text-blue-900 text-white border-white ' : 'hover:bg-blue-900 hover:text-white text-blue-900 border-blue-900'} `}>
                    {button}
                </button>
            </div>
        </div>
    )
}
