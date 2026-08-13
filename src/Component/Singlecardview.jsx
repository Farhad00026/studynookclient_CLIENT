"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import BookingCard from "./BookingCard";

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

          <BookingCard room={room}></BookingCard>

        </div>
      </Card>
    </section>
  );
};

export default Singlecardview;
