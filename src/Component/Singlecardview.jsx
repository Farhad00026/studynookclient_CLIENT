"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Singlecardview = ({ room }) => {
  const {
    _id,
    name,
    description,
    floor,
    capacity,
    hourlyRate,
    image,
    amenities,
  } = room;

  const visibleAmenities = amenities?.slice(0, 4) || [];
  const remainingAmenities = Math.max(
    (amenities?.length || 0) - 4,
    0
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Card className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

        {/* ================= IMAGE ================= */}
        <div className="relative h-64 w-full sm:h-80 md:h-[420px]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Floor Badge */}
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg backdrop-blur-sm sm:left-6 sm:top-6">
            📍 {floor}
          </div>

          {/* Price */}
          <div className="absolute bottom-4 right-4 rounded-xl bg-cyan-500 px-4 py-2 text-white shadow-lg sm:bottom-6 sm:right-6">
            <span className="text-xl font-bold">
              ${hourlyRate}
            </span>
            <span className="text-sm">
              /hr
            </span>
          </div>

          {/* Room Name */}
          <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-6">
            <h1 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl md:text-4xl">
              {name}
            </h1>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-5 sm:p-7 md:p-8">

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              About This Study Room
            </h2>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-600 sm:text-base">
              {description}
            </p>
          </div>

          {/* ================= ROOM INFO ================= */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Floor */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Location
              </p>

              <p className="mt-2 text-base font-semibold text-gray-900">
                📍 {floor}
              </p>
            </div>

            {/* Capacity */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Capacity
              </p>

              <p className="mt-2 text-base font-semibold text-gray-900">
                👥 {capacity?.min}–{capacity?.max} people
              </p>
            </div>

            {/* Rate */}
            <div className="rounded-2xl bg-cyan-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-cyan-700">
                Hourly Rate
              </p>

              <p className="mt-2 text-xl font-bold text-cyan-600">
                ${hourlyRate}
                <span className="text-sm font-normal text-gray-500">
                  /hour
                </span>
              </p>
            </div>
          </div>

          {/* ================= AMENITIES ================= */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900">
              Amenities
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {visibleAmenities.map((amenity, index) => (
                <span
                  key={index}
                  className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700"
                >
                  ✓ {amenity}
                </span>
              ))}

              {remainingAmenities > 0 && (
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
                  +{remainingAmenities} more
                </span>
              )}
            </div>
          </div>

          {/* ================= BOOKING AREA ================= */}
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-semibold text-green-600">
                  Available for Booking
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Reserve this room for your preferred date and time.
              </p>
            </div>

            <Link href={`/booking/${_id}`} className="w-full sm:w-auto">
              <Button
                className="w-full bg-cyan-500 px-8 py-6 text-base font-bold text-white transition hover:bg-cyan-600 sm:w-auto"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Singlecardview;
