"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFj32h7lhHJfHmUkCVuX4Ulk2MTiP_nJvLpakGWdyfW6VGPrf0oXcGgg&s=10"
              alt="StudyNook Logo"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>

          <span className="text-xl font-bold text-gray-800">
            Study<span className="text-blue-600">Nook</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/rooms"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Rooms
          </Link>

          <Link
            href="/booked-rooms"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Booked Rooms
          </Link>

          <Link
            href="/profile"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Profile
          </Link>
        </div>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t bg-white px-4 pb-5 pt-3 shadow-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/rooms"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              Rooms
            </Link>

            <Link
              href="/booked-rooms"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              Booked Rooms
            </Link>

            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              Profile
            </Link>

            <div className="my-2 border-t" />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-center font-medium text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

