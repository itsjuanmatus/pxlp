import React, { useState, useEffect } from 'react'




export default function Card({
    backgroundColor,
    tagColor,
    textColor,
    buttonBackground,
    buttonTextColor,
    tag,
    title,
    titleColor,
    price,
    description,
    button,
    dropdownTitle,
    dropdownContent,
    dropdownTitleColor



}: any) {
    const [isOpen, setIsOpen] = React.useState(false)
    const size = useWindowSize();

    return (
        <div className={`${backgroundColor} shadow-sm grid w-full py-6 px-10 rounded-3xl max-w-sm min-w-sm`}>
            <div className="flex justify-end">
                <span className={`${tagColor} py-1 px-4 max-w-max w-full rounded-3xl text-sm font-semibold max-h-8 inline-flex items-center`}>{tag}</span>
            </div>
            <div className="grid space-y-4 pt-3 pb-10">
                <h2 className={`text-3xl ${titleColor} font-medium`}>{title}</h2>
                <p className={`${textColor} font-light`}>{price}</p>
                <p className={`${textColor} font-light pr-16 md:pr-0 `}>{description}</p>
                <button className={`${buttonBackground} ${buttonTextColor} max-w-max md:max-w-full px-6 py-3 rounded-3xl text-sm`}>
                    {button}
                </button>


            </div>
            <hr className='flex items-center border border-b-0 border-gray-400 relative -mx-10' />

            <div className='inline-flex justify-between items-center pt-5'>
                <div className="m-0 grid w-full place-content-center" >
                    <div className="flex justify-between w-full cursor-pointer accordion items-center space-x-24 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <p className={`text-lg font-semibold max-w-xs md:max-w-max w-full ${dropdownTitleColor}`}>{dropdownTitle}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className={`h-7 w-7 toggle transform duration-1000 rotate-45 stroke-current ${dropdownTitleColor}`}
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-expanded={isOpen}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                    </div>
                    <div className={`overflow-hidden accordion-content`} aria-expanded={size.width >= 768 ? isOpen : !isOpen}>
                        {dropdownContent}
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