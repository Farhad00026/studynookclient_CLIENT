"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { CancelBookingModal } from "./CancelBookingModal";

export function BookedinformationCard({ room, onCancel }) {
  const {
    _id,
    userId,
    userName,
    userEmail,
    roomId,
    roomName,
    roomDescription,
    roomFloor,
    hourlyRate,
    roomImage,
    date,
    startTime,
    endTime,
    totalCost,
    specialNote,
  } = room;

  const [isCancelOpen, setIsCancelOpen] = useState(false);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <>
      <Card className="w-full items-stretch md:flex-row">
        {/* Room Image */}
        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
          {roomImage ? (
            <Image
              src={roomImage}
              alt={roomName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs text-gray-400">
              No image
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <div className="flex items-center gap-2 pe-8">
              <Card.Title>{roomName}</Card.Title>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                Floor {roomFloor}
              </span>
            </div>

            <Card.Description>
              {roomDescription?.length > 100
                ? roomDescription.slice(0, 100) + "..."
                : roomDescription}
            </Card.Description>
          </Card.Header>

          {/* Booking details */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-6 text-sm sm:grid-cols-4">
            <div>
              <p className="text-xs text-gray-400">Date</p>
              <p className="font-medium text-gray-800">{formattedDate}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Time</p>
              <p className="font-medium text-gray-800">
                {startTime} – {endTime}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Hourly Rate</p>
              <p className="font-medium text-gray-800">${hourlyRate}/hr</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Booked By</p>
              <p className="font-medium text-gray-800">{userName}</p>
              <p className="text-xs text-gray-400">{userEmail}</p>
            </div>
          </div>

          {specialNote && (
            <div className="mx-6 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">
              <span className="font-semibold text-gray-700">Note: </span>
              {specialNote}
            </div>
          )}

          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                Total Cost
              </span>
              <span className="text-lg font-bold text-cyan-600">
                ${totalCost}
              </span>
            </div>

            <Button
              className="w-full sm:w-auto"
              color="danger"
              variant="ghost"
              onClick={() => setIsCancelOpen(true)}
            >
              Cancel Booking
            </Button>
          </Card.Footer>
        </div>
      </Card>

      {isCancelOpen && (
        <CancelBookingModal
          booking={room}
          onClose={() => setIsCancelOpen(false)}
          onConfirm={async () => {
            await onCancel?.(_id);
            setIsCancelOpen(false);
          }}
        />
      )}
    </>
  );
}