import React, { useState, createRef } from 'react'
const images = [
    '/iphone1.png',
    '/squirtle.png',
    '/pikachu.png',
    '/charizard.png',
]

import img from '../public/Ellipse.png'

export default function Carousel() {
    // index of current image in state
    const [currentImage, setCurrentImage] = useState(0)

    // We are using react ref to 'tag' each of the images. Below will create an array of
    // objects with numbered keys. We will use those numbers (i) later to access a ref of a
    // specific image in this array.
    const refs = images.reduce((acc: any, val, i) => {
        acc[i] = createRef();
        return acc;
    }, {})

    const scrollToImage = (i: any) => {
        setCurrentImage(i)

        refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        })
    }

    const totalImages = images.length;

    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0)
        } else {
            scrollToImage(currentImage + 1)
        }
    }

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1)
        }
    }

    const arrowStyle =
        'text-white text-2xl z-10 h-10 w-10 rounded-full opacity-75 flex items-center justify-center z-30';

    const sliderControl = (isLeft?: Boolean) => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'} `}
            style={{ top: '40%' }}
        >
            <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
                {isLeft ? <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full border border-gray-500 p-3 stroke-current hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full border border-gray-500 p-3 stroke-current hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>}
            </span>
        </button>
    )

    const titles = [
        'Direct Deposit', 'Check Deposit', 'Check Sending', 'Free Transfers'
    ]


    return (
        <div className="flex justify-center items-start bg-truegray-900 min-h-screen w-full overflow-hidden">
            <div className="grid justify-items-center w-full mt-10">

                <h2 className="text-white text-2xl md:text-4xl m-auto">All-digital banking</h2>

                <div className={`hidden md:inline-flex space-x-10 m-auto py-5`}>
                    {titles && titles.map((e: any) => (
                        <button key={e} type="button"
                            onClick={() => scrollToImage(titles.indexOf(e))}
                            className={`text-gray-300 cursor-pointer hover:text-green-600 ${titles.indexOf(e) === currentImage ? 'text-green-600' : ''}`}>
                            {e}
                        </button>
                    ))}
                </div>

                <div className="md:flex items-center justify-between w-full md:max-w-2xl lg:max-w-7xl">
                    <div className="hidden md:block">
                        {sliderControl(true)}
                    </div>
                    <div className="md:hidden flex items-center w-full justify-center space-x-10 mt-5">
                        {sliderControl(true)}
                        {titles && <p className="text-green-600 text-xl">{titles[currentImage]}</p>}
                        {sliderControl()}
                    </div>
                    <div className="p-12 flex justify-between w-screen  md:w-full items-center">
                        <div className="flex items-center justify-between w-full relative banner" >
                            <div className="w-96 m-auto z-30 flex items-center">
                                <div className="carousel">
                                    {images.map((img, i) => (
                                        <div className="w-full flex-shrink-0 z-10 trannsform duration-500 translate-x-full" key={img} ref={refs[i]}>
                                            <img src={img} className="w-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {sliderControl()}
                    </div>
                </div>
            </div>



        </div>

    )
}
