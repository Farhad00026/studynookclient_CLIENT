"use client";
import Image from "next/image";
import toast from "react-hot-toast";
export const TableCarddata = ({ room, onEdit, onDelete }) => {
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

  const handleDelete = () => {
    onDelete?.(room);
    toast.error("Room deleted successfully!");
  };

  const handleEdit = () => {
    onEdit?.(room);
    toast.success("Post Edited")
  };

  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50">
      {/* Room */}
      <td className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-16 overflow-hidden rounded-md">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">ID: {_id}</p>
          </div>
        </div>
      </td>

      {/* Description */}
      <td className="p-3 text-gray-600 max-w-[200px]">
        {description?.length > 60
          ? description.slice(0, 60) + "..."
          : description}
      </td>

      {/* Floor */}
      <td className="p-3">
        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600">
          {floor}
        </span>
      </td>

      {/* Capacity */}
      <td className="p-3 text-gray-700">
        {capacity?.min} - {capacity?.max}
      </td>

      {/* Rate */}
      <td className="p-3 font-semibold text-cyan-600">${hourlyRate}/hr</td>

      {/* Amenities */}
      <td className="p-3">
        <div className="flex flex-wrap gap-1">
          {amenities?.slice(0, 2).map((a, i) => (
            <span
              key={i}
              className="rounded-full bg-cyan-50 px-2 py-1 text-xs text-cyan-700"
            >
              {a}
            </span>
          ))}

          {amenities?.length > 2 && (
            <span className="text-xs text-gray-500">
              +{amenities.length - 2}
            </span>
          )}
        </div>
      </td>

      {/* Actions */}
      <td className="p-3">
        <div className="flex justify-center gap-2">
          <button
            onClick={handleEdit}
            className="rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-200"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="rounded-md bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};