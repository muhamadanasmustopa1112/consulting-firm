import React from "react";
import Image from "next/image";
import sourceSansPro from "@/components/ui/sourceSansPro";

const OurPartner = () => {
  const partners = [
    {
      name: "Partner 1",
      image: "/img/teams/person.png",
    },
    {
      name: "Partner 2",
      image: "/img/teams/person.png",
    },
    {
      name: "Partner 3",
      image: "/img/teams/person.png",
    },
    {
      name: "Partner 4",
      image: "/img/teams/person.png",
    },
  ];

  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-12 mb-5">
        Our Partners
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="w-28 sm:w-36 md:w-40">
            <div className="p-2">
              <div className="w-full overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <p className="font-semibold leading-snug text-center">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
