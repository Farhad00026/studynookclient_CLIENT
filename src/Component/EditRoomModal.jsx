"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const EditRoomModal = ({ room, onClose }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: room.name || "",
    description: room.description || "",
    floor: room.floor || "",
    capacityMin: room.capacity?.min ?? "",
    capacityMax: room.capacity?.max ?? "",
    hourlyRate: room.hourlyRate ?? "",
    image: room.image || "",
    amenities: room.amenities?.join(", ") || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Room name is required";
    if (!form.description.trim()) return "Description is required";
    if (!form.floor.trim()) return "Floor is required";
    if (form.capacityMin === "" || form.capacityMax === "")
      return "Capacity min and max are required";
    if (Number(form.capacityMin) > Number(form.capacityMax))
      return "Capacity min cannot be greater than max";
    if (!form.hourlyRate || Number(form.hourlyRate) <= 0)
      return "Valid hourly rate is required";
    if (!form.image.trim()) return "Image URL is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      floor: form.floor.trim(),
      capacity: {
        min: Number(form.capacityMin),
        max: Number(form.capacityMax),
      },
      hourlyRate: Number(form.hourlyRate),
      image: form.image.trim(),
      amenities: form.amenities
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean),
    };

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/study/${room._id}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Failed to update room");
      }

      toast.success("Room updated successfully");
      router.refresh();
      onClose();
    } catch (err) {
      toast.error(err.message || "Something went wrong");
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
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 shadow-xl sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold sm:text-xl">Edit Room</h2>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-gray-500 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Room Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Floor
              </label>
              <input
                type="text"
                name="floor"
                value={form.floor}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Hourly Rate ($)
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={form.hourlyRate}
                onChange={handleChange}
                min="0"
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Capacity Min
              </label>
              <input
                type="number"
                name="capacityMin"
                value={form.capacityMin}
                onChange={handleChange}
                min="0"
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Capacity Max
              </label>
              <input
                type="number"
                name="capacityMax"
                value={form.capacityMax}
                onChange={handleChange}
                min="0"
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Amenities (comma separated)
              </label>
              <input
                type="text"
                name="amenities"
                value={form.amenities}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};