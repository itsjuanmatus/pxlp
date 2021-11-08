import React from 'react'



export default function CTA({ title, description, button, DesktopOrder, }: any) {
    return (
        <div className="grid md:grid-cols-2 place-content-center gap-y-7 place-items-center">
            <div
                className='flex justify-center p-6 bg-blue-200 border border-dashed border-black max-w-2xl lg:order-last'
            >
                <img
                    className='object-cover'
                    src="https://images.pexels.com/photos/5063442/pexels-photo-5063442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className=''>
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 pr-16">
                    {title}
                </h2>
                <h3 className='text-blue-300 text-xl md:text-2xl mt-2 kids-font'>Ages 6+</h3>
                <p className='mt-2 text-truegray-500 pr-16'>
                    {description}
                </p>
                <button className='text-blue-900 border-blue-900 p-3 border-2 font-semibold mt-6 md:px-6'>
                    {button}
                </button>
            </div>
        </div>
    )
}
