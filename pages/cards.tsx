import React, { useEffect, useState } from 'react'
import Accordion from '../components/Accordion'
import Card from '../components/Card'
import ReactTooltip from "react-tooltip";
import CardTitle from '../components/CardTitle';
import CardItem from '../components/CardItem';


export default function Cards() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isOpen2, setIsOpen2] = React.useState(false)
    const size = useWindowSize();

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
                        <Card
                            backgroundColor='bg-purple-700 border border-gray-200 shadow-sm'
                            tagColor='bg-white text-black'
                            textColor='text-white'
                            buttonBackground='bg-black hover:bg-white'
                            buttonTextColor='text-white hover:text-black'
                            tag='Most Popular'
                            title='Personal'
                            titleColor='text-white'
                            price='$3/mo.'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic accusamus odio, incidunt rerum ex iste praesentium? Expedita.'
                            button='Sign up today'
                            dropdownTitle="What's included"
                            dropdownTitleColor='text-white'
                            dropdownContent={
                                <> <div >
                                    <div className="grid">
                                        <CardTitle
                                            title='Investing'
                                            textColor='text-gray-300'
                                            leftIcon={
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </span>
                                            }
                                            rightIconColor='text-gray-300'
                                        />
                                        <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />
                                        <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />
                                        <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />
                                    </div>

                                </div>
                                    <hr className="border-gray-400 my-6 opacity-60 " />
                                    <div>
                                        <div className="grid">
                                            <CardTitle
                                                title='Banking'
                                                textColor='text-gray-300'
                                                leftIcon={
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </span>
                                                }
                                                rightIconColor='text-gray-300'
                                            />
                                            <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />
                                            <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />
                                            <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />

                                        </div>
                                    </div>
                                    <hr className="border-gray-400 my-6 opacity-60" />
                                    <div >
                                        <div className="grid">
                                            <CardTitle
                                                title='Rewards'
                                                textColor='text-gray-300'
                                                leftIcon={
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </span>
                                                }
                                                rightIconColor='text-gray-300'
                                            />
                                            <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />

                                            <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />

                                            <CardItem title='Investment account' textColor='text-gray-300' leftIconColor='text-gray-300' />

                                        </div>
                                    </div>
                                    <hr className="border-gray-400 my-6 opacity-60 " />
                                    <div className='bg-purple-400 p-4 rounded-md '>
                                        <p className="text-white font-semibold">Rewards Chrome Extension</p>
                                        <p className="text-white font-light">Get bonus investments every time you shop at 12,000+ partners</p>
                                    </div> </>}
                        />
                        <Card
                            backgroundColor='bg-white border border-gray-200 shadow-sm'
                            tagColor='bg-lime-500 text-white'
                            textColor='text-black'
                            buttonBackground='bg-black hover:bg-lime-500'
                            buttonTextColor='text-white hover:text-black hover:font-semibold'
                            tag='Best value'
                            title='Family'
                            titleColor='text-black'
                            price='$3/mo.'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic accusamus odio, incidunt rerum ex iste praesentium? Expedita.'
                            button='Sign up today'
                            dropdownTitle="What's included"
                            dropdownTitleColor='text-black'
                            dropdownContent={
                                <>
                                    <div >
                                        <div className="grid">
                                            <CardTitle
                                                title='Investing'
                                                textColor='text-black'
                                                leftIcon={
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </span>
                                                }
                                                rightIconColor='text-lime-500'
                                            />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />

                                        </div>

                                    </div>
                                    <hr className="border-gray-400 my-6 opacity-60 " />
                                    <div >
                                        <div className="grid">

                                            <CardTitle
                                                title='Banking'
                                                textColor='text-black'
                                                leftIcon={
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </span>
                                                }
                                                rightIconColor='text-lime-500'
                                            />

                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />

                                        </div>
                                    </div>
                                    <hr className="border-gray-400 my-6 opacity-60" />
                                    <div >
                                        <div className="grid">

                                            <CardTitle
                                                title='Rewards'
                                                textColor='text-black'
                                                leftIcon={
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </span>
                                                }
                                                rightIconColor='text-lime-500'
                                            />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                            <CardItem title='Investment account' textColor='text-black' leftIconColor='text-lime-500' />
                                        </div>
                                    </div>
                                    <hr className="border-gray-400 my-6 opacity-60 " />
                                    <div className='bg-gray-200 p-4 rounded-md '>
                                        <p className="text-black font-semibold">Rewards Chrome Extension</p>
                                        <p className="text-truegray-800 font-light">Get bonus investments every time you shop at 12,000+ partners</p>
                                    </div> </>}

                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<any>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}