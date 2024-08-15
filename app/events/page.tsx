import React from "react";

function page() {
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
    <div className='flex flex-col gap-8 md:min-h-[40vh] w-3/5 relative z-20 py-12 before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:block before:h-[calc(100%-3rem)] before:w-[2px] before:bg-white'>
      {events.map((item, idx) => {
        const isEven = idx % 2 == 0;
        return (
          <div
            key={idx}
            className={
              'flex flex-row justify-start items-center gap-4 px-6 py-2 rounded-tl-[1.875rem] rounded-br-[1.875rem] border border-white w-[calc(50%-2rem)] relative before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:block before:w-5 before:h-5 before:bg-white before:rounded-full ' +
              (isEven
                ? "left-0 before:-right-11"
                : "left-[calc(50%+2rem)] before:-left-11")
            }
          >
            <h2 className="text-4xl font-semibold whitespace-break-spaces text-center leading-[120%]">
              {item.date}
            </h2>
            <div className="flex-grow flex flex-col gap-2">
              <h1 className="font-semibold">{item.name}</h1>
              <p>{item.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
