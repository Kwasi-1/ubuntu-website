import React from "react";
import hero from "@/assets/images/loans-hero.png";
import noise from "@/assets/images/loans-noise.png";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

interface LoansHeroProps {
  type: "loan" | "investment";
}

const LoansHero: React.FC<LoansHeroProps> = ({ type }) => {
  const isLoan = type === "loan";

  const heading = isLoan
    ? "Need Cash Fast? Try Our Digital Loans!"
    : "Secure Your Future with Smart Investments";

  const subText = isLoan
    ? "Get instant access to flexible micro loans—anytime, anywhere. No paperwork. No queues. Just apply and get funded in minutes."
    : "Choose from a range of investment plans tailored to grow your money. Whether short or long-term, we help you make your money work for you.";

  return (
    <section className="bg-white py-16 pt-32 container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl lg:max-w-[90%] gap-y-12 gap-x-6 ">
        {/* Left Image */}
        <div className="relative w-full h-full lg:h-full md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Happy woman with laptop and cash"
            className="w-full rounded-md h-full object-cover"
          />
          <img
            src={noise}
            alt="noise"
            className="absolute inset-0 w-full h-full opacity-10 z-0"
          />
          <div className="absolute bottom-0 left-0 right-0 h-6 lg:h-10 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-6 lg:h-10 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-0 w-10 md:w-16 xl:w-28 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-10 md:w-16 xl:w-28 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[100%]">
            {heading}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-[150%]">
            {subText}
          </p>
          {/* Apply Button */}
          <div className="w-full mt-5 md:mt-10">
            <Button
              onClick={() =>
                window.open(
                  "https://digital.foundry-platform.com/ubuntu-capital",
                  "_blank"
                )
              }
              className="border border-[#225EA6] bg-[#225EA6] text-base p-6 rounded-full"
            >
              Apply Now
              <Icon
                icon="material-symbols-light:arrow-right-alt-rounded"
                fontSize={30}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoansHero;
