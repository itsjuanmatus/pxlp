import React from 'react'
import CountUp from 'react-countup';

export default function AnimatedNumber() {
    const size = useWindowSize();

    return (
        <div className="min-h-screen bg-truegray-900 flex-col w-full ">
            <div className="relative grid grid-cols-2 gap-y-36 gap-x-5 py-10 px-5 place-items-center">
                <img
                    style={{
                        width: `${size.width <= 768 ? '20rem' : '20rem'}`,
                        height: `${size.width <= 768 ? '10rem' : '13rem'}`,
                        objectFit: 'cover',
                        borderRadius: '4rem',
                    }}
                    className='items-center opacity-60 '
                    src='https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80'
                    alt="Woman with coffee" />

                <img
                    className='opacity-60'

                    style={{
                        width: `${size.width <= 768 ? '20rem' : '20rem'}`,
                        height: `${size.width <= 768 ? '20rem' : '29rem'}`,
                        objectFit: 'cover',
                        borderRadius: '3rem',
                    }} src="https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80" alt="" />
                <img
                    style={{
                        width: `${size.width <= 768 ? '23rem' : '19rem'}`,
                        height: `${size.width <= 768 ? '15rem' : '26rem'}`,
                        objectFit: 'cover',
                        borderRadius: '10rem',
                        marginTop: '-9rem'
                    }}
                    className='opacity-60 '

                    src="https://images.unsplash.com/photo-1558706277-49d87eec0e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                <img style={{
                    width: `${size.width <= 768 ? '20rem' : '20rem'}`,
                    height: `${size.width <= 768 ? '12rem' : '20rem'}`,
                    objectFit: 'cover',
                    borderRadius: '3rem',
                }}
                    className='opacity-60 '
                    src="https://images.unsplash.com/photo-1505184026162-810a44bd2bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGNvdXBsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" />
                <div className='absolute opacity-100 z-50'>
                    <p className='text-white text-center text-sm mb-10'>THE UP-AND-COMERS</p>
                    <h3 className="text-2xl text-white text-center px-10">Join 9 million people who&lsquo;ve invested over</h3>
                    <h1 className="text-white text-4xl md:text-8xl text-center w-full">
                        <CountUp end={1000000000} duration={2} prefix="$" separator="," />
                    </h1>
                </div>
            </div>
        </div>
    )
}
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = React.useState<any>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
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