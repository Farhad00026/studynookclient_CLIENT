"use client";
import Link from "next/link";
const Banner = () => {
  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[680px] flex-col justify-between">
        {/* Hero Text */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-5 py-16 text-center sm:px-8">
          <div className="max-w-4xl">

            {/* Small Badge */}
            <div className="mb-5 inline-block rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-md backdrop-blur-sm">
              📚 Your Perfect Study Space
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Perfect
              <span className="block text-cyan-300">
                Study Room
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/95 drop-shadow-md sm:text-lg md:text-xl">
              Discover quiet, comfortable, and convenient study rooms.
              Book your ideal space and focus on what matters most.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/specialrooms"
                className="w-full rounded-lg bg-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-600 sm:w-auto"
              >
                Explore Rooms
              </Link>

              <Link
                href="/allrooms"
                className="w-full rounded-lg border border-white/60 bg-white/20 px-7 py-3.5 font-semibold text-white shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                View Available Rooms
              </Link>
            </div>
          </div>
        </div>

        {/* Search / Filter Box */}
        <div className="relative mx-auto mb-5 w-full max-w-6xl px-4 sm:mb-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/30 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:p-5">

            {/* Search Fields */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:items-center">

              {/* Location */}
              <div className="rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-gray-100">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-800">
                  Of Study Rooms
                </p>
              </div>

              {/* Duration */}
              <div className="rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-gray-100">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Duration
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-800">
                  Hourly Rate
                </p>
              </div>

              {/* Rate */}
              <div className="rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-gray-100">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Rate
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-800">
                  $1 Per Hour
                </p>
              </div>

              {/* Capacity */}
              <div className="rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-gray-100">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Capacity
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-800">
                  5 - 10 People
                </p>
              </div>

              {/* Search Button */}
              <Link
                href="/rooms"
                className="flex min-h-[62px] items-center justify-center rounded-xl bg-cyan-500 px-6 font-bold text-white shadow-md transition duration-300 hover:bg-cyan-600 hover:shadow-lg"
              >
                🔍 Search Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
