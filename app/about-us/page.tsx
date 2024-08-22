import OurPartner from "@/components/about-us/our-partner";
import OurTeam from "@/components/about-us/our-team";
import sourceSansPro from "@/components/ui/sourceSansPro";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-12 px-4 py-8 md:px-8 lg:px-16">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Beyond Strategy. It&apos;s a Lifestyle.
        </h1>
        <p
          className={
            sourceSansPro.className +
            " text-sm md:text-base lg:text-lg leading-snug"
          }
        >
          We understand the demands of leading a successful business and offer a
          comprehensive suite of services that includes strategic guidance and
          lifestyle solutions. Our team works to refine your business strategy
          while providing access to exclusive lifestyle services supporting
          well-being and peak performance.
          <br />
          <br />
          Success is a Journey, Not a Destination. We&apos;re Here for Every
          Step. We are your one-stop shop for business consulting, seamlessly
          integrated with premium lifestyle services. We serve influential
          visionaries by crafting strategic solutions, unlocking their
          potential, and providing curated lifestyle experiences enhancing
          well-being and success.
        </p>
      </div>
    </div>
  );
};

export default page;
