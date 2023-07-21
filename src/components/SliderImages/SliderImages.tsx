import React, { useEffect, useState } from 'react';
import bannerPhones from '/_new/img/Banner/banner-phones.png'
import bannerAccessories from '/_new/img/Banner/banner-accessories.png'
import bannerTablets from '/_new/img/Banner/banner-tablets.png'
const banners = [
  bannerPhones,
  bannerAccessories,
  bannerTablets,
]



export const SliderImages: React.FC = () => {
  const [countet, setCounter] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const hadleNextClick = () => {
    switch (countet) {
      case 2:
        setCounter(0)
        break;

      default:
        setCounter(countet + 1)
        break;  
    }
  }

  const handlePrevClick = () => {
    switch (countet) {
      case 0:
        setCounter(2)
        break;

      default:
        setCounter(countet - 1)
        break;  
    }
  }

  useEffect(() => {
    setShowAnimation(true);

    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countet]);

  return (
    <div className="">
      <div className=" relative">
      <div className="flex justify-start items-center gap-4">
        <div 
        className="w-8 h-[400px] rotate-180 border border-gray-400 relative cursor-pointer"
        onClick={handlePrevClick}
        >
          <div 
          className="absolute top-[50%] left-[20%] transform scaleX-[-1] "
          >
            <img
              className=""
              src="/Chevron Right.svg"
              alt="arrow-right"
            />
          </div>

        </div>
        <img 
          src={banners[countet]} 
          alt="Banner" 
          className={`w-[1040px] h-[400px] ${
            showAnimation ? 'fade-in-animation' : ''
          }`}
        />
        <div 
        className="w-8 h-[400px] rotate-180 border border-gray-400 relative cursor-pointer"
        onClick={hadleNextClick}
        >
          <img
            className="absolute top-[50%] left-[20%]"
            src="/Chevron Right.svg"
            alt="arrow-right"
          />
        </div>
      </div>

      <div className="w-20 h-6 relative left-[50%]">
        <div className="w-6 h-6 left-0 top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div 
            className={`w-3.5 h-1 left-[5px] top-[10px] absolute 
              ${countet === 0 ? 'bg-zinc-800' : 'bg-zinc-200'}
            `}/>
        </div>
        <div className="w-6 h-6 left-[28px] top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div 
            className={`w-3.5 h-1 left-[5px] top-[10px] absolute 
              ${countet === 1 ? 'bg-zinc-800' : 'bg-zinc-200'}
            `} />
        </div>
        <div className="w-6 h-6 left-[56px] top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div 
            className={`w-3.5 h-1 left-[5px] top-[10px] absolute 
              ${countet === 2 ? 'bg-zinc-800' : 'bg-zinc-200'}
            `} />
        </div>
      </div>
    </div>
    </div>
    
  )
}
