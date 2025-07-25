import React,{useState} from "react";
import { FaSyringe } from "react-icons/fa";
const BreakdownCard = ({icon,frontText,backText}) => {

  const [flipped, setFlipped] = useState(false);

  return (
  <>
   <div style={{ perspective: "1500px" }} className={`cursor-pointer hover:scale-95 duration-400`} onClick={() => setFlipped(prev => !prev)}>
    <div className={`backface-hidden transition transform duration-700 transform-style-preserve-3d rounded-xl ${flipped ? "pointer-events-none rotate-x-180" : ""}`}>

      {/* Front Side */}
      <div className="absolute inset-0 h-[4.6rem] flex items-center justify-left text-white rounded-xl bg-[#1f1e1c]">

        <span className="text-[clamp(2rem,6vw,2rem)] translate-x-4 sm:translate-x-3">{icon}</span>
        <span className="text-[clamp(1.7rem,6vw,2rem)] text-center sm:text-left sm:translate-x-6 -translate-x-2">{frontText}</span>

      </div>
      {/* Back Side */}
      <div className="rotate-x-180 backface-hidden inset-0 px-7 flex items-center transition transform justify-left rounded-xl bg-[#1f1e1c] h-[4.6rem]">
        <span className="text-white text-[clamp(1.1rem,6vw,0.8rem)] text-center">{backText}</span>
      </div>
    </div>
  </div>
  </>
  )

}

export default BreakdownCard;