import React from 'react'

export default function Text() {
    return (
        <div className="min-h-screen flex-col w-full bg-gray-200 py-16">
            <div className="grid md:grid-cols-2 justify-items-center place-content-start gap-y-10 md:mx-16">
                <h2 className="text-4xl md:text-6xl text-center md:text-left text-truegray-700 px-20 md:pr-60">
                    Save and invest in the background of life.
                </h2>
                <p className="text-center text-truegray-700 text-lg px-16 md:text-left md:pr-44">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quaerat laboriosam harum sunt molestias repellat illo reiciendis minima facere officia consequuntur nam hic nesciunt culpa.
                </p>
            </div>
        </div>
    )
}
