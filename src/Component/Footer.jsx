import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-white"
            >
              Study<span className="text-cyan-400">Nook</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              Discover comfortable study rooms around your university.
              Book your perfect space and make every study session more
              productive.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="transition hover:text-cyan-400"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/booked-rooms"
                  className="transition hover:text-cyan-400"
                >
                  Booked Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="transition hover:text-cyan-400"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/help"
                  className="transition hover:text-cyan-400"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-cyan-400"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Connected
            </h3>

            <p className="mb-4 text-sm leading-6">
              Subscribe to receive study tips, room updates, and special
              offers.
            </p>

            {/* Newsletter */}
            <form className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="bg-cyan-500 px-4 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                →
              </button>
            </form>

            {/* Contact */}
            <div className="mt-5 space-y-2 text-sm">
              <p>
                <span className="text-gray-500">Phone:</span>{" "}
                <a
                  href="tel:+8807869011622"
                  className="transition hover:text-cyan-400"
                >
                  +880 786 901 1622
                </a>
              </p>

              <p>
                <span className="text-gray-500">Email:</span>{" "}
                <a
                  href="mailto:info@studynook.com"
                  className="transition hover:text-cyan-400"
                >
                  info@studynook.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 border-t border-gray-800" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © 2026{" "}
            <span className="font-semibold text-white">
              StudyNook
            </span>
            . All rights reserved.
          </p>

          <p className="text-gray-500">
            Find a room. Focus. Learn. Grow. 📚
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
