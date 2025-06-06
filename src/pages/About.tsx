import { Icon } from "@iconify/react/dist/iconify.js";
import CEO from "@/assets/images/CEO.jpg";
import { Link } from "react-router-dom";
// import BoardOfDirectors from "@/components/about/BoardOfDirectors";

const AboutUs = () => {
  const boardMembers = [
    { name: "Micheal Nana Sarfo", img: CEO },
    { name: "Kwabena Ayirebi", img: CEO },
    { name: "Miriam W Mahamah", img: CEO },
    { name: "Amy K. Binneh", img: CEO },
    { name: "Kwadwo Boateng Adjei", img: CEO },
  ];

  const visibleMembers = boardMembers.length;
  const fullRows = Math.floor(visibleMembers / 3) * 3;
  const normalMembers = boardMembers.slice(0, fullRows);
  const remainingMembers = boardMembers.slice(fullRows);

  return (
    <section className="bg-white text-gray-800 pt-20 ">
      <div className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Intro Section */}
          <div className="text-center max-w-4xl mx-auto pt-16">
            <h2 className="text-[#225EA6] font-semibold text-sm uppercase tracking-wider mb-3">
              About Ubuntu Capital
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empowering Growth with Trust, Respect & Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ubuntu Capital Microfinance Limited is a tier 2 deposit-taking
              institution established in 2014 and began operations in 2015. Our
              focus is to provide timely financial solutions and business
              support through innovation, technology, and a highly motivated
              team. We strive to help individuals and businesses grow
              sustainably within dynamic market conditions.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 text-center">
            <div className=" md:p-8 md:border-r">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed">
                To become the preferred money transmission enabler bridging the
                gap between the banked and unbanked, and the go-to microfinance
                institution in the industry.
              </p>
            </div>
            <div className=" md:p-8 lg:border-r">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed">
                To be the best microfinance company in Ghana that meets
                international standards in profitability, corporate governance,
                and stakeholder value.
              </p>
            </div>

            {/* Objectives Section */}
            {/* <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6] text-left">
                Our Objectives
              </h3>
              <ul className="list-disc list-inside space-y-4 text-gray-600 text-lg md:text-[19px] leading-relaxed max-w-3xl mx-auto">
                <li>
                  To provide financial support to individuals and micro, small,
                  and medium enterprises (MSMEs).
                </li>
                <li>
                  To leverage technology to improve operational efficiency.
                </li>
                <li>
                  To delight customers by exceeding their expectations and
                  becoming their number one financial partner.
                </li>
              </ul>
            </div> */}

            {/* Compliance Section */}
            <div className="max-w-4xl mx-auto md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Compliance & Integrity
              </h3>
              <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed">
                Ubuntu Capital complies fully with the Bank of Ghana's
                regulations and other statutory guidelines. We uphold ethical
                standards and operate with integrity, respecting all legal
                frameworks guiding financial services in Ghana.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-[#225EA6]">
              Our Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["Respect", "Trust", "Excellence"].map((value) => (
                <div
                  key={value}
                  className="bg-blue-50 text-[#225EA6] px-6 py-4 rounded-xl shadow-sm text-lg font-medium"
                >
                  {value}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      {/* Our Values */}
      <section className="bg-[#F5F8FA] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-[#225EA6]">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Respect",
                description:
                  "We treat every individual with dignity and fairness, valuing the diversity of our clients and their unique financial needs.",
                icon: "material-symbols:diversity-1",
              },
              {
                title: "Trust",
                description:
                  "We build lasting relationships through honesty, transparency, and reliability in every financial interaction.",
                icon: "mdi:handshake-outline",
              },
              {
                title: "Excellence",
                description:
                  "We strive for superior service delivery and innovation, ensuring we exceed expectations and empower sustainable growth.",
                icon: "la:award",
              },
            ].map((value, index) => (
              <div key={index} className=" p-6">
                <Icon
                  icon={value.icon}
                  className="text-4xl lg:text-5xl mx-auto mb-4 text-[#225EA6]"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#225EA6]">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-[#225EA6]">
            Meet Our Board of Directors
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {normalMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col h-60 items-center text-center shadow-lg rounded-xl p-6 bg-[#F9FBFD] hover:shadow-xl transition duration-300"
              >
                {/* <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#225EA6]"
                  style={{ filter: "brightness(0.8)" }}
                /> */}
                <h3 className="text-lg font-semibold text-[#225EA6] mt-auto">
                  {member.name}
                </h3>
              </div>
            ))}

            {remainingMembers.length > 0 && (
            <div className="lg:col-span-3 flex flex-wrap justify-center gap-12">
              {remainingMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col h-60 items-center text-center shadow-lg rounded-xl p-6 bg-[#F9FBFD] hover:shadow-xl transition duration-300 w-full max-w-[350px]"
                >
                  {/* <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#225EA6]"
                  style={{ filter: "brightness(0.8)" }}
                /> */}
                  <h3 className="text-lg font-semibold text-[#225EA6] mt-auto">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
             )}
          </div>
        </div>
      </section>

      {/* <BoardOfDirectors /> */}

      {/* Call to Action */}
      <section className="bg-[#225EA6] text-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center px-5">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Take Your Financial Future to the Next Level?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Whether you're a growing business or an individual seeking financial
            support, Ubuntu Capital is here to help you thrive. Let’s build a
            better tomorrow—together.
          </p>
          <Link
            to="/support"
            className="inline-block bg-white text-[#225EA6] px-6 py-3 rounded-full font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
