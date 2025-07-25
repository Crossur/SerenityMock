import React from "react";
import { useState } from "react";

const BenefitsCard = ({ imageUrl, header, text}) => {
  const [flipped, setFlipped] = useState(false);

return (
  <div style={{ perspective: "1500px" }} className={`px-4 w-full h-[22rem] cursor-pointer group`} onClick={() => setFlipped(prev => !prev)}>
    <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-xl hover:scale-98 ${flipped ? "rotate-y-180" : ""}`}>
      
      {/* Front Side */}
      <div className="absolute inset-0 backface-hidden rounded-xl shadow-xl hover:shadow-2xl transition group">
        <img src={imageUrl} className="h-full w-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-300" alt={header} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-center font-bold">
            <span className="text-[clamp(1.4rem,5vw,2.2rem)] inline-block bg-black/40 px-4 py-2 rounded">{header}</span>
          </h2>
        </div>
        <div className="absolute bottom-3 right-3 text-white text-xs bg-black/40 px-2 py-1 rounded shadow pulse-opacity">Click me!</div>
      </div>

      {/* Back Side */}
      <div className="bg-[#1f1e1c] absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-xl shadow-xl">
        <p className="text-center text-stone-200 text-[clamp(1.6rem,5vw,2rem)] font-medium leading-snug">{text}</p>
      </div>
    </div>
  </div>
);
};


export default BenefitsCard