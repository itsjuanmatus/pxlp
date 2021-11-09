import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";


export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

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

  const titles = [
    'Direct Deposit', 'Check Deposit', 'Check Sending', 'Free Transfers'
  ]

  return (
    <div className='grid '>
      <h2 className="text-white text-2xl md:text-4xl m-auto md:mb-6" >All-digital banking
      </h2>
      <div className='hidden md:inline-flex space-x-6 m-auto py-5 self-center items-center'>

        {titles && titles.map((e: any) => (
          <>
          {titles.indexOf(e) >  0 ? <hr className='border border-truegray-700 w-6' /> : ''}
          <button key={e} type="button"
            onClick={() => {
              updateIndex(titles.indexOf(e));
            }}
            className={`text-gray-300 cursor-pointer ${titles.indexOf(e) === activeIndex ? 'text-green-600' : ''}`}>
            {e}
            
          </button>
          
          </>
        ))}
      </div>

      <div className="md:hidden flex items-center w-full justify-center space-x-10 mt-5">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full border border-gray-500 p-3 stroke-current text-white hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        {titles && <p className="text-green-600 text-xl">{titles[activeIndex]}</p>}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full border border-gray-500 p-3 stroke-current text-white hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      <div
        {...handlers}
        className="carousel-2 grid place-content-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >



        <div className="hidden absolute md:flex justify-between w-full z-50 px-10 self-center ">
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full border border-gray-500 p-3 stroke-current text-white hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full border border-gray-500 p-3 stroke-current text-white hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className='banner'>
          <div
            className="inner whitespace-nowrap"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>



      </div>
    </div>
  );
};

export default Carousel;
