import Link from "next/link";
import React from "react";

function Solutions() {
  const solutions = [
    {
      name: "Consulting Services",
      link: "services/consulting",
    },
    {
      name: "Marketing Solutions",
      link: "services/marketing",
    },
    {
      name: "Staffing Support",
      link: "services/staffing",
    },
    {
      name: "Auxiliary Services",
      link: "services/auxiliary-services",
    },
    {
      name: "Global Business Transitions",
      link: "services/business-transition",
    },
    {
      name: "AI Consulting Services",
      link: "services/ai-services",
    },
  ];
  return (
    <section className="pt-10 px-4 md:p-32 md:pt-0 flex flex-col gap-8 md:gap-14 relative z-20 bg-black text-white">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-4xl font-semibold leading-10">Our Solutions</h3>
        <h4 className="mx-auto w-[308px] md:w-full">
          Tailored AI Bento Box Business Package for Our Clients
        </h4>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6">
        {solutions.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className="border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 transition-colors hover:bg-grey w-[300px] md:w-auto"
          >
            <p className="text-lg md:text-2xl font-semibold text-center">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
