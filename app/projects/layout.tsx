import Image from "next/image";
import React from "react";
import backgroundImage from "@/public/img/projects.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-x-hidden">
      {children}
      <div className="absolute bottom-0 left-0 right-0 w-full aspect-video -z-10 opacity-25">
        <Image
          alt="Background Image"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Layout;
