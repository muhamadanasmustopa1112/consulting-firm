"use client";


import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

interface NavbarType {
  links: { name: string; path: string }[];
  pathname: string;
}

const DekstopVersion = ({ links, pathname }: NavbarType) => {
  return (
    <>
      <div className="flex justify-evenly gap-2 text-center border border-white rounded-full px-4 py-2 text-base">
        {links?.map((item, idx) => {
          const isActive =
            (item.path.startsWith("/services") &&
              pathname.startsWith("/services")) ||
            (item.path.startsWith("/assets") &&
              pathname.startsWith("/assets")) ||
            pathname === item.path;

          const activeClass = isActive
            ? "relative pl-6 bg-grey before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
            : "";

          return (
            <Link
              key={idx}
              className={`transition-all uppercase rounded-full duration-300 py-2 px-4 hover:bg-grey ${activeClass}`}
              href={item?.path}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Link
        href="/login"
        className="bg-grey uppercase text-dark rounded-full py-4 px-6 hover:brightness-90 transition-all"
      >
        Login
      </Link>
    </>
  );
};

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [click, setClick] = useState(false);
  const isLargeScreen = useResponsive(1280);
  const pathname = usePathname();
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services/consulting",
    },
    {
      name: "events",
      path: "/events",
    },
    {
      name: "assets",
      path: "/assets/cars",
    },
    {
      name: "projects",
      path: "/projects",
    },
    {
      name: "coworking",
      path: "/coworking",
    },
    {
      name: "about us",
      path: "/about-us",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true after the component mounts
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="sm:w-screen w-full container sticky top-0 p-2 sm:p-6 z-50 backdrop-blur-md mx-auto"
      style={{
        boxShadow: "2px 0px 5px rgb(0 0 0 / 0.4)",
        backgroundColor: "rgb(0 0 0 / 0.6)",
      }}
    >
      <div
        ref={menuRef}
        className={`flex flex-col w-full items-center justify-between sm:border-transparent ${
          click ? "border border-white rounded-lg" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Image
            className="w-32 h-14 object-contain"
            alt="IURIS International Indonesia"
            src="/img/logo.webp"
            width={252}
            height={110}
          />

          {isMounted && // Render only on the client-side
            (isLargeScreen ? (
              <DekstopVersion pathname={pathname} links={links} />
            ) : (
              <div>
                <div
                  className="cursor-pointer"
                  onClick={() => setClick((prev) => !prev)}
                >
                  <Image
                    width={40}
                    height={40}
                    src={
                      !click
                        ? "/icons/icon-hamburger.svg"
                        : "/icons/icon-cross.svg"
                    }
                    alt="icon menu"
                  />
                </div>
              </div>
            ))}
        </div>
        {!isLargeScreen && click && (
          <>
            <div className="flex flex-col py-4 px-6 justify-center w-full border-t border-t-white border-b border-b-white transition-all">
              {links.map((val, idx) => (
                <Link
                  href={val?.path}
                  key={idx}
                  className="font-h5 uppercase py-3"
                >
                  {val?.name}
                </Link>
              ))}
            </div>
            <div className="w-full text-center p-6 transition-all">
              <Link
                href="/login"
                className="bg-white uppercase text-dark rounded-md hover:brightness-90 transition-all font-h5 flex items-center justify-center h-12"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
