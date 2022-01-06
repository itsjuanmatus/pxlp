import React from 'react';
import Card from '../components/Card';
import CardItem from '../components/CardItem';
import CardTitle from '../components/CardTitle';
import CardLayout from '../components/Layout/CardLayout';


export default function Cards() {
    return (
        <CardLayout >
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
                        </div>
                    </>
                }
            />
        </CardLayout>

    )
}
