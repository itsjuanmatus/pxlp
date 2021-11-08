import React from 'react'

export default function CardLayout({ children }: any) {
    return (
        <div className="flex-col bg-white w-full min-h-screen m-auto">
            <div className="grid w-full place-content-center py-16 gap-y-8 px-3">
                <div className='grid md:inline-flex m-auto justify-between w-full'>
                    <div className='grid gap-y-5 md:gap-y-0 justify-items-center md:place-content-start md:justify-items-start px-10 md:px-8 z-50 md:max-w-xs lg:max-w-2xl'>
                        <h3 className="text-center md:text-left">UP-FRONT PRICING</h3>
                        <h2 className="text-center text-4xl md:text-left lg:text-6xl">Simple,  transparent, plans.</h2>
                        <p className='text-center md:text-left md:mt-10 md:pr-18'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id Optio.  consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0 grid place-content-center gap-y-5 md:inline-flex md:space-x-5 w-full justify-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}
