"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export const CancelBookingModal = ({ booking, onClose, onConfirm }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl sm:p-6"
      >
        <h2 className="text-lg font-bold text-gray-900">Cancel Booking</h2>
        <p className="mt-2 text-sm text-gray-600">
          Are you sure you want to cancel your booking for{" "}
          <span className="font-semibold text-gray-900">
            {booking.roomName}
          </span>{" "}
          on {booking.date} ({booking.startTime}–{booking.endTime})? This
          action cannot be undone.
        </p>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
          >
            Keep Booking
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Canceling..." : "Yes, Cancel"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};