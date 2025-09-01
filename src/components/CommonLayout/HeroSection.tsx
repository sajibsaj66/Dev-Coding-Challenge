import { CirclePlay } from "lucide-react";
import CardImg from "@/assets/Icons/card.png";
import { GradualSpacing } from "../animation/GradualSpacing";

const HeroSection = () => {
  return (
    <section className="bg-[#53389E] text-white text-start md:text-center px-4">
      <div className="pb-12 pt-20 md:py-25">
        {/* Small tagline */}
        <p className="text-xs md:text-sm tracking-wide mb-2">
          Super. Simple. Banking.
        </p>

        {/* Heading */}
        <h1>
          <GradualSpacing
          className="text-3xl sm:text-4xl md:text-[72px] font-semibold  leading-tight tracking-tighter"
            text={"Banking technology"}
          />
          <GradualSpacing
          className="text-3xl sm:text-4xl md:text-[72px] font-semibold  leading-tight tracking-tighter"
            text={"that has your back."}
          />
        </h1>

        {/* Subtext */}
        <p className="text-[16px] md:text-[16px] text-gray-200 mt-4  mx-auto">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-10 md:mt-15">
          <button className="order-2 md:order-1 px-6 py-3 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-x-2">
            <CirclePlay size={18} />
            Demo
          </button>
          <button className="order-1 md:order-2 px-6 py-3 font-semibold rounded-lg bg-[#7F56D9]">
            Sign up
          </button>
        </div>
      </div>

      {/* Card Image */}
      <div className="pb-0 -mx-10">
        <img
          src={CardImg}
          alt="Cards"
          className="mx-auto w-full max-w-1500"
        />
      </div>
    </section>
  );
};

export default HeroSection;
