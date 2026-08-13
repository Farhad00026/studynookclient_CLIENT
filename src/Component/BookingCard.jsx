"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client"; // adjust to your actual auth client path

const BookingCard = ({ room }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    _id,
    name,
    description,
    floor,
    hourlyRate,
    image,
  } = room;

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [specialNote, setSpecialNote] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate hourly slots: 08:00 - 20:00
  const timeSlots = Array.from({ length: 13 }, (_, index) => {
    const hour = index + 8;
    return `${String(hour).padStart(2, "0")}:00`;
  });

  // End time must be after start time
  const endTimeSlots = startTime
    ? timeSlots.filter((time) => time > startTime)
    : [];

  // Calculate total cost
  const totalCost = useMemo(() => {
    if (!startTime || !endTime) {
      return 0;
    }
    const startHour = Number(startTime.split(":")[0]);
    const endHour = Number(endTime.split(":")[0]);
    return (endHour - startHour) * Number(hourlyRate);
  }, [startTime, endTime, hourlyRate]);

  // Today's date
  const today = new Date().toISOString().split("T")[0];

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please sign in to book a room.");
      return;
    }

    if (!date || !startTime || !endTime) {
      toast.error("Please select date, start time and end time.");
      return;
    }

    const bookingData = {
      // From session
      userId: user.id,
      userName: user.name,
      userEmail: user.email,

      // Room snapshot
      roomId: _id,
      roomName: name,
      roomDescription: description,
      roomFloor: floor,
      hourlyRate: Number(hourlyRate),
      roomImage: image,

      // Form data
      date,
      startTime,
      endTime,
      totalCost,
      specialNote,
    };

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/bookings/${user?.id}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Failed to confirm booking");
      }

      toast.success("Booking Confirmed");
      setDate("");
      setStartTime("");
      setEndTime("");
      setSpecialNote("");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-6 text-white sm:px-8">
          <p className="text-sm text-cyan-100">Reserve Your Study Space</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
            Book This Room
          </h2>
          <p className="mt-2 text-sm text-cyan-50">
            Select your preferred date and time slot.
          </p>
        </div>

        <form onSubmit={handleBooking} className="p-5 sm:p-8">
          {/* Date / Start / End */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div>
              <label
                htmlFor="booking-date"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Date
              </label>
              <input
                id="booking-date"
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="start-time"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Start Time
              </label>
              <select
                id="start-time"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                  setEndTime("");
                }}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                required
              >
                <option value="">Select start time</option>
                {timeSlots.slice(0, -1).map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="end-time"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                End Time
              </label>
              <select
                id="end-time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                disabled={!startTime}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:bg-gray-100"
                required
              >
                <option value="">
                  {startTime ? "Select end time" : "Select start time first"}
                </option>
                {endTimeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cost Information */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Hourly Rate</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                ${hourlyRate}
                <span className="text-sm font-normal text-gray-500">
                  /hour
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <p className="text-sm font-medium text-cyan-700">Total Cost</p>
              <p className="mt-1 text-2xl font-bold text-cyan-600">
                ${totalCost}
              </p>
              {startTime && endTime && (
                <p className="mt-1 text-xs text-gray-500">
                  {startTime} – {endTime}
                </p>
              )}
            </div>
          </div>

          {/* Special Note */}
          <div className="mt-7">
            <label
              htmlFor="special-note"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Special Note{" "}
              <span className="font-normal text-gray-400">(Optional)</span>
            </label>
            <textarea
              id="special-note"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="Add any special request or note..."
              rows={4}
              maxLength={500}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
            <p className="mt-1 text-right text-xs text-gray-400">
              {specialNote.length}/500
            </p>
          </div>

          {/* Confirm Booking */}
          <div className="mt-7 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Ready to book?
              </p>
              <p className="text-xs text-gray-500">
                Your booking will be checked for time conflicts.
              </p>
            </div>

            <button
              type="submit"
              disabled={!date || !startTime || !endTime || loading}
              className="w-full rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingCard;