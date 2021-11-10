import React, { useState, useEffect, useRef } from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';



export default function DoubleImage() {
    const size = useWindowSize();

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 400], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [-100, 0]);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1 },
        hidden: {
            opacity: 0,
        }
    };

    return (
        <div className="bg-lime-300 min-h-screen grid w-full my-96" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3264&q=80")', objectFit: 'cover' }}>
            <div className="grid grid-cols-2 relative place-items-center py-16 px-16 min-h-screen" >
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    style={{ y: y1, }}
                    ref={ref}
                    variants={variants}

                    className="hidden md:block w-96 h-96 lg:mr-36 lg:mt-10 object-cover col-span-2 justify-self-end"
                >
                    <img style={{ borderRadius: '3rem' }} src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80" alt="" />
                </motion.div>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    ref={ref}
                    className="hidden md:block"
                    style={{ y: y2 }}

                >
                    <img className='' src="./charizard.png" alt="" />
                </motion.div>

                <div className='absolute grid gap-y-5 w-full place-items-center place-content-center'>
                    <p className='text-white text-xl'>Join the movement</p>
                    <h1 className='text-white text-4xl md:text-5xl  max-w-xl text-center'>We&lsquo;re changing the way Americans save & invest everyday </h1>
                    <button className='text-black bg-white px-10 py-3 rounded-3xl'>
                        Sign up today
                    </button>
                    {size.width < 768 ? <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 3, ease: 'easeOut' }}
                        style={{ y: y2, }}
                    ref={ref}
                        className="md:hidden w-80"
                    >
                        <img className='' src="./charizard.png" alt="" />
                    </motion.div> : <></>}

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