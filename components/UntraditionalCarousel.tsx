import { title } from "process";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useWindowSize } from "../services/windowSize";

export const CarouselItem = ({ children, width }: any) => {
    return (
        <div className="inline-flex justify-center items-center" style={{ width: width, height: '56rem' }}>
            {children}
        </div>
    );
};

const UntraditionalCarousel = ({ children, titles = [] }: any) => {




    //framer-motion
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, -400], [0, 0]);
    const y2 = useTransform(scrollY, [0, -500], [-100, 0]);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1 },
        hidden: {
            opacity: 0.5,
        }
    };

    //indexes logic
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    //window size
    const size = useWindowSize();


    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    // autoplay
    /** useEffect(() => {
      const interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1);
        }
      }, 3000);
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }); **/

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });


    return (
        <ReactScrollWheelHandler
            upHandler={(e) => updateIndex(activeIndex - 1)}
            downHandler={(e) => updateIndex(activeIndex + 1)}
            // @ts-ignore
            wheelConfig={[7, 100, 0.5]}
        >
            <div className='grid'>
                <div className="md:hidden flex items-center w-full justify-center space-x-10 mt-5">
                </div>

                <div
                    {...handlers}
                    className="carousel-2 grid place-content-center"
                    style={{ top: '96rem' }}

                >
                    <div className='grid relative place-content-center place-items-center z-10'>
                        <div
                            className="inner whitespace-nowrap z-10"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {React.Children.map(children, (child, index) => {
                                return React.cloneElement(child, { width: "100%" });
                            })}
                        </div>
                        <div className='absolute grid md:grid-cols-3 place-items-end md:place-items-center md:place-content-center gap-y-56'>

                            <div className="rounded-full order-last md:order-none border border-gray-500 flex max-w-min z-50 p-10 py-16 self-end -mr-16 md:-mr-0 md:-mb-10 lg:-mb-0">
                                <button
                                    onClick={() => {
                                        updateIndex(activeIndex - 1);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 p-3 stroke-current text-white hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => {
                                        updateIndex(activeIndex + 1);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  p-3 stroke-current text-white hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>

                            <motion.img
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{ duration: 2, ease: 'easeOut' }}
                                ref={ref}
                                className='mt-16 -mb-36 md:-mb-0 z-0 -mr-44 md:-mr-0'
                                style={{
                                    minWidth: `${size.width <= 768 ? '24rem' : '22rem'}`,
                                    height: `${size.width <= 768 ? '30rem' : '40rem'}`,
                                    objectFit: 'cover',
                                    backgroundColor: 'rgba(0, 0, 0, .6)',
                                    borderRadius: '100rem',
                                    y: y2,
                                }} src="https://images.unsplash.com/photo-1591054333829-3a3ce5d57fca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80" alt=""
                            />
                            <div className="hidden transform self-center -rotate-90 md:inline-flex items-center space-x-5">
                                <p className="text-white">1</p>
                                <div className="overflow-hidden h-1 text-xs flex rounded bg-truegray-500 opacity-75 w-32">
                                    <div style={{ width: `${((activeIndex + 1) / titles.length) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"></div>
                                </div>
                                <p className="text-white">{titles.length}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </ReactScrollWheelHandler>

    );
};

export default UntraditionalCarousel;


