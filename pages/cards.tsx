import React, { useEffect, useState } from 'react'
import Accordion from '../components/Accordion'
import Card from '../components/Card'

export default function Cards() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isOpen2, setIsOpen2] = React.useState(false)
    const size = useWindowSize();

    return (
        <div className="flex-col bg-white w-full min-h-screen m-auto">
            <div className="grid w-full place-content-center py-16 gap-y-8 px-3">
                <div className='grid md:inline-flex m-auto justify-between w-full'>
                    <div className='grid gap-y-5 md:gap-y-0 justify-items-center md:place-content-start md:justify-items-start px-10 md:px-8 z-50'>
                        <h3 className="text-center md:text-left">UP-FRONT PRICING</h3>
                        <h2 className="text-center text-4xl md:text-left lg:text-6xl">Simple,  transparent, plans.</h2>
                        <p className='text-center md:text-left md:mt-10 md:pr-18'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id Optio.  consectetur adipisicing elit.
                        </p>
                    </div>
                   <div className="mt-10 md:mt-0 grid place-content-center gap-y-5 md:inline-flex md:space-x-5 w-full justify-center">
                   <Card 
                    backgroundColor  = 'bg-purple-700 border border-gray-200 shadow-sm'
                    tagColor = 'white text-black'
                    textColor = 'text-white'
                    buttonBackground = 'bg-black hover:bg-white'
                    buttonTextColor = 'text-white hover:text-black'
                    tag = 'Most Popular'
                    title = 'Personal'
                    titleColor='text-white'
                    price = '$3/mo.'
                    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic accusamus odio, incidunt rerum ex iste praesentium? Expedita.'
                    button = 'Sign up today'
                    dropdownTitle = "What's included"
                    dropdownTitleColor = 'text-white'
                    dropdownContent = {
                    <> <div >
                        <div className="grid">
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-4 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">Investing</span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Investment account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement Account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                        </div>

                    </div>
                    <hr className="border-gray-400 my-6 opacity-60 " />
                    <div >
                        <div className="grid">

                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-4 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">Banking</span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Investment account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement Account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <hr className="border-gray-400 my-6 opacity-60" />
                    <div >
                        <div className="grid">

                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-4 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">Rewards</span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Investment account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-300 font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement Account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <hr className="border-gray-400 my-6 opacity-60 " />
                    <div className='bg-purple-400 p-4 rounded-md '>
                        <p className="text-white font-semibold">Rewards Chrome Extension</p>
                        <p className="text-white font-light">Get bonus investments every time you shop at 12,000+ partners</p>
                    </div> </>}
                    
                    />
                    <Card 
                    backgroundColor  = 'bg-white border border-gray-200 shadow-sm'
                    tagColor = 'bg-lime-500 text-white'
                    textColor = 'text-black'
                    buttonBackground = 'bg-black hover:bg-lime-500'
                    buttonTextColor = 'text-white hover:text-black hover:font-semibold'
                    tag = 'Best value'
                    title = 'Family'
                    titleColor='text-black'
                    price = '$3/mo.'
                    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic accusamus odio, incidunt rerum ex iste praesentium? Expedita.'
                    button = 'Sign up today'
                    dropdownTitle = "What's included"
                    dropdownTitleColor = 'text-black'
                    dropdownContent = {
                    <> 
                    <div >
                        <div className="grid">
                            <p className="text-black font-light pr-16 md:pr-24 mt-4 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">Investing</span>
                            </p>
                            <p className="text-black font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Investment account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-black font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-black font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement Account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                        </div>

                    </div>
                    <hr className="border-gray-400 my-6 opacity-60 " />
                    <div >
                        <div className="grid">

                            <p className="text-black font-light pr-16 md:pr-24 mt-4 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">Banking</span>
                            </p>
                            <p className="text-black  font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Investment account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-black  font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-black  font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement Account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <hr className="border-gray-400 my-6 opacity-60" />
                    <div >
                        <div className="grid">

                            <p className="text-black  font-light pr-16 md:pr-24 mt-4 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">Rewards</span>
                            </p>
                            <p className="text-black  font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Investment account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-black  font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
                            <p className="text-black  font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="">Retirement Account</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </p>
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