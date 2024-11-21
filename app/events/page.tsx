export default function Page() {
  const events = [
    {
      date: "Dec\n2024",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "Jan\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "FEB\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "MAR\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "APR\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "MAY\n2025",
      name: "To Be Determinedl",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "JUN\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "JUL\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "AUG\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "SEP\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "OCT\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
    {
      date: "NOV\n2025",
      name: "To Be Determined",
      detail: "Location/Date/Time TBD",
    },
  ];

  return (
    <div className='bg-black/60 text-white flex flex-col gap-8 md:min-h-[40vh] w-full lg:w-4/5 relative z-20 py-12 md:before:content-[""] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:left-1/2 md:before:block md:before:h-[calc(100%-3rem)] md:before:w-[2px] md:before:bg-white'>
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
