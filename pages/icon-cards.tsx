import React from 'react'
import IconCard from '../components/IconCard'
import { data } from '../data/icon-cards'

export default function IconCards() {
    return (
        <div className="grid min-h-screen w-full m-auto place-items-center overflow-x-hidden">
            <div className='grid md:flex flex-wrap items-center justify-center md:gap-x-5 lg:gap-x-0 p-10 w-full max-w-7xl'>
                {data && data.map((e: any) => (
                    <IconCard title={e.title} description={e.description} icon={e.icon} key={`${e.title}`} />
                ))}
            </div>
        </div>

    )
}
