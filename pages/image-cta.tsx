import React from 'react'
import CTA from '../components/CTA'
import { cta } from '../data/cta'


export default function ImageCTA() {
    return (
        <div className="flex-col min-h-screen w-full bg-white py-10 px-10 m-auto">
            {cta && cta.map((e: any) => (
                <CTA key={e.title} title={e.title} description={e.description} button={e.button} desktopOrder={e.desktopOrder} mobileOrder={e.mobileOrder} subtitle={e.subtitle} image={e.image} />
            ))}

        </div>
    )
}
