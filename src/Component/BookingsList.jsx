"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { BookedinformationCard } from "./BookedinformationCard";

export function BookingsList({ initialRooms }) {
  const [rooms, setRooms] = useState(initialRooms);

  const handleCancel = async (bookingId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/bookings/${bookingId}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error("Failed to cancel booking");

      setRooms((prev) => prev.filter((room) => room._id !== bookingId));
      toast.success("Booking canceled successfully");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  if (!rooms.length) {
    return (
      <div className="p-6 text-center text-sm text-gray-500">
        You have no bookings yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {rooms.map((room) => (
        <BookedinformationCard
          key={room._id}
          room={room}
          onCancel={handleCancel}
        />
      ))}
    </div>
  );
}