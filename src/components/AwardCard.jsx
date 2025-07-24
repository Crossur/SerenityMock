import React from "react";

const AwardCard = ({image,awardText,size}) =>{

  return(
    <>
    <div className="flex items-center justify-center flex-col select-none">
      <img src={image} className={`${size} py-4`}></img>
      <span className="text-[clamp(1rem,6vw,1.7rem)] text-center text-stone-200">{awardText}</span>
    </div>
    </>
  )

} 

export default AwardCard;