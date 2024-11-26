import React from "react";
import AvailableCar from "./car/available";
import IncomingCar from "./car/incoming";
import Link from "next/link";

const cars = [
  {
    name: "Bentley Flying Spur V8 2023",
    description: [
      "Engine: 4.0 litre Twin-turbocharged V8",
      "Power: 550PS / 542bhp / 404kW @ 6000 rpm",
      "Torque: 770Nm, 568 lb.ft @ 2000-4500 rpm",
      "Transmission: 8-speed Dual Clutch",
      "0 to 60: 4.0 seconds",
      "Top Speed: 198mph / 318km/h",
    ],
    price: "Starts 14 Billion IDR*",
    information: "*Incoming",
    image: "/img/cars/bentley-flying-spur-v8-2023.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Ferrari Roma",
    description: [
      "Engine: 4.0 litre Twin-turbocharged V8",
      "Power: 550PS / 542bhp / 404kW @ 6000 rpm",
      "Torque: 770Nm, 568 lb.ft @ 2000-4500 rpm",
      "Transmission: 8-speed Dual Clutch",
      "0 to 60: 4.0 seconds",
      "Top Speed: 198mph / 318km/h",
    ],
    price: "Starts 14 Billion IDR*",
    information: "*Incoming",
    image: "/img/cars/ferrari-roma.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Ferrari Purosangue",
    description: [
      "Engine: DOHC 48-valve V-12",
      "Power: 819 hp @ 8250 rpm",
      "Transmission: 8-speed dual-clutch automatic",
      "0 to 60: 3.3 sec",
      "Top Speed: 211 mph",
    ],
    price: "Starts 23 Billion IDR*",
    information: "*Incoming",
    image: "/img/cars/ferrari-purosangue.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Lamborghini Revulto",
    description: [
      "Engine: 6.5L V12 Plug-in Hybrid",
      "Power: 814 hp @ 9,250 rpm (607 kW)",
      "Torque: 535 lb·ft @ 6,750 rpm (725 N·m)",
      "Transmission: 8-speed automatic",
      "0 to 60: 2.5 seconds",
      "Top Speed: 350 km/h (217 mph)",
    ],
    price: "Starts 23 Billion IDR*",
    information: "*Incoming",
    image: "/img/cars/lamborghini-revulto.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Lamborghini Urus S",
    description: [
      "Engine: 4,0 l V8",
      "Power: 657 hp @ 6,000 rpm (490 kW)",
      "Torque: 627 lb·ft @ 2,300 – 4,500 rpm (850 N·m)",
      "Transmission: 8-speed automatic",
      "0 to 60: 3.5 seconds",
      "Top Speed: 305 km/h (190 mph)",
    ],
    price: "Starts 15 Billion IDR*",
    information: "*Incoming",
    image: "/img/cars/lamborghini-urus-s-2023.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Lamborghini Huracan STO",
    description: [
      "Engine: 5.2 l V10",
      "Power: 631 hp @ 8,000 rpm (471 kW)",
      "Torque: 417 lb·ft @ 6,500 rpm (565 N·m)",
      "Transmission: 7-speed automatic",
      "0 to 60: 3.2 seconds",
      "Top Speed: 325 km/h (202 mph)",
    ],
    price: "Starts 15 Billion IDR*",
    information: "*Incoming",
    image: "/img/cars/lamborghini-hurican-sto.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Lamborghini Huracan Evo Spyder",
    description: [
      "Engine: V10",
      "Power: 600+ horsepower",
      "Torque: >400 lb-ft",
      "Transmission: 7-speed dual-clutch",
      "0 to 60: 3.5 sec",
      "Top Speed: >200 mph",
    ],
    price: "Starts 15 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/lamborghini-hurican-evo-spyder.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Lamborghini Tecnica",
    description: [
      "Engine: V10",
      "Power: 470/640 kW/CV at 8000 rpm",
      "Torque: 565 Nm",
      "Transmission: 7-speed Dual Clutch",
      "0 to 60: 3.2 seconds",
      "Top Speed: 325 km/h",
    ],
    price: "Starts 15 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/lamborghini-tecnica.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Rolls-Royce Spectre",
    description: [
      "Fuel Type: Electric",
      "Power: 577 hp",
      "Torque: 900 Nm",
      "Transmission: Single Speed Automatic",
      "0 to 60: 4.4 seconds",
      "Top Speed: 250 kmph",
    ],
    price: "Starts 23 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/rolls-royce-spectre.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Mercedes Benz Maybach S 680",
    description: [
      "Engine: 6.0 l V12",
      "Power: 612 hp @ 5,250 rpm (456 kW)",
      "Torque: 664 lb·ft @ 2,000 – 4,000 rpm (900 N·m)",
      "Transmission: 9-speed automatic",
      "0 to 60: 4.5 seconds",
      "Top Speed: 210 km/h (130 mph)",
    ],
    price: "Starts 14 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/mercedes-benz-maybach-s-60.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Mercedes Benz AMG G63 Black",
    description: [
      "Engine: V8 Automatic",
      "Power: 430 kW (585 hp)",
      "Torque: 850 Nm @ 2,500-3,500 rpm",
      "Transmission: AMG SPEEDSHIFT TCT 9G",
      "0 to 60: 4.4 sec",
      "Top Speed: 137 mph",
    ],
    price: "Starts 8.5 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/mercedes-benz-amg-g63.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Mercedes Benz AMG G63 White",
    description: [
      "Engine: V8 Automatic",
      "Power: 430 kW (585 hp)",
      "Torque: 850 Nm @ 2,500-3,500 rpm",
      "Transmission: AMG SPEEDSHIFT TCT 9G",
      "0 to 60: 4.4 sec",
      "Top Speed: 137 mph",
    ],
    price: "Starts 8.5 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/mercedes-benz-amg-g63-white.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Range Rover Silver",
    description: [
      "Engine: V6 and V8",
      "Power: 254-518 hp",
      "Torque: 443-461 lb-ft",
      "Transmission: 8-speed automatic",
      "0 to 60: 5.6 sec",
      "Top Speed: 150 mph",
    ],
    price: "Starts 8 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/range-rover-2023.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "LWB-White",
    description: [
      "Engine: 4.0 litre Twin-turbocharged V8",
      "Power: 550PS / 542bhp / 404kW @ 6000 rpm",
      "Torque: 770Nm, 568 lb.ft @ 2000-4500 rpm",
      "Transmission: 8-speed Dual Clutch",
      "0 to 60: 4.0 seconds",
      "Top Speed: 198mph / 318km/h",
    ],
    price: "Starts 8 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/lwb.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
  {
    name: "Porsche Taycan White",
    description: [
      "Engine: Electric",
      "Battery Capacity: 93.4 kWh",
      "Power: 469 hp",
      "Transmission: 1-speed direct drive",
      "0 to 60: 5.4 sec",
      "Top Speed: 143 mph",
    ],
    price: "Starts 7 Billion IDR*",
    information: "*Incoming",
    image:
      "/img/cars/porsche-taycan-2023.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
];

const incomingCars = [

  {
    name: "Chevrolet Camaro ZL1",
    description:
      "The Chevrolet Camaro ZL1 is a high-performance sports car manufactured by Chevrolet. It is the most powerful production Camaro ever built, with a supercharged 6.2L LT4 V8 engine that offers 650 horsepower and 881 Nm of torque 12. The car is known for its great handling, sharp steering, and stonking powertrain. The quick-shifting automatic transmission nets even quicker acceleration times than those fit with the stick. Chevy will produce a ZL1 Collector’s Edition, limited to only 350 cars.",
    image: "/img/cars/chevrolet-camaro-zl1.png",
    url: "https://son2ws4vyns.typeform.com/to/OELJewci",
  },
];

const Cars = () => {
  return (
    <>
      <div className='w-screen bg-[url("/img/cars.jpg")] aspect-[5/1] bg-no-repeat bg-center bg-cover relative lg:-left-8'>
        <div className='max-sm:hidden absolute -z-10 h-[300%] w-auto aspect-square top-1/2 -translate-y-1/2 right-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-right-2/3 before:top-1/2 before:-translate-y-1/2'></div>
      </div>
      <h2 className='font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        <span className="font-normal text-base">Currently </span>
        <br />
        Available Cars
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4 px-6 ">
        {cars.map((item) => (
          <Link href={item.url} key={item.name} passHref>
            <div>
              <AvailableCar item={item} />
            </div>
          </Link>
        ))}
      </div>
      <h2 className='mt-8 font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        Incoming
      </h2>
      <div className="flex flex-col items-center gap-6 mt-4">
        {incomingCars.map((item) => (
          <IncomingCar item={item} key={item.name} />
        ))}
      </div>
      <Link
        href="#"
        className="self-center px-8 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-fit mb-10"
      >
        See More
      </Link>
    </>
  );
};

export default Cars;
