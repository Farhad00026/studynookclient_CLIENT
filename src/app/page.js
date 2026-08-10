import Banner from "@/Component/Banner";
import RoomsCardView from "@/Component/RoomsCardView";
import Testimonials from "@/Component/Testimonials";
import WhyChooseStudyNook from "@/Component/WhyChooseStudyNook";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/study/limit`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch study rooms");
  }

  const rooms = await res.json();

  return (
    <main>
      {/* Hero Section */}
      <Banner />

      {/* Special Rooms */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Explore Our Spaces
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Special Study Rooms
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Discover comfortable and convenient study rooms designed for
            focused learning and productive sessions.
          </p>
        </div>

        {/* Room Cards */}
        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomsCardView
                key={room._id}
                room={room}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-gray-50 py-12 text-center">
            <p className="text-gray-500">
              No study rooms available right now.
            </p>
          </div>
        )}
      </section>

      {/* Why StudyNook */}
      <WhyChooseStudyNook />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
