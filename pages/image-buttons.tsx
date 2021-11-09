import React from 'react'
import { ages } from '../data/ages'

export default function ImageButtons() {
    return (
        <div className="min-h-screen bg-blue-100 w-full flex-col py-16">
            <div className="grid place-items-center place-content-center gap-y-10">
                <img src="./planet.png" alt="logo" className="w-36 -my-16" />
                <h2 className="text-blue-900 text-3xl text-center font-semibold px-16">Designed for every age and stage of development</h2>
                <div className="grid grid-cols-2 md:inline-flex gap-x-5 gap-y-7">
                    {ages && ages.map((e: any) => (
                        <div className="grid place-items-center" key={e.range}>
                            <img
                                style={{
                                    borderRadius: '5rem',
                                }}
                                className="w-36 h-36 object-cover  cursor-pointer hover:border-truegray-500 border-dashed border-4 p-1"
                                src={e.image}
                                alt="baby" />
                            <p className='kids-font text-blue-900 font-bold text-xl md:text-2xl'>
                                {e.range}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
