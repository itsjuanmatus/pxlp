import React from 'react'
import Accordion from '../components/Accordion'

export default function Cards() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="flex-col bg-white w-full min-h-screen">
            <div className="grid w-full place-content-center py-16 gap-y-8 px-3">
                <h3 className="text-center">UP-FRONT PRICING</h3>
                <h2 className="text-center text-3xl px-16 ">Simple,  transparent, plans.</h2>
                <p className='px-16 text-center '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id Optio.  consectetur adipisicing elit.
                </p>
                <div className="bg-indigo-600 grid w-full py-6 px-10 rounded-2xl">
                    <div className="flex justify-end">
                        <span className="bg-white py-1 px-4 max-w-max w-full rounded-3xl text-sm font-semibold">Most Popular</span>
                    </div>
                    <div className="grid space-y-3 pb-10">
                        <h2 className="text-3xl text-white font-medium">Personal</h2>
                        <p className="text-gray-300 font-light">$3/mo.</p>
                        <p className="text-gray-300 font-light pr-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic accusamus odio, incidunt rerum ex iste praesentium? Expedita.</p>
                        <button className='bg-truegray-900 text-white max-w-max px-6 py-3 rounded-3xl text-sm'>
                            Sign up today
                        </button>


                    </div>
                    <hr className='flex items-center border border-b-0 border-gray-400  relative -mx-10' />

                    <div className='inline-flex justify-between items-center pt-5'>
                        <div className="m-0 grid w-full place-content-center" >
                            <div className="flex justify-between w-full cursor-pointer accordion items-center gap-x-27" onClick={() => setIsOpen(!isOpen)}>
                                <p className="text-lg font-semibold max-w-xs md:max-w-full w-full text-gray-300">What is included</p>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 toggle transform duration-1000 rotate-45 stroke-current text-white "
                                    fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-expanded={isOpen}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <div className={`overflow-hidden accordion-content  `} aria-expanded={!isOpen}>
                                <p className="text-gray-300 font-light pr-16 md:pr-24 mt-4">
<span>
    
</span>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
