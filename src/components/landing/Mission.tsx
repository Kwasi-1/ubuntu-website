import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <section className="lg:pt-24 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 md:px-10 2xl:px-3 md:py-12 bg-white">
      {/* Left - Logo / Brand */}
      <div className="hidden lg:block text-[#754C2A] text-left lg:w-1/2">
        <div className="border-l-4 md:border-l-8 border-[#754C2A] pl-4 md:pl-6 montserrat py-5">
          <h1 className="text-5xl md:text-6xl lg:text-[110px] font-light leading-[101%]">
            The
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-[110px] font-light leading-[101%]">
            Money
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-[110px] font-light leading-[101%]">
            Center
          </h1>
        </div>
      </div>

      {/* Right - Content */}
      <div className="lg:w-1/2 max-w-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
          Discover the mission &<br /> story behind our company
        </h2>
        <p className="text-[#010101]/70 text-xl lg:text-2xl leading-[150%] font-[300] mb-6">
          Ubuntu Capital Microfinance is a deposit-taking tier 2 micro finance
          company incorporated to provide financial services through an
          efficient and well-motivated workforce, state-of-the-art technology,
          and innovative, cutting-edge products that satisfy the financial needs
          of our customers.
        </p>
        <Link
          to="/about"
          className="text-[#225EA6] text-xl lg:text-2xl leading-[150%] font-[300] hover:underline inline-flex items-center"
        >
          About us <span className="ml-1">→</span>
        </Link>
      </div>
    </section>
  );
}
