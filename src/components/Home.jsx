import React, { useState, useEffect, useRef } from "react";
import { FaSyringe } from 'react-icons/fa';
import { GiLips } from 'react-icons/gi';
import { FaPalette } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import logo from '../assets/images/logo.png'
import BenefitsCard from "./BenefitsCard";
import TestimonialCard from "./TestimonialCard";
import AwardCard from "./AwardCard";
import BreakdownCard from "./BreakdownCard";
import ResultsCard from "./ResultsCard";
import doctorPhoto from '../assets/images/doctorPhoto.jpg';
import medSpaPhoto from '../assets/images/medSpaPhoto.jpg';
import personalPlanPhoto from '../assets/images/personalPlanPhoto.jpg';
import results1 from '../assets/images/results1.jpg';
import results2 from '../assets/images/results2.jpg';
import results3 from'../assets/images/results3.jpg'
import number1Badge from '../assets/images/number1Badge.jpg';
import peopleBadge from '../assets/images/peopleBadge.jpg';

function importAll(r) {
  return r.keys().map(r);
}

const resultImages = importAll(
  require.context('../assets/images', false, /results\d+\.jpg$/)
);

const Home = () => {
  const breakdownRef = useRef(null);
  const benefitsRef = useRef(null);
  const testimonialsAwardsRef = useRef(null);
  const offerRef = useRef(null);
  const resultsRef = useRef(null);
  const [animateResults, setAnimateResults] = useState(false);
  const [animateOffer, setAnimateOffer] = useState(false);
  const [animateBreakdown, setAnimateBreakdown] = useState(false);
  const [animateBenefits, setAnimateBenefits] = useState(false);
  const [animateTestimonialsAwards, setAnimateTestimonialsAwards] = useState(false);
  const [currentIndexTest, setCurrentIndexTest] = useState(0);
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);

  const testimonials = [
    { name: "Olivia Martinez", message: "The staff at Serenity Medical Spa truly go above and beyond — I felt pampered from start to finish." },
    { name: "Ethan Brooks", message: "Professional, friendly, and effective treatments. My skin looks healthier than ever." },
    { name: "Chloe Nguyen", message: "I can’t recommend Serenity enough. The environment is relaxing and the results speak for themselves." },
    { name: "Liam Johnson", message: "Clean facilities and attentive care. The laser hair removal service was quick and painless." },
    { name: "Emma Davis", message: "Serenity gave me my confidence back with their amazing facial treatments. I’m hooked!" },
    { name: "Noah Clark", message: "From consultation to follow-up, everything was handled with such care and expertise." },
    { name: "Ava Wilson", message: "The best med spa experience I’ve ever had — knowledgeable staff and top-notch service." },
    { name: "James Lee", message: "My Botox results were natural and subtle. I felt comfortable throughout the entire process." },
    { name: "Sophia Turner", message: "I love how personalized every treatment felt. Serenity truly cares about their clients." },
    { name: "Mason Scott", message: "Efficient, friendly, and professional. I’ll definitely be returning for more treatments." }
  ];

  const photos = importAll(
    require.context('../assets/images', false, /results\d+\.jpg$/)
  );

  useEffect(() => {

  const offerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimateOffer(true);
        offerObserver.disconnect();
      }
    },
    { threshold: 0.4 }
  ); 

  const breakdownObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimateBreakdown(true);
        breakdownObserver.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  const benefitsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimateBenefits(true);
        benefitsObserver.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  const testimonialsAwardsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimateTestimonialsAwards(true);
        testimonialsAwardsObserver.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  const resultsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimateResults(true);
        resultsObserver.disconnect();
      }
    },
    { threshold: 0.4 }
  ); 

  if (offerRef.current) offerObserver.observe(offerRef.current);
  if (breakdownRef.current) breakdownObserver.observe(breakdownRef.current);
  if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);
  if (testimonialsAwardsRef.current) testimonialsAwardsObserver.observe(testimonialsAwardsRef.current);
  if (resultsRef.current) resultsObserver.observe(resultsRef.current);

  return () => {
    offerObserver.disconnect();
    breakdownObserver.disconnect();
    benefitsObserver.disconnect();
    testimonialsAwardsObserver.disconnect();
  };
  }, []);

  return (
    <>
      <div id="homeBg" className="font-Dm cursor-default place-items-center grid-cols-1 font-semibold place-items-center bg-[length:100%_100%] w-full grid -translate-y-38 h-[97vh] auto-rows-[70px]">
        <div className="flex items-center break-words text-[clamp(3.5rem,6vw,4rem)] justify-center flex-col row-start-4">
          <span style={{ animation: "flowLeft 1s forwards", opacity: 0 }} className="text-white">
            Refine
          </span>
          <span style={{ animation: "flowRight 1s ease 0.8s forwards", opacity: 0 }} className="text-white">
            Embrace
          </span>
          <span style={{ animation: "flowLeft 1s ease 1.6s forwards", opacity: 0 }} className="text-white font-bold">
            Discover
          </span>
        </div>

        <div style={{ animation: "flowDown 1s ease 2.4s forwards", opacity: 0 }} className="-translate-y-10 md:-translate-y-0 row-start-8 text-white font-black">
          <span className="text-[clamp(6.5rem,12vw,15rem)]">Serenity</span>
        </div>
      </div>

      {/* Special Offer Section */}

      <div className="flex items-center justify-center pb-17 px-4 pt-17">
        <div style={animateOffer ? { animation: "flowDown 1s forwards" } : { opacity: 0 }}>
          <div ref={offerRef} className="relative flex-col h-auto bg-[#1f1e1c] ping-border -top-30 inline-flex rounded-xl items-top py-4 px-4 justify-center font-Dm">
            <span className="text-white text-[clamp(1rem,6vw,2.7rem)] text-center pb-4">Limited Time Offer!</span>
              <div className="flex-col flex items-center justify-center text-white text-[clamp(0.8rem,6vw,1.4rem)] text-center">
                <span>$1,999 limited-time pricing</span>
                <span>3 syringes of premium filler</span>
                <span>Custom enhancement of cheeks, lips, and jawline</span>
                <span>Artistry-focused, not overfilled</span>
                <span>Results: harmonized, elevated facial structure</span>
                <br></br>
                <button onClick={()=>{location.assign("https://calendly.com/luisacruz-dev")}} className="border-white border rounded-xl inline-flex items-center justify-center text-[clamp(1rem,6vw,1.9rem)] gap-2 px-3 cursor-pointer transform translate stop-pulse pulse-scale"><IoMail className=""/>Book Now!</button>
              </div>
            </div>
        </div>
      </div>

      {/* Breakdown Section */}
      <div ref={breakdownRef} className="flex flex-col items-center justify-center relative -top-35 font-Dm" style={animateBreakdown ? { animation: "flowUp 1s forwards" } : { opacity: 0 }}>

        <span className="text-stone-200 text-[4.2rem] font-semibold font-Dm">Services</span>

        <div className="flex flex-col gap-1">
          <BreakdownCard
            icon={<FaSyringe/>}
            frontText="Premium Facial Filler Treatment"
            backText="Restore volume and smooth contours with expertly placed dermal filler for a naturally refreshed, elevated look."
          />
          <BreakdownCard
            icon={<GiLips/>}
            frontText="Custom Lip, Cheek & Jawline Contouring"
            backText="Personalized sculpting of your facial features to enhance symmetry, definition, and overall balance."
          />
          <BreakdownCard
            icon={<FaPalette/>}
            frontText="Artistic Enhancement Consultation"
            backText="Focused on refined, subtle results — never overfilled, always guided by aesthetics and precision."
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefitsSection" ref={benefitsRef} className="w-full grid relative -top-38 pt-7 font-Dm" style={animateBenefits ? { animation: "flowLeft 1s forwards" } : { opacity: 0 }}>
        <span className="flex items-center justify-center text-[3.9rem] font-semibold text-white pb-5">
          Why Serenity?
        </span>

        <div style={animateBenefits ? { animation: "flowLeft 1s forwards" } : { opacity: 0 }} className="flex flex-col items-center justify-center pt-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitsCard
            imageUrl={doctorPhoto}
            header="Expert Medical Care"
            text="Personalized treatments from licensed professionals to ensure your safety and best results."
            order={1}
          />
          <BenefitsCard
            imageUrl={medSpaPhoto}
            header="Relaxing & Luxurious Atmosphere"
            text="Our spa is designed to soothe your body and mind, offering a tranquil escape from daily stress."
            order={2}
          />
          <BenefitsCard
            imageUrl={personalPlanPhoto}
            header="Tailored Treatment Plans"
            text="Customized sessions created just for you, targeting your unique skin and wellness goals."
            order={3}
          />
        </div>
      </div>

      {/* Testimonials Section and Awards Section*/}
      <div id="testimonialsAwardsSection" className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-4 -top-30 relative w-full pt-15 font-Dm gap-y-8 md:gap-y-0" style={animateTestimonialsAwards ? { animation: "flowRight 1s forwards" } : { opacity: 0 }}>
        <div id="testimonialsAwardsSection" ref={testimonialsAwardsRef} className="col-start-1 md:col-start-2 col-span-2">
          {/* Testimonial Card */}
          <TestimonialCard
            testimonials={testimonials}
            currentIndex={currentIndexTest}
            setCurrentIndex={setCurrentIndexTest}
          />
        </div>

        {/* Award Cards */}
        <div className="row-start-2 md:row-start-1 flex items-center justify-center md:justify-end">
          <AwardCard
            image={number1Badge}
            awardText="Voted #1 Med Spa in State"
            size="w-[clamp(10rem,6vw,3rem)]" 
          />
        </div>
        <div className="col-start-1 row-start-3 md:row-start-1 md:col-start-4 md:-translate-x-20">
          <AwardCard
            image={peopleBadge}
            awardText="Proudly server over 10,000 happy customers"
            size="w-[clamp(8rem,6vw,3rem)] -translate-y-2 md:-translate-y-0"
          />
        </div>
      </div>

      {/* Results Section */}

        <div style={animateResults ? { animation: "flowLeft 1s forwards" } : { opacity: 0 }} ref={resultsRef} className="relative w-full inline-flex -top-30 flex-col items-center justify-center font-Dm">
          <span className="text-white text-[4rem] font-semibold">Results</span>
          <div className="flex items-center justify-center gap-6">
            <ResultsCard 
              photos={photos}
              currentIndex={currentIndexPhoto}
              setCurrentIndex={setCurrentIndexPhoto}
            />
          </div>
        </div>

       {/* End Section */}

        <div className="w-full h-[40rem] bg-[#1f1e1c] flex items-center justify-center flex-col font-Dm">

          <img src={logo} className="h-[35rem]"></img>

          <span className="text-white text-[clamp(1rem,6vw,2rem)] text-center font-semibold -translate-y-20">California</span>
          <span className="text-white text-[clamp(1rem,6vw,1.4rem)] text-center -translate-y-20">1429 Hollow Pine Way</span>
          <span className="text-white text-[clamp(1rem,6vw,1.4rem)] text-center -translate-y-20">Brookhaven, CA 90231</span>

          <a href="mailto:customersupport@serenity.com" className="cursor-pointer transform hover:scale-95 duration-200 text-white text-[clamp(1rem,6vw,1.4rem)] text-center md:-translate-y-35 -translate-y-4 md:translate-x-170">customersupport@serenity.com</a>

          <span className="text-white text-[clamp(1rem,6vw,1.4rem)] text-center md:-translate-y-44 -translate-y-23 md:-translate-x-170">(123)-456-789</span>

        </div>

    </>

  );
};

export default Home;
