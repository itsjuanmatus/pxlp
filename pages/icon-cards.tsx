import React from 'react'
import IconCard from '../components/IconCard'
import { data } from '../data/icon-cards'

export default function IconCards() {
    return (
        <div className="flex-col min-h-screen w-full m-auto">
            <div className='grid md:grid-cols-3 gap-10 p-10'>
                {data && data.map((e: any) => (
                    <IconCard title={e.title} description={e.description} icon={e.icon} key={`${e.title}`} />
                ))}
            </div>
        </div>

    )
}
