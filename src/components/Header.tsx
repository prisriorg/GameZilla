"use client";

import { useState } from "react";
import Link from "next/link";
import config from "@/lib/config";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between p-4 md:px-[10%] border-b-2 sticky top-0 z-50 bg-white md:bg-transparent md:backdrop-blur-3xl">
      {/* Logo */}
      <Link href={config.SiteUrl} className="flex gap-2 justify-center text-3xl font-bold text-gray-900">
        <img
          src={config.SiteLogo}
          alt="Site Logo"
          width={100}
          height={100}
          title={config.SiteName}
          className="w-9 h-9 rounded-full"
        />
        {config.SiteName}
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        aria-label="open menu"
        onClick={toggleMobileMenu}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden w-full pl-8 md:block md:w-auto">
        <ul className="flex gap-x-8 pt-2">
          <li>
            <Link
              href={config.SiteUrl}
              className="text-base font-medium text-gray-500 hover:text-black dark:text-gray-400"
            >
              Home
            </Link>
          </li>
          {config.pages.map((da, index) => (
            <li key={index}>
              <Link
                href={config.SiteUrl+"/"+da.toLowerCase().replaceAll(" ", "-")}
                className="text-base font-medium text-gray-500 hover:text-black dark:text-gray-400"
              >
                {da}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link
                href={config.SiteUrl}
                className="text-sm font-medium text-gray-700 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            {config.pages.map((da, index) => (
              <li key={index}>
                <Link
                  href={
                    config.SiteUrl + "/" + da.toLowerCase().replaceAll(" ", "-")
                  }
                  className="text-sm font-medium text-gray-700 hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {da}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
