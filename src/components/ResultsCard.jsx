import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const ResultsCard = ({photos,currentIndex,setCurrentIndex})=>{

  console.log(photos);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + photos.length) % photos.length
    );
  };

  const photo = photos[currentIndex];

  console.log(currentIndex,'currentIndex');

  console.log(photo)

  return(
  <>
  <div className="flex items-center justify-center px-4 results-4 select-none">
    <div className="h-[24rem] md:h-[35rem] w-[24rem] md:w-[40rem] rounded-xl text-white bg-[#1f1e1c] relative flex items-center justify-center overflow-hidden px-13">

      <div className="absolute inline-block top-2 right-3 flex pt-2 opacity-100 md:opacity-0 lg:opacity-100">
        {photos.map(((_,index) => { 
          console.log(index,'index');
          console.log(currentIndex,'currentIndex')
          return(<div className={`h-2 w-2 rounded-full ${index===currentIndex ? "bg-white" : "bg-stone-400"}`}/>)
        }))}
      </div>

        <img src={photo} className="select-none overflow-hidden rounded-2xl"></img>

      <div className="flex items-center justify-center absolute bottom-5.5 right-2 transform translate hover:scale-90 duration-200">
        <FaArrowCircleRight onClick={goToNext} className="cursor-pointer text-[clamp(1rem,6vw,2.3rem)]"/>
      </div>

      <div className="flex items-center justify-center absolute bottom-5.5 left-2 transform translate hover:scale-90 duration-200">
        <FaArrowCircleLeft onClick={goToPrevious} className="cursor-pointer text-[clamp(1rem,6vw,2.3rem)]"/>
      </div>

    </div>
  </div>
  </>
  )

}

export default ResultsCard;