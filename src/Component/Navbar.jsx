"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignout = async () => {
    try {
      setIsLoggingOut(true);

      await authClient.signOut();

      setIsOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Special Rooms",
      href: "/specialrooms",
    },
    {
      name: "All Rooms",
      href: "/allrooms",
    },
    {
      name: "Booked Rooms",
      href: "/bookedrooms",
    },
    {
      name: "Dashboard",
      href: "/dashbord",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cyan-100 shadow-sm">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFj32h7lhHJfHmUkCVuX4Ulk2MTiP_nJvLpakGWdyfW6VGPrf0oXcGgg&s=10"
              alt="StudyNook Logo"
              fill
              priority
              sizes="40px"
              className="object-cover"
            />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Study<span className="text-cyan-500">Nook</span>
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 transition duration-200 hover:bg-cyan-50 hover:text-cyan-600 lg:px-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ================= DESKTOP AUTH ================= */}
        <div className="hidden items-center md:flex">
          {user ? (
            <div className="flex items-center gap-3">

              {/* User Profile */}
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-gray-100"
              >
                <Avatar className="h-9 w-9">
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image || undefined}
                    name={user?.name}
                  />

                  <Avatar.Fallback>
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </Avatar.Fallback>
                </Avatar>

                <div className="hidden lg:block">
                  <p className="max-w-[110px] truncate text-sm font-semibold text-gray-800">
                    {user?.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    My Profile
                  </p>
                </div>
              </Link>

              {/* Logout */}
              <Button
                onClick={handleSignout}
                disabled={isLoggingOut}
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100 hover:text-red-700"
              >
                {isLoggingOut ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-300 border-t-red-600" />
                    Logging out...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12h9m0 0-3-3m3 3-3 3"
                      />
                    </svg>

                    Logout
                  </span>
                )}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-cyan-600"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 hover:shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
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

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="my-4 border-t border-gray-100" />

            {/* Mobile Authentication */}
            {user ? (
              <div className="rounded-2xl bg-gray-50 p-4">

                {/* User Info */}
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Avatar className="h-11 w-11">
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image || undefined}
                      name={user?.name}
                    />

                    <Avatar.Fallback>
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </Avatar.Fallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {user?.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      View Profile
                    </p>
                  </div>
                </Link>

                {/* Mobile Logout */}
                <Button
                  onClick={handleSignout}
                  disabled={isLoggingOut}
                  className="mt-4 w-full rounded-xl border border-red-200 bg-red-50 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                >
                  {isLoggingOut ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-300 border-t-red-600" />
                      Logging out...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12h9m0 0-3-3m3 3-3 3"
                        />
                      </svg>

                      Logout
                    </span>
                  )}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-600"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
