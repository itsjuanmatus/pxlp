import React from 'react'

export default function DoubleImage() {
    return (
        <div className="bg-lime-300 min-h-screen flex-col w-full">
            <div className="grid grid-cols-2 relative place-items-center px-16 min-h-screen" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3264&q=80")', objectFit: 'cover' }}>
                <img className="hidden md:block w-96 h-96 lg:mr-36 lg:mt-10 object-cover col-span-2 justify-self-end" style={{ borderRadius: '3rem' }} src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80" alt="" />
                <img className='hidden md:block' src="./charizard.png" alt="" />
                <div className='absolute grid gap-y-10 w-full place-items-center place-content-center'>
                    <p className='text-white text-xl'>Join the movement</p>
                    <h1 className='text-white text-5xl  max-w-xl text-center'>We&lsquo;re changing the way Americans save & invest everyday </h1>
                    <button className='text-black bg-white px-10 py-3 rounded-3xl'>
                        Sign up today
                    </button>
                    <img className=' md:hidden w-80' src="./charizard.png" alt="" />
                </div>
            </div>

        </div>
    )
}
