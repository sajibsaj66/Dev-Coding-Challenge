import images from "@/assets/images/Image.png";
import { Button } from "../ui/button";
import { GradualSpacing } from "../animation/GradualSpacing";

const CTA = () => {
  return (
    <section className=" md:py-5 px-4">
      <div className="container mx-auto">
        <div className="flex w-full flex-col lg:flex-row lg:items-center gap-3 lg:gap-16 overflow-hidden rounded-lg md:rounded-xl bg-[#53389E]">
          {/* Left Content */}
          <div className="flex-1 mx-auto space-y-5 p-6 sm:p-8 lg:px-10 text-left">
            <GradualSpacing
              wrapperClass="flex justify-start"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-[100%] tracking-tight"
              text="Give us a shot"
            />
            <p className="text-[#E9D7FE] max-w-xl mx-0 text-sm sm:text-base lg:text-lg">
              Join over 4,000+ startups already growing with Untitled.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-2">
              <Button className="w-full sm:w-auto bg-white text-black">Learn more</Button>
              <Button className="w-full sm:w-auto bg-[#7F56D9] hover:bg-[#6931d4]">
                Get started
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center mx-auto shrink-0 pb-0">
            <img
              className="w-full h-auto"
              src={images}
              alt="CTA illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
