'use client'
import Link from "next/link";
import navData from "@/data/navData.js";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState(false);

  const handleClose = useCallback(
    (e: any) => {
      if (navRef.current && !navRef.current?.contains(e.target)) {
        setNav(false);
      }
    },
    [navRef]
  );

  useEffect(() => {
    window.addEventListener("scroll", () => setNav(false));
    window.addEventListener("click", handleClose);
  }, [handleClose, nav]);

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <nav className="z-10 md:flex justify-between fixed w-full h-max items-center py-4 px-8 lg:px-16 shadow-header bg-background /40 backdropblur-lg">
      <Link
        href={"/"}
        onClick={() => handleClick("header")}
        className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-700 tracking-wider"
      >
        ALOK ARTS
      </Link>
      <div
        ref={navRef}
        onClick={() => setNav((prev) => !prev)}
        className={`${
          nav && "open"
        } menu-btn flex z-10 md:hidden absolute top-0 right-0 justify-center items-center p-6`}
      >
        <div className="ham"></div>
      </div>

      <ul
        className={`${
          !nav && "max-md:-mr-48"
        } flexjustify-betweenmin-w-fitw-1/2font-medium max-w-96 overflow-x-hidden max-md:overflow-y-scroll right-0 absolute md:static md:flex h-[calc(100vh-60px)] max-md:mt-4 max-md:pt-4 md:h-max duration-300 transition-all max-md:bg-background w-48 md:w-1/2 text-center justify-between  max-md:space-y-5`}
      >
        {navData.map((data, index) => (
          <li
            key={index}
            className="cursor-pointer capitalize"
            onClick={() => handleClick(data.li)}
          >
            {data.li}
          </li>
        ))}
      </ul>
    </nav>
  );
}
