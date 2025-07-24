import React,{useState} from "react";
import { FaSyringe } from "react-icons/fa";
const BreakdownCard = ({icon,frontText,backText}) => {

  const [flipped, setFlipped] = useState(false);

  return (
  <>
   <div style={{ perspective: "1500px" }} className={`cursor-pointer`} onClick={() => setFlipped(prev => !prev)}>
    <div className={`relative backface-hidden transition-transform duration-700 transform-style-preserve-3d rounded-xl hover:scale-95 px-4 ${flipped ? "rotate-x-180" : ""}`}>
      <div className="inset-0 h-[4rem] flex items-center justify-left px-7 gap-4 text-white rounded-xl bg-[#1f1e1c]">

        <span className="text-[clamp(1.5rem,6vw,2rem)]">{icon}</span>
        <span className="text-[clamp(1.5rem,6vw,2rem)]">{frontText}</span>

      </div>
      <div className="rotate-x-180 backface-hidden inset-0 absolute flex items-center justify-left rounded-xl bg-[#1f1e1c]">
        <span className="text-white text-[clamp(1.1rem,6vw,0.8rem)] text-center">{backText}</span>
      </div>
    </div>
  </div>
  </>
  )

}

export default BreakdownCard;