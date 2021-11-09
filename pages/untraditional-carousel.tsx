import React from 'react'
import UntraditionalCarousel, { CarouselItem } from '../components/UntraditionalCarousel'

export default function UntraditionalCarousel2() {


    const titles = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, lectus at viverra semper, dui lacus porttitor orci, ut vulputate orci ',
        'Pellentesque efficitur nisi nibh, nec dapibus quam volutpat ut. Duis dictum velit eget consequat fringilla. Curabitur facilisis, est in aliquam',
        'Nulla rhoncus elit enim, in posuere magna scelerisque non. Proin ac lectus dignissim, fringilla quam a, feugiat felis. Cras ante odio, '
    ]



    return (
        <div className="min-h-screen bg-purple-800 py-16">
            <UntraditionalCarousel titles={titles && titles}>

                {titles && titles.map((e: any) => (
                    <CarouselItem key={e}>
                        <div className="whitespace-normal grid grid-cols-3 place-content-center place-items-center max-w-7xl mt-44 md:mt-0">
                            <div className="grid place-content-start -mr-44  md:max-w-xl md:-mr-40 z-30 pl-5 md:pl-16 gap-y-5">
                                <h1 className="text-3xl md:text-4xl text-white ">{e}</h1>
                                <p className='text-white'>- Author</p>
                            </div>

                            <div>

                            </div>
                        </div>
                    </CarouselItem>
                ))}

            </UntraditionalCarousel>
        </div>
    )
}
