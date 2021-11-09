import React from 'react'

export default function IconAndText() {
    return (
        <div className='min-h-screen w-full flex-col bg-lime-300'>
            <div className='grid md:grid-cols-2 place-items-center min-h-screen py-16' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3264&q=80")', objectFit: 'cover' }}>
                <img src="./charizard.png" alt="charizard" />
                <div className='max-w-xl px-5'>
                    <h1 className="text-4xl text-white font-semibold mb-3 text-center md:text-left">Invest with autopilot</h1>
                    <p className="text-white text-center md:text-left px-10 md:px-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quaerat mollitia iusto expedita, perferendis culpa illo ut. Molestiae dolorum aperiam atque fuga odit sint magni obcaecati suscipit officiis iusto!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum debitis ipsum accusamus?
                    </p>
                    <div className='mt-5 px-5 md:px-0'>
                        <div className='inline-flex'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 stroke-current text-blue-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>

                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quaerat mollitia iusto expedita, perferendis culpa illo ut. Molestiae dolorum aperiam atque fuga odit sint magni obcaecati suscipit officiis iusto!
                            </p>
                        </div>
                        <div className='inline-flex'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 stroke-current text-blue-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>

                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quaerat mollitia iusto expedita, perferendis culpa illo ut. Molestiae dolorum aperiam atque fuga odit sint magni obcaecati suscipit officiis iusto!
                            </p>
                        </div>
                        <div className='inline-flex'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 stroke-current text-blue-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>

                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quaerat mollitia iusto expedita, perferendis culpa illo ut. Molestiae dolorum aperiam atque fuga odit sint magni obcaecati suscipit officiis iusto!
                            </p>
                        </div>
                        <p className="text-white cursor-pointer underline mt-8">Learn More</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
