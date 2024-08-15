"use client";
import Image from "next/image";
import { useState } from "react";

const page = () => {
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
          <span className="font-p2">Log in to your account.</span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Type your email"
            className="bg-[#FFFFFF33] py-3 px-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="relative">
            <div className="flex justify-between">
              <label className="font-p3" htmlFor="password">
                Password
              </label>
              <span className="font-p3 text-link">Forgot Password?</span>
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
          <div className="flex gap-4">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="yes"
              className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-white rounded-sm bg-[#FFFFFF33] mt-1 checked:bg-[#FFFFFF33] checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
            />
            <label htmlFor="remember">Remember password</label>
            <svg
              className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <button className="button-normal font-h5">Login</button>
      </div>
    </div>
  );
};
export default page;
