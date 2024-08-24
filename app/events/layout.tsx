import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col justify-center items-center bg-[url("/img/stars.jpg")] bg-no-repeat bg-cover bg-center relative z-0 before:content-[""] before:absolute before:h-full before:w-full before:block before:bg-black before:bg-opacity-75 before:z-10'>
      {children}
    </div>
  );
}
