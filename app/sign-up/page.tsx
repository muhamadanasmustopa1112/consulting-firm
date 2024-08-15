"use client";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="container py-10 px-4 mx-auto">
      <div className="flex flex-col py-8 gap-8 sm:mx-auto sm:max-w-[332px] sm:border sm:rounded-lg sm:px-4">
        <div className="flex flex-col gap-8 items-center">
          <Image
            className="w-32 h-14 object-contain"
            alt="IURIS International Indonesia"
            src="/img/logo.webp"
            width={252}
            height={110}
          />
          <span className="font-p2">Create your account.</span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Type your email"
            className="bg-[#FFFFFF33] py-3 px-4 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            className="bg-[#FFFFFF33] py-3 px-4 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="relative">
            <div className="flex justify-between">
              <label className="font-p3" htmlFor="password">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                type={visible ? "text" : "password"}
                placeholder="Type your password"
                className="bg-[#FFFFFF33] py-3 px-4 rounded-lg w-full"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {visible ? (
                  "🙈"
                ) : (
                  <Image
                    src="/icons/icon-eye.svg"
                    alt="icon-eye"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <button className="button-normal font-h5">Register</button>
      </div>
    </div>
  );
};

export default Page;
