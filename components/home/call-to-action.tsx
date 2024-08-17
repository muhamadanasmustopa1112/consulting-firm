import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const sourceSansPro = localFont({
  src: [
    {
      path: "../../public/fonts/SourceSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

function CallToAction() {
  return (
    <section className="px-4 py-[60px] md:pl-56 md:pr-24 md:py-24 flex flex-row items-center gap-4 md:gap-24 relative z-0">
      <div className='absolute -z-10 aspect-square h-5/6 left-0 -translate-x-1/2 before:content-[""] before:absolute before:aspect-square before:h-full before:left-0 before:rounded-full before:blur-[100px] before:bg-white before:-z-10 before:bg-opacity-15'></div>
      <div className='absolute -z-10 aspect-square h-full right-0 -top-1/4 overflow-hidden before:content-[""] before:absolute before:aspect-square before:h-[90%] before:-right-1/4 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:blur-[100px] before:bg-white before:-z-10 before:bg-opacity-15'></div>
      <div className="min-w-0 w-full md:w-2/5 flex flex-col gap-6 z-50 ">
        <Link
          href="/sign-up"
          className="w-full p-4 flex flex-row justify-between items-center border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] transition-colors hover:bg-grey"
        >
          <div className="flex flex-col items-center gap-1">
            <p className="uppercase md:normal-case font-bold">
              Register for IURIS Now
            </p>
            <p className={sourceSansPro.className}>
              Get early bird passess of 20% off
            </p>
          </div>
          <div className='w-4 h-4 bg-[url("/img/arrow-right.svg")] bg-contain'></div>
        </Link>
        <div className="flex flex-col gap-4 md:gap-2">
          <h2 className="text-4xl text-center md:text-start font-bold">
            Let&apos;s Build Together
          </h2>
          <p
            className={
              sourceSansPro.className +
              " w-[328px] md:w-full mx-auto text-center md:text-start"
            }
          >
            Harnessed for Productivity. Designed for Collaboration. Synergy
            Unleashed. Progress Achieved. Innovate with Expertly Designed
            Solutions. Start, Thrive, Prosper.
          </p>
        </div>

        <div className={sourceSansPro.className + " flex flex-col gap-2"}>
          <p className="text-center md:text-start">Email Address</p>
          <div className="inline-flex justify-center md:justify-normal">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className={
                sourceSansPro.className +
                ' px-6 py-2 placeholder:text-dark placeholder:font-["inherit"] border border-white rounded-l-md'
              }
            />
            <button
              type="button"
              className="p-2 border border-white transition-colors hover:bg-grey rounded-r-md"
            >
              Sign Up for IURIS
            </button>
          </div>
        </div>
        <Link
          href="/sign-up"
          className={
            sourceSansPro.className +
            " border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 inline-flex justify-between items-center self-start gap-4 transition-colors hover:bg-grey mx-auto md:mx-0"
          }
        >
          <p>Start a free enterprise trial</p>
          <div className='w-4 h-4 bg-[url("/img/arrow-right.svg")] bg-contain'></div>
        </Link>
      </div>
      <div className='min-w-0 min-h-0 flex-grow aspect-square bg-no-repeat bg-contain bg-[url("/img/moon.png")]'></div>
    </section>
  );
}

export default CallToAction;
