import {
    motion,
    useTransform, useViewportScroll
} from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '../services/windowSize';

export default function AnimatedNumber() {
    const size = useWindowSize();

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, 100]);
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
        <div className="min-h-screen bg-truegray-900 flex-col w-full py-96 mt-96">
            <div className="relative grid grid-cols-2 gap-y-36 gap-x-5 py-10 px-5 place-items-center">
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    style={{ y: y1, }}
                    ref={ref}
                    variants={variants}
                    className='items-center opacity-60 '
                >
                    <img
                        style={{
                            width: `${size.width <= 768 ? '20rem' : '20rem'}`,
                            height: `${size.width <= 768 ? '10rem' : '13rem'}`,
                            objectFit: 'cover',
                            borderRadius: '4rem',
                        }}
                        src='https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80'
                        alt="Woman with coffee" />
                </motion.div>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    style={{ y: y2, }}
                    ref={ref}
                    variants={variants}
                    className='opacity-60'
                >
                    <img

                        style={{
                            width: `${size.width <= 768 ? '20rem' : '20rem'}`,
                            height: `${size.width <= 768 ? '20rem' : '29rem'}`,
                            objectFit: 'cover',
                            borderRadius: '3rem',
                        }} src="https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80" alt="" />
                </motion.div>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    style={{ y: y1, }}
                    ref={ref}
                    variants={variants}
                    className='opacity-60'
                >
                    <img
                        style={{
                            width: `${size.width <= 768 ? '23rem' : '19rem'}`,
                            height: `${size.width <= 768 ? '15rem' : '26rem'}`,
                            objectFit: 'cover',
                            borderRadius: '10rem',
                            marginTop: '-9rem'
                        }}
                        src="https://images.unsplash.com/photo-1558706277-49d87eec0e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                </motion.div>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    style={{ y: y2, }}
                    ref={ref}
                    variants={variants}
                    className='opacity-60'
                >
                    <img style={{
                        width: `${size.width <= 768 ? '20rem' : '20rem'}`,
                        height: `${size.width <= 768 ? '12rem' : '20rem'}`,
                        objectFit: 'cover',
                        borderRadius: '3rem',
                    }}
                        src="https://images.unsplash.com/photo-1505184026162-810a44bd2bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGNvdXBsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" />
                </motion.div>
                <div className='absolute opacity-100 z-50'>
                    <p className='text-white text-center text-sm mb-10'>THE UP-AND-COMERS</p>
                    <h3 className="text-2xl text-white text-center px-10">Join 9 million people who&lsquo;ve invested over</h3>
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        ref={ref}
                        variants={variants}
                    >                    <h1 className="text-white text-4xl md:text-8xl text-center w-full">

                            {inView ? <CountUp end={1000000000} duration={2} prefix="$" separator="," />
                                : <></>}
                        </h1>

                    </motion.div>
                </div>
            </div>
            <div className="mb-96">

            </div>
        </div>
    )
}
