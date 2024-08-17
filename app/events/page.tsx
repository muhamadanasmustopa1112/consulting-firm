import React from "react";

function Page() {
  const events = [
    {
      date: "Jan\n2024",
      name: "New Year Celebration",
      detail: "Central Park, 1st Jan, 6:00 PM",
    },
    {
      date: "Feb\n2024",
      name: "Valentine's Day Party",
      detail: "Downtown Cafe, 14th Feb, 7:00 PM",
    },
    {
      date: "Mar\n2024",
      name: "Spring Festival",
      detail: "City Square, 21st Mar, 10:00 AM",
    },
    {
      date: "Apr\n2024",
      name: "Earth Day",
      detail: "Green Park, 22nd Apr, 9:00 AM",
    },
    {
      date: "May\n2024",
      name: "Labor Day Parade",
      detail: "Main Street, 1st May, 9:00 AM",
    },
    {
      date: "Jun\n2024",
      name: "Summer Music Festival",
      detail: "Beachside, 15th Jun, 4:00 PM",
    },
    {
      date: "Jul\n2024",
      name: "Independence Day Celebration",
      detail: "City Hall, 4th Jul, 8:00 PM",
    },
    {
      date: "Aug\n2024",
      name: "Back to School Fair",
      detail: "Community Center, 20th Aug, 10:00 AM",
    },
    {
      date: "Sep\n2024",
      name: "Autumn Harvest Festival",
      detail: "Farmers Market, 25th Sep, 11:00 AM",
    },
    {
      date: "Oct\n2024",
      name: "Halloween Party",
      detail: "Haunted House, 31st Oct, 7:00 PM",
    },
    {
      date: "Nov\n2024",
      name: "Thanksgiving Dinner",
      detail: "Grand Hall, 28th Nov, 6:00 PM",
    },
    {
      date: "Dec\n2024",
      name: "Christmas Eve Gala",
      detail: "City Square, 24th Dec, 7:00 PM",
    },
  ];

  return (
    <div className='flex flex-col gap-8 md:min-h-[40vh] w-full lg:w-4/5 relative z-20 py-12 md:before:content-[""] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-1/2 md:before:block md:before:h-[calc(100%-3rem)] md:before:w-[2px] md:before:bg-white'>
      {events.map((item, idx) => {
        const isEven = idx % 2 == 0;
        return (
          <div
            key={idx}
            className={
              'flex flex-col md:flex-row justify-start items-center gap-4 px-6 py-2 mx-4 md:mx-0 rounded-tl-[1.875rem] rounded-br-[1.875rem] border border-white w-[calc(100%-2rem)] md:w-[calc(55%-2rem)] lg:w-[calc(50%-2rem)] relative md:before:content-[""] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:block md:before:w-5 md:before:h-5 md:before:bg-white md:before:rounded-full ' +
              (isEven
                ? "left-0 md:left-auto md:before:-right-11"
                : "md:left-[calc(50%+2rem)] left-0 md:before:-left-11")
            }
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-break-spaces text-center leading-[120%]">
              {item.date}
            </h2>
            <div className="flex-grow flex flex-col gap-2 text-center md:text-left">
              <h1 className="font-semibold">{item.name}</h1>
              <p>{item.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
