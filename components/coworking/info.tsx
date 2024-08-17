import React from "react";
import sourceSansPro from "@/components/ui/sourceSansPro";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 relative z-10">
      <div className='hidden md:block absolute -z-10 h-[150%] w-auto aspect-square -bottom-3/4 right-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-right-2/3 before:top-1/2 before:-translate-y-1/4'></div>
      <div className="flex-1 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 md:p-6 lg:p-8">
        <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4">
          How IURIS Coworking is Different from Others?
        </h2>
        <ul
          className={`${sourceSansPro.className} text-sm md:text-base lg:text-lg leading-snug mx-4 md:mx-6 lg:mx-8`}
        >
          <li className="list-disc">Larger spacious offices</li>
          <li className="list-disc">High end executive hub community</li>
          <li className="list-disc">High level floors</li>
          <li className="list-disc">Large ceilings</li>
          <li className="list-disc">Reasonable pricing</li>
          <li className="list-disc">
            Modern luxury aesthetic with customizable options
          </li>
          <li className="list-disc">High end prime locations</li>
          <li className="list-disc">
            In office lounge/restaurant/bar/cigar room
          </li>
          <li className="list-disc">Modular office spaces</li>
          <li className="list-disc">
            Large virtual office membership solutions available
          </li>
        </ul>
      </div>
      <div className="flex-1 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 md:p-6 lg:p-8">
        <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4">
          Exclusive Community and Networking
        </h2>
        <p
          className={
            sourceSansPro.className +
            " text-sm md:text-base lg:text-lg text-center"
          }
        >
          In addition to the workspace, we offer an exclusive community of
          high-end professionals and entrepreneurs. Our space hosts a variety of
          exclusive events, workshops, and networking opportunities to help you
          connect and collaborate with like-minded individuals in your industry.
        </p>
      </div>
      <div className="flex-1 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 md:p-6 lg:p-8">
        <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4">
          Amenities
        </h2>
        <p
          className={
            sourceSansPro.className + " text-sm md:text-base lg:text-lg"
          }
        >
          At IURIS Coworking Space, we provide exceptional amenities and
          services to cater to your every need. These include:
        </p>
        <ul
          className={
            sourceSansPro.className +
            " text-sm md:text-base lg:text-lg leading-snug mx-4 md:mx-6 lg:mx-8"
          }
        >
          <li className="list-disc">High-speed internet</li>
          <li className="list-disc">World-class meeting rooms</li>
          <li className="list-disc">Printing and scanning facilities</li>
          <li className="list-disc">Gourmet kitchen and lounge areas</li>
          <li className="list-disc">Event hall</li>
          <li className="list-disc">
            Personalized reception and mail services
          </li>
          <li className="list-disc">24/7 access</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
