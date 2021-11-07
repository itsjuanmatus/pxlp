import React from 'react'
import Carousel, { CarouselItem } from '../components/Carousel'

export default function Carousel2() {

    const images = [
        '/iphone1.png',
        '/squirtle.png',
        '/pikachu.png',
        '/charizard.png',
    ]


    return (
        <div className="min-h-screen flex-col pt-10 bg-truegray-900 ">
            <Carousel>
                {images && images.map((e: any) => (
                    <CarouselItem key={images.indexOf(e)}>
                        <img src={e} alt="" className='w-full max-w-xs h-auto mt-96' />
                    </CarouselItem>

                ))}
            </Carousel>
        </div>

    )
}
