import ListProjects from "@/components/projects/list";

export default function Page() {
  return (
    <div className="py-16 px-4 md:py-32 md:px-12 lg:py-48 lg:px-32 relative z-10 max-w-full">
      <div className="flex flex-col md:flex-row justify-stretch gap-8">
        <div className="md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 break-words">
            Projects - IURIS
          </h1>
          <p className="leading-relaxed mb-4 text-sm md:text-base break-words">
            Welcome to our Upcoming Projects Hub! Explore the cutting-edge
            initiatives we have in the pipeline. If you're eager to delve deeper
            into our work, request a whitepaper, lightpaper, or technical
            specification document. To kickstart this journey, initiate the
            process by signing essential legal agreements, including a Letter of
            Intent, Non-Disclosure Agreement, and Intellectual Property
            Agreement. Let's embark on innovation together-simply fill out the
            form below to express your interest and unlock the future with us.
          </p>
          <button
            type="button"
            className="px-5 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-fit transition-colors hover:bg-gray-700"
          >
            Request Demo
          </button>
        </div>
        <div className="hidden md:block w-1 bg-white"></div>
        <div className="w-full md:w-2/5">
          <ListProjects />
        </div>
      </div>
      <div className="mt-16 md:mt-32 w-full lg:w-2/3">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4 break-words">
          Unlock the power of legal AI with our insightful content, guiding you
          towards informed decisions in the ever-evolving legal landscape.
        </h2>
        <button
          type="button"
          className="flex flex-row items-center gap-2 text-lg md:text-xl"
        >
          <span className="underline underline-offset-4 break-words">
            Request White Paper
          </span>{" "}
          <span className="w-5 h-5 bg-[url('/img/arrow-right.svg')] bg-contain"></span>
        </button>
      </div>
    </div>
  );
}
