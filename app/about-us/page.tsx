import sourceSansPro from "@/components/ui/sourceSansPro";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-12 px-8 py-20 lg:py-32 md:px-8 lg:px-16 bg-black/70 text-white">
      <div className="w-full md:w-3/4">
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

      {/* Our Team Section */}
      <div className="w-full md:w-3/4 text-center ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center flex-col items-center rounded-tl-lg rounded-br-lg border-2 border-white shadow-lg p-4">
            <img
              src="/img/teams/foto1.jpg"
              alt="Our Team"
              className="w-full sm:h-64 md:h-80 lg:h-80 object-cover rounded-tl-lg rounded-br-lg"
            />
            <p className="text-center text-white font-semibold text-lg">
              John Doe
            </p>
          </div>

          <div className="flex justify-center flex-col items-center rounded-tl-lg rounded-br-lg border-2 border-white shadow-lg p-4">
            <img
              src="/img/teams/foto2.jpg"
              alt="Our Team"
              className="w-full sm:h-64 md:h-80 lg:h-80 object-cover rounded-tl-lg rounded-br-lg"
            />
            <p className="text-center text-white font-semibold text-lg">
              Vannesa
            </p>
          </div>
          <div className="flex justify-center flex-col items-center rounded-tl-lg rounded-br-lg border-2 border-white shadow-lg p-4">
            <img
              src="/img/teams/foto3.jpg"
              alt="Our Team"
              className="w-full sm:h-64 md:h-80 lg:h-80 object-cover rounded-tl-lg rounded-br-lg"
            />
            <p className="text-center text-white font-semibold text-lg">
              Angelica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
