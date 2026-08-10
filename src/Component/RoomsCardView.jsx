import Image from "next/image";
import Link from "next/link";
import { CircleDollar, Person } from "@gravity-ui/icons";
import { Card } from "@heroui/react";

const RoomsCardView = ({ room }) => {
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

  // Show only first 3 amenities
  const visibleAmenities = amenities?.slice(0, 3) || [];
  const remainingAmenities = Math.max(
    (amenities?.length || 0) - 3,
    0
  );

  // Truncate description to around 100 characters
  const shortDescription =
    description?.length > 100
      ? `${description.slice(0, 100)}...`
      : description;

  return (
    <Card className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-56 w-full overflow-hidden sm:h-60">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Floor Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-md backdrop-blur-sm">
          📍 {floor}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-cyan-500 px-3 py-1.5 text-sm font-bold text-white shadow-md">
          <CircleDollar className="h-4 w-4" />
          {hourlyRate}/hr
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <Card.Content className="p-5">

        {/* Room Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {name}
        </h2>

        {/* Description */}
        <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
          {shortDescription}
        </p>

        {/* ================= ROOM INFO ================= */}
        <div className="mt-4 grid grid-cols-2 gap-3">

          {/* Floor */}
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs text-gray-500">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-800">
              {floor}
            </p>
          </div>

          {/* Capacity */}
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs text-gray-500">
              Capacity
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-800">
              {capacity?.min}–{capacity?.max} People
            </p>
          </div>
        </div>

        {/* ================= AMENITIES ================= */}
        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold text-gray-800">
            Amenities
          </p>

          <div className="flex flex-wrap gap-2">
            {visibleAmenities.map((amenity, index) => (
              <span
                key={index}
                className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
              >
                {amenity}
              </span>
            ))}

            {remainingAmenities > 0 && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                +{remainingAmenities} more
              </span>
            )}
          </div>
        </div>
      </Card.Content>

      {/* ================= FOOTER ================= */}
      <Card.Footer className="flex items-center justify-between border-t border-gray-100 p-5">

        {/* Price */}
        <div>
          <p className="text-xs text-gray-500">
            Hourly Rate
          </p>

          <p className="text-lg font-bold text-cyan-600">
            ${hourlyRate}
            <span className="text-sm font-normal text-gray-500">
              /hr
            </span>
          </p>
        </div>

        {/* View Details */}
        <Link
          href={`/allrooms/${_id}`}
          className="rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600"
        >
          View Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default RoomsCardView;

