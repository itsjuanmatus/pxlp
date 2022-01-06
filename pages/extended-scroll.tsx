import React from 'react';
import { useWindowSize } from '../services/windowSize';
export default function ExtendedScroll() {
    const size = useWindowSize();
    return (
        <div className="flex-col bg-truegray-900 min-h-screen w-full">
            <div className="grid md:grid-cols-4 py-24 px-10 gap-y-10 ">
                <div className="row-span-full md:pl-16">
                    <h2 className="text-center md:text-left md:px-0 md:pr-16 text-gray-300 text-3xl px-16 ">
                        What is ESG Investing?
                    </h2>
                    <p className="text-center md:text-left text-gray-300 font-light pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, illo sapiente beatae hic molestias qui amet.
                        Eos voluptas dolorum doloribus at, dolorem molestiae totam quas quo,
                        tempore laudantium ipsam dolor.
                    </p>
                </div>
                <div 
                className='grid md:grid-cols-2 place-items-center place-content-center 
                md:place-content-start gap-y-10 md:overflow-y-scroll col-span-3'
                    style={{ height: size.width >= 768 ? '42rem' : '', }}
                >
                    <div className='grid place-content-center place-items-center gap-y-5 md:col-start-1'>
                        <img src="./environmental.png" alt="Earth illustration" className='w-40 md:w-36 lg:w-64' />
                        <h2 className='text-center text-gray-300 text-3xl'>Environmental</h2>
                        <p className="text-center text-gray-300 font-light pt-2 px-5 max-w-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos voluptas dolorum doloribus at, dolorem molestiae totam quas quo,
                            tempore laudantium ipsam dolor.
                        </p>
                    </div>
                    <div className='grid place-content-center place-items-center gap-y-5 md:col-end-3 md:row-start-2'>
                        <img src="./environmental.png" alt="Earth illustration" className='w-40 md:w-36 lg:w-64' />
                        <h2 className='text-center text-gray-300 text-3xl'>Environmental</h2>
                        <p className="text-center text-gray-300 font-light pt-2 px-5 max-w-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos voluptas dolorum doloribus at, dolorem molestiae totam quas quo,
                            tempore laudantium ipsam dolor.
                        </p>
                    </div>
                    <div className='grid place-content-center place-items-center gap-y-5 md:row-start-3'>
                        <img src="./environmental.png" alt="Earth illustration" className='w-40 md:w-36 lg:w-64' />
                        <h2 className='text-center text-gray-300 text-3xl'>Environmental</h2>
                        <p className="text-center text-gray-300 font-light pt-2 px-5 max-w-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos voluptas dolorum doloribus at, dolorem molestiae totam quas quo,
                            tempore laudantium ipsam dolor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

