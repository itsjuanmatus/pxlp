import React from 'react'



export default function Accordion({ title, description }: any) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <div className="m-0 grid w-full px-5 place-content-center" >
                <div className="flex justify-between w-full cursor-pointer accordion items-center" onClick={() => setIsOpen(!isOpen)}>
                    <p className="text-lg font-semibold max-w-xs md:max-w-full w-full">{title}</p>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 toggle transform duration-500 rotate-45 stroke-current text-indigo-600 "
                        fill="none" viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-expanded={isOpen}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className={`overflow-hidden accordion-content transform duration-500 ${isOpen ? 'mt-4' : ''}`} aria-expanded={!isOpen}>
                    <p className="text-gray-700 md:pr-24">
                        {description}

                    </p>
                </div>
            </div>
            <hr className="bg-gray-500 w-full my-5" />
        </>
    )
}
