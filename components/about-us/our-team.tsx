import React from "react";
import Image from "next/image";
import sourceSansPro from "@/components/ui/sourceSansPro";

const OurTeam = () => {
  const teams = [
    {
      name: "Ms. Angelica",
      position: "Legal",
      image: "/img/teams/person.png",
    },
    {
      name: "Ms. Angelica",
      position: "Operations",
      image: "/img/teams/person.png",
    },
    {
      name: "Ms. Angelica",
      position: "Administrative",
      image: "/img/teams/person.png",
    },
    {
      name: "Ms. Angelica",
      position: "Marketing",
      image: "/img/teams/person.png",
    },
    {
      name: "Ms. Angelica",
      position: "Tech",
      image: "/img/teams/person.png",
    },
  ];

  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
        Our Team
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {teams.map((item, idx) => (
          <div key={idx} className="w-28 sm:w-36 md:w-40">
            <div className="p-2 border-[0.5px] border-white rounded-tl-[1rem] rounded-br-[1rem] mb-2">
              <div className="w-full overflow-hidden rounded-tl-lg rounded-br-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={180}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>
            <p className="font-semibold leading-snug text-center mb-0.5">
              {item.name}
            </p>
            <p
              className={
                sourceSansPro.className +
                " text-xs md:text-sm leading-snug text-center"
              }
            >
              {item.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
