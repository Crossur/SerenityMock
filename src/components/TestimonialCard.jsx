import { IoPersonCircleSharp } from "react-icons/io5";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const TestimonialCard = ({testimonials,currentIndex,setCurrentIndex})=>{

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const { message, name } = testimonials[currentIndex];

  return(
  <>
  <div className="flex items-center justify-center px-4">
    <div className="h-[15rem] w-[37rem] rounded-xl text-white bg-[#1f1e1c] grid grid-cols-3 grid-rows-3 relative">

      <div className="absolute top-2 right-3 flex gap-2 pt-2 opacity-100 md:opacity-0 lg:opacity-100">
        {testimonials.map(((_,index) => { 
          return(<div className={`h-2 w-2 rounded-full ${index===currentIndex ? "bg-white" : "bg-stone-400"}`}/>)
        }))}
      </div>

      <div className="select-none row-start-1 col-start-1 col-span-3 flex items-center justify-center row-span-2 text-[clamp(1rem,6vw,1.7rem)] text-center px-4 translate-y-5">"{message}"</div>

      <div className="select-none row-start-3 col-start-1 col-span-3 flex items-center justify-center text-[clamp(1rem,6vw,1.7rem)]"><IoPersonCircleSharp className="text-[clamp(1rem,6vw,2.5rem)] -translate-x-2 text-white"/>{name}</div>

      <div className="flex items-center justify-center absolute bottom-5.5 right-7 transform translate hover:scale-90 duration-200">
        <FaArrowCircleRight onClick={goToNext} className="cursor-pointer text-[clamp(1rem,6vw,2.3rem)]"/>
      </div>

      <div className="flex items-center justify-center absolute bottom-5.5 left-7 transform translate hover:scale-90 duration-200">
        <FaArrowCircleLeft onClick={goToPrevious} className="cursor-pointer text-[clamp(1rem,6vw,2.3rem)]"/>
      </div>

    </div>
  </div>
  </>
  )

}

export default TestimonialCard;