import { AddRoomForm } from "@/Component/AddRoomForm";
import { TableCarddata } from "@/Component/Tablerooms";
import { Button } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const {token} = await auth.api.getToken({
          headers:  await headers()
      })
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/study`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "authorization":`Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch rooms");
  }

  const rooms = await res.json();


  return (
    <div className="p-4 sm:p-6">
      
      {rooms.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
          No rooms found.
        </div>
      ) : (
        <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Room</th>
                <th className="p-3">Description</th>
                <th className="p-3">Floor</th>
                <th className="p-3">Capacity</th>
                <th className="p-3">Rate</th>
                <th className="p-3">Amenities</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <TableCarddata key={room._id} room={room} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;