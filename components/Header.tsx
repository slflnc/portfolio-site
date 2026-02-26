"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  const headerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);


  useEffect(() => {
    const handleClickOutside = (event) => {

      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };


    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); 

  return (
    <header
      ref={headerRef}
      className="w-full bg-mainblue text-white fixed top-0 left-0 z-50 shadow-md"
    >
      <div className="w-full px-6 py-4 flex justify-between items-center relative z-50 bg-mainblue">
        <Link
          href="/"
          className="flex items-center gap-3 transition-all duration-200 hover:opacity-80 active:scale-95"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Alfie Lancaster Logo"
            width={68}
            height={56}
            priority
          />
        </Link>

        <nav className="space-x-10 hidden md:flex items-center">
          <Link href="/about" className="hover:underline">
            About me
          </Link>
          <Link href="/#projects" className="hover:underline">
            Projects
          </Link>
          <Link
            href="/contact"
            className="bg-buttonaccent text-white px-4 py-2 hover:opacity-90 font-semibold shadow-xl  transition-all duration-200 active:scale-95"
          >
            Contact me
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`md:hidden absolute left-0 w-full bg-mainblue border-t border-white/10 flex flex-col items-center py-8 space-y-6 shadow-xl transition-all duration-300 ease-in-out -z-10
          ${
            isOpen
              ? "top-full opacity-100 translate-y-0 pointer-events-auto visible"
              : "top-full opacity-0 -translate-y-4 pointer-events-none invisible"
          }
        `}
      >
        <Link
          href="/about"
          className="text-xl hover:text-gray-200 transition-colors"
          onClick={closeMenu}
        >
          About me
        </Link>
        <Link
          href="/#projects"
          className="text-xl hover:text-gray-200 transition-colors"
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="bg-buttonaccent text-white px-8 py-3 hover:opacity-90 font-semibold shadow-xl w-[80%] max-w-[300px] text-center rounded-sm"
          onClick={closeMenu}
        >
          Work with Me
        </Link>
      </nav>
    </header>
  );
}
