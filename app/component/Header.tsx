import React from "react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

interface HeaderProps {
  bold: string;
}
export default function Header(props: HeaderProps) {
  return (
    <header className="p-5 z-10 relative">
      <nav className="text-white">
        <ul className="flex gap-10 justify-center mt-1">
          <li>
            <Link href="/">
              <p
                className={`${props.bold === "home" && "font-bold underline"}`}
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <p
                className={`${props.bold === "work" && "font-bold underline"}`}
              >
                Work
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p
                className={`${props.bold === "about" && "font-bold underline"}`}
              >
                About
              </p>
            </Link>
          </li>
        </ul>
        <div className="flex justify-between mt-[-2rem] max-[700px]:mt-8 max-[700px]:justify-center px-5">
          <span className="mt-[0.4rem] max-[700px]:hidden">
            <h1 className="font-extrabold text-[18px]">
              RAEFANDY<span className="text-[#85E4CC]">FADILA</span>
            </h1>
          </span>
          <button className="border-[1px] text-center border-white pl-7 w-[12.3rem] pr-2 py-2 rounded-full flex gap-5 items-center justify-between text-[14px] font-[400]">
            DOWNLOAD CV{" "}
            <a href="/Raefandy Fadila CV.pdf" download>
              <div className="w-8 h-8 rounded-full bg-[#85E4CC] relative">
                <FiDownload className="absolute top-[5px] left-[6px] text-xl text-black" />
              </div>
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}
