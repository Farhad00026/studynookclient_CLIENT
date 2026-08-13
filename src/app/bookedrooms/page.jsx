import { headers } from "next/headers";
import { BookingsList } from "@/Component/BookingsList";
import { auth } from "@/lib/auth";

const BookedRoomsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="p-6 text-center text-sm text-gray-500">
        Please sign in to view your booked rooms.
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/bookings/${user.id}`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="p-6 text-center text-sm text-red-500">
        Failed to load your bookings. Please try again later.
      </div>
    );
  }

  const rooms = await res.json();

  return (
    <div className="p-4 sm:p-6">
      <h1 className="mb-4 text-xl font-bold sm:text-2xl">My Bookings</h1>
      <BookingsList initialRooms={rooms} />
    </div>
  );
};

export default BookedRoomsPage;